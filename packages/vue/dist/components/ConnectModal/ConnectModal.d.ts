import { MobileWalletSteps, MobileWalletSummary, WalletConnector, WalletStep, WalletSummary, SignInRefType, Address, Chain } from "../../types";
import { Component, PropType, SlotsType } from "vue";
export declare const ConnectModal: import("vue").DefineComponent<{
    readonly open: {
        readonly type: BooleanConstructor;
        readonly default: false;
        readonly required: true;
    };
    readonly onClosed: {
        readonly type: PropType<() => void>;
        readonly required: true;
    };
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    readonly open: {
        readonly type: BooleanConstructor;
        readonly default: false;
        readonly required: true;
    };
    readonly onClosed: {
        readonly type: PropType<() => void>;
        readonly required: true;
    };
}>>, {}, SlotsType<{
    connectWithConnectorByMobile: {
        connectorName: string;
        onClosed: (() => void);
    };
    connectWithoutConnectorByMobile: {
        fragment: MobileWalletSummary;
        step: MobileWalletSteps;
        wallets: Array<WalletConnector>;
        disclaimer: Component | undefined;
        changeWalletStep: (headerBackButtonLink: MobileWalletSteps) => void;
        learnMoreUrl: string | undefined;
    };
    connectByDesktop: {
        groupWallets: Record<string, Array<WalletConnector>>;
        wallets: Array<WalletConnector>;
        disclaimer: Component | undefined;
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
//# sourceMappingURL=ConnectModal.d.ts.map