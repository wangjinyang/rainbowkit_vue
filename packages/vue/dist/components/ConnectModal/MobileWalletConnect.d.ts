import { MobileWalletSteps, WalletConnector } from "../../types";
import { Component, PropType } from "vue";
export declare const createMobileWalletConnectProps: {
    readonly disclaimer: PropType<Component>;
    readonly learnMoreUrl: PropType<string>;
    readonly walletStep: {
        readonly type: PropType<MobileWalletSteps>;
        readonly required: true;
    };
    readonly wallets: {
        readonly type: PropType<WalletConnector[]>;
        readonly required: true;
    };
    readonly onClosed: {
        readonly type: PropType<() => void>;
        readonly required: true;
    };
    readonly changeWalletStep: {
        readonly type: PropType<(step: MobileWalletSteps) => void>;
        readonly required: true;
    };
};
export declare const MobileWalletConnect: import("vue").DefineComponent<{
    readonly disclaimer: PropType<Component>;
    readonly learnMoreUrl: PropType<string>;
    readonly walletStep: {
        readonly type: PropType<MobileWalletSteps>;
        readonly required: true;
    };
    readonly wallets: {
        readonly type: PropType<WalletConnector[]>;
        readonly required: true;
    };
    readonly onClosed: {
        readonly type: PropType<() => void>;
        readonly required: true;
    };
    readonly changeWalletStep: {
        readonly type: PropType<(step: MobileWalletSteps) => void>;
        readonly required: true;
    };
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    readonly disclaimer: PropType<Component>;
    readonly learnMoreUrl: PropType<string>;
    readonly walletStep: {
        readonly type: PropType<MobileWalletSteps>;
        readonly required: true;
    };
    readonly wallets: {
        readonly type: PropType<WalletConnector[]>;
        readonly required: true;
    };
    readonly onClosed: {
        readonly type: PropType<() => void>;
        readonly required: true;
    };
    readonly changeWalletStep: {
        readonly type: PropType<(step: MobileWalletSteps) => void>;
        readonly required: true;
    };
}>>, {}, {}>;
//# sourceMappingURL=MobileWalletConnect.d.ts.map