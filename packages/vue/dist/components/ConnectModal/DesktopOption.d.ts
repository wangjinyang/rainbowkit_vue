import { WalletConnector, WalletStep, WalletSummary } from "../../types";
import { Component, DefineComponent, PropType, SlotsType } from "vue";
export declare const DesktopOptions: DefineComponent<{
    readonly onClosed: {
        readonly type: PropType<() => void>;
    };
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}> | import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>[], unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    readonly onClosed: {
        readonly type: PropType<() => void>;
    };
}>>, {}, SlotsType<{
    default: {
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
}>>;
//# sourceMappingURL=DesktopOption.d.ts.map