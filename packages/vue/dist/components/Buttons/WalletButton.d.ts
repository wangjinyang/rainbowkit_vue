import { WalletConnector } from "../../types";
import { SlotsType } from "vue";
export declare const WalletButton: import("vue").DefineComponent<{
    readonly wallet: {
        readonly type: StringConstructor;
        readonly default: "rainbow";
    };
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    readonly wallet: {
        readonly type: StringConstructor;
        readonly default: "rainbow";
    };
}>>, {
    readonly wallet: string;
}, SlotsType<{
    custom: {
        error: boolean;
        loading: boolean;
        connected: boolean;
        ready: boolean;
        connector?: WalletConnector;
        connect: () => Promise<void>;
    };
}>>;
//# sourceMappingURL=WalletButton.d.ts.map