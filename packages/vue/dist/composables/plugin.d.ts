import { type RainbowKitPluginOptions, type WalletList, type ThemeOption, ModalSize, Chains } from '../types';
import { type App } from 'vue';
export declare const StyleComponent: import("vue").DefineComponent<{
    themeId: {
        type: StringConstructor;
        required: true;
    };
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    themeId: {
        type: StringConstructor;
        required: true;
    };
}>>, {}, {}>;
export declare function getDefaultPluginOptions(chains: Chains): Omit<RainbowKitPluginOptions, 'appName' | 'projectId'>;
export declare function computeRainbowKitPluginOptions(options: RainbowKitPluginOptions): {
    appName: string;
    appDescription?: string | undefined;
    appUrl?: string | undefined;
    appIcon?: string | undefined;
    projectId: string;
    connectModalTeleportTarget?: string | undefined;
    chainModalTeleportTarget?: string | undefined;
    accountModalTeleportTarget?: string | undefined;
    learnMoreUrl?: string | undefined;
    showRecentTransactions?: boolean | undefined;
    coolMode?: boolean | undefined;
    initialChainId?: number | undefined;
    ignoreChainModalOnConnect?: boolean | undefined;
    currencyAddress?: `0x${string}` | undefined;
    showBalance?: import("../css").ResponsiveValue<boolean> | undefined;
    disclaimer?: import("../types").DisclaimerComponentSetupFn | undefined;
    avatar?: import("../types").AvatarComponentSetupFn | undefined;
    connectModalIntro?: import("..").ConnectModalIntroComponentSetupFn | undefined;
    wallets?: WalletList | undefined;
    theme?: ThemeOption | undefined;
    locale?: import("../types").LocaleAdapterInstance | undefined;
    modalSize?: ModalSize | undefined;
    auth?: import("../types").AuthenticateOption | undefined;
    chains: import("../types").RainbowKitChains;
    batch?: {
        multicall?: boolean | {
            batchSize?: number | undefined;
            wait?: number | undefined;
        } | undefined;
    } | {
        [x: number]: {
            multicall?: boolean | {
                batchSize?: number | undefined;
                wait?: number | undefined;
            } | undefined;
        } | undefined;
    } | undefined;
    cacheTime?: number | {
        [x: number]: number | undefined;
    } | undefined;
    ccipRead?: false | {
        request?: ((parameters: import("viem").CcipRequestParameters) => Promise<`0x${string}`>) | undefined;
    } | {
        [x: number]: false | {
            request?: ((parameters: import("viem").CcipRequestParameters) => Promise<`0x${string}`>) | undefined;
        } | undefined;
    } | undefined;
    pollingInterval?: number | {
        [x: number]: number | undefined;
    } | undefined;
    rpcSchema?: {
        [x: number]: undefined;
    } | undefined;
    transports?: import("../types").RainbowKitTransports | undefined;
    multiInjectedProviderDiscovery?: boolean | undefined;
    storage?: import("@wagmi/vue").Storage | null | undefined;
    ssr?: boolean | undefined;
    syncConnectedChain?: boolean | undefined;
    connectors: import("@wagmi/vue").CreateConnectorFn[] | undefined;
};
export declare function useRainbowKitPlugin(): {
    install: (app: App, option: RainbowKitPluginOptions) => void;
};
//# sourceMappingURL=plugin.d.ts.map