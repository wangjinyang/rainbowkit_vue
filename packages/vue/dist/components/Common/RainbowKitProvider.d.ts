import { SignInRefType, Address, Chain, GetEnsAvatarReturnType, GetEnsNameReturnType, DisconnectMutate } from "../../types";
import { MobileWalletSteps, MobileWalletSummary, RainbowKitChain, WalletConnector, WalletStep, WalletSummary } from "../../types";
import { DefineComponent, SlotsType } from "vue";
export declare const RainbowKitProvider: DefineComponent<{}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}, SlotsType<{
    default: {};
    account: {
        ensName: GetEnsNameReturnType | undefined;
        ensAvatar: GetEnsAvatarReturnType | undefined;
        onDisconnect: (() => void);
        address: Address | undefined;
        onClosed: (() => void);
        formattedBalance: string | undefined;
        symbol: string | undefined;
        abbreviatedBalance: string | undefined;
        balance: BigInt | undefined;
    };
    chain: {
        isCurrentChainSupported: boolean;
        chains: Array<RainbowKitChain> | undefined;
        pendingChainId: number | undefined;
        disconnect: DisconnectMutate;
    };
    connectWithConnectorByMobile: {
        connectorName: string;
        onClosed: (() => void);
    };
    connectWithoutConnectorByMobile: {
        fragment: MobileWalletSummary;
        step: MobileWalletSteps;
        wallets: Array<WalletConnector>;
        disclaimer: DefineComponent | undefined;
        changeWalletStep: (headerBackButtonLink: MobileWalletSteps) => void;
        learnMoreUrl: string | undefined;
    };
    connectByDesktop: {
        groupWallets: Record<string, Array<WalletConnector>>;
        wallets: Array<WalletConnector>;
        disclaimer: DefineComponent | undefined;
        fragment: WalletSummary;
        changeWalletStep: (newWalletStep: WalletStep, isBack: boolean) => void;
        selectWallet: (connector: WalletConnector) => void;
        qrCodeUri: string | undefined;
        compactModalEnabled: boolean;
        hasQrCode: boolean;
        hasExtension: boolean;
        hasExtensionAndMobile: boolean;
    };
    authenticate: {
        signIn: (() => Promise<void>);
        verify: (message: any, signature: `0x${string}` | undefined) => Promise<void>;
        signMessage: (message: any) => Promise<`0x${string}` | undefined>;
        getNonce: (() => Promise<void>);
        signInInfo: SignInRefType;
        address: Address | undefined;
        chain: Chain | undefined;
    };
}>>;
//# sourceMappingURL=RainbowKitProvider.d.ts.map