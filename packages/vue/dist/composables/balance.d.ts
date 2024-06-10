import { Address, type Context, type RainbowKitPluginOptions, type ShowBalanceContext } from '../types';
import { Ref } from 'vue';
export declare function createRainbowKitBalanceContext(option: RainbowKitPluginOptions): Context<ShowBalanceContext>;
export declare function useRainbowKitBalance(address: Ref<Address | undefined>, chainId: Ref<number | undefined>): {
    showBalance: Ref<boolean | {
        smallScreen: boolean;
        largeScreen?: boolean | undefined;
    } | undefined>;
    currencyAddress?: Ref<`0x${string}` | undefined> | undefined;
    shouldShowBalance: import("vue").ComputedRef<boolean>;
    balance: Ref<string | undefined>;
    symbol: Ref<string | undefined>;
    decimals: Ref<number | undefined>;
    value: Ref<BigInt | undefined>;
};
//# sourceMappingURL=balance.d.ts.map