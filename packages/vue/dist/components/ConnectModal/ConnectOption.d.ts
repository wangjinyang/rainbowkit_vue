import { MobileWalletSteps, MobileWalletSummary, WalletConnector, WalletStep, WalletSummary } from "../../types";
import { Component, PropType, SlotsType } from "vue";
export declare const ConnectOption: import("vue").DefineComponent<{
    readonly onClosed: {
        readonly type: PropType<() => void>;
        readonly required: true;
    };
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    readonly onClosed: {
        readonly type: PropType<() => void>;
        readonly required: true;
    };
}>>, {}, SlotsType<{
    desktop: {
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
    mobileWithoutConnector: {
        fragment: MobileWalletSummary;
        step: MobileWalletSteps;
        wallets: Array<WalletConnector>;
        disclaimer: Component | undefined;
        changeWalletStep: (headerBackButtonLink: MobileWalletSteps) => void;
        learnMoreUrl: string | undefined;
    };
    mobileWithConnector: {
        connectorName: string;
        onClosed: (() => void);
    };
}>>;
//# sourceMappingURL=ConnectOption.d.ts.map