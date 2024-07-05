import { normalizeResponsiveValue } from '@/css'
import { ShowBalanceContextKey, Address, type Context, type RainbowKitPluginOptions, type ShowBalanceContext } from '@/types'
import { abbreviateETHBalance, isMobile } from '@/utils'
import { computed, inject, ref, toRefs,reactive, Ref, watch } from 'vue'
import { useConfig } from '@wagmi/vue'
import { multicall } from '@wagmi/core'
import { erc20Abi, formatUnits } from 'viem'
import { getBalance } from '@wagmi/vue/actions'

export function createRainbowKitBalanceContext(
  option: RainbowKitPluginOptions
): Context<ShowBalanceContext> {
  const { showBalance,currencyAddress } = option
  const context = ref<ShowBalanceContext>({ showBalance, currencyAddress })
  return context;
}

export function useRainbowKitBalance(address: Ref<Address| undefined>, chainId: Ref<number|undefined>) {
  const context = inject(ShowBalanceContextKey)
  if (!context)
    throw Error(`Could not find injected '${String(ShowBalanceContextKey)}' instance.`)

  const config = useConfig();
  const shouldShowBalance = computed<boolean>(() => {
    if (typeof context?.value.showBalance === 'boolean') {
      return context?.value.showBalance
    }

    if (context?.value.showBalance) {
      return (
        normalizeResponsiveValue(context.value.showBalance)[
          isMobile ? 'smallScreen' : 'largeScreen'
        ] ?? false
      )
    }
    return true
  })

  const symbol = ref<string>();
  const decimals = ref<number>();
  const value = ref<BigInt>();
  const balance = ref<string>();

  const readBalanceBySelectedCurrencyAddress = async(address: Address)=>{
      if(!context.value.currencyAddress) return;

      const contract = {
        address: context.value.currencyAddress,
        abi: erc20Abi,
      } as const;

      const account = await multicall(config,{
        contracts:[
          {
            ...contract,
            functionName: 'balanceOf', 
            args: [ address ], 
          },
          {
            ...contract,
            functionName: 'decimals', 
          },
          {
            ...contract,
            functionName: 'symbol', 
          },
        ]
    });

    if(account[0].error || account[1].error || account[2].error){
      await readBalanceByNative(address,false);
      return;
    }

    const balances = account[0].result ?? BigInt(0);
    const decimal = account[1].result ?? 18;
    const symbols = account[2].result ?? '';

    const formattedBalance = parseFloat(formatUnits(balances, decimal));
    symbol.value = symbols;
    decimals.value = decimal;
    value.value = balances;
    balance.value = `${abbreviateETHBalance(formattedBalance)} ${symbol.value}`;
  }

  const readBalanceByNative = async(address: Address, checkValidation: boolean = true)=>{
    if(checkValidation && context.value.currencyAddress) return;
    const result = await getBalance(config,{ address: address });
    const formattedBalance = parseFloat(formatUnits(result.value,result.decimals));
    symbol.value = result.symbol;
    decimals.value = result.decimals;
    value.value = result.value;
    balance.value = `${abbreviateETHBalance(formattedBalance)} ${result.symbol}`;
  }

  if(address.value){
    readBalanceBySelectedCurrencyAddress(address.value);
    readBalanceByNative(address.value);
  }

  watch([address,chainId], async ([newAddress, _]) =>{
    if(!newAddress) return;
    if(context.value.currencyAddress){
      await readBalanceBySelectedCurrencyAddress(newAddress);
      return;
    }
    await readBalanceByNative(newAddress);
  })

  return { shouldShowBalance, balance, symbol, decimals, value, ...toRefs(reactive(context.value)) }
}
