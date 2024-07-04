import { useConnectionStatus } from "@/composables/connection";
import { useAuthenticationConfigContext } from "@/composables/authentication";
import { UseAccountReturnType, useConfig } from '@wagmi/vue'
import { onScopeDispose, reactive, readonly, ref, toRefs, watch } from 'vue'
import { getAccount, watchAccount } from "@wagmi/vue/actions";

///Rewrite use account
export function useRainbowKitAccount(): UseAccountReturnType {
  const config = useConfig();
  const account = reactive(getAccount(config))
  const unsubscribe = watchAccount(config, {
    onChange(current,prev) {
      Object.assign(account,{
        ...current
      });
    },
  })
  onScopeDispose(() => unsubscribe())
  return toRefs(readonly(account)) as UseAccountReturnType
}

///add binance wallet , backend chains 
export function useRainbowKitAccountContext(){  
  const { connector, isConnected, isConnecting, chainId, isDisconnected, isReconnecting, chain, address, addresses,status } = useRainbowKitAccount();
  const { status: authenticationStatus, adapter } = useAuthenticationConfigContext();
  const connectorUID = ref<string>()
  const connectionStatus = useConnectionStatus(isConnected,isConnecting,address);
  
  watch(
    [ ()=> connector.value?.id, ()=> connector.value?.emitter, ()=>authenticationStatus?.value, ()=> connectorUID.value ],
    async ([newConnectoruID, newEmitter, newStatus, newConnectorUID]) => {
      if(!newEmitter) return;

      if (typeof newEmitter.on === 'function' && newStatus === 'authenticated') {
        connectorUID.value = newConnectoruID;
        if(newConnectoruID !== newConnectorUID){
          connectorUID.value = undefined
          await adapter?.value?.signOut();
        }
        
        newEmitter.on('change', async (data) => {
          if (data.accounts) {
            connectorUID.value = undefined
            await adapter?.value?.signOut()
          }
        })
      }
    }
  );

  return {
    connector,
    address,
    addresses,
    isConnected,
    isConnecting,
    chainId,
    isDisconnected,
    isReconnecting,
    chain,
    connectionStatus,
    status,
    connectorUID,
  }
}
