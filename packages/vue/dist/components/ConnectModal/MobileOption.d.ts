import { MobileWalletSteps, WalletConnector, type MobileWalletSummary } from '../../types';
import { PropType, SlotsType, DefineComponent, Component } from 'vue';
export declare const createMobileOptionProps: {
    readonly onClosed: {
        readonly type: PropType<() => void>;
        readonly required: true;
    };
};
export declare const MobileOption: DefineComponent<{
    readonly onClosed: {
        readonly type: PropType<() => void>;
        readonly required: true;
    };
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}> | import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>[], unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    readonly onClosed: {
        readonly type: PropType<() => void>;
        readonly required: true;
    };
}>>, {}, SlotsType<{
    default: {
        fragment: MobileWalletSummary;
        step: MobileWalletSteps;
        wallets: Array<WalletConnector>;
        disclaimer: Component | undefined;
        changeWalletStep: (headerBackButtonLink: MobileWalletSteps) => void;
        learnMoreUrl: string | undefined;
    };
}>>;
//# sourceMappingURL=MobileOption.d.ts.map