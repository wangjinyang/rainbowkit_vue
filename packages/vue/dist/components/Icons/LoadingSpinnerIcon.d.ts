import { WalletConnector } from "../../types";
import { PropType } from "vue";
export declare const createLoadingSpinnerIconProps: {
    readonly wallet: {
        readonly type: PropType<WalletConnector>;
        readonly required: true;
    };
};
export declare const LoadingSpinnerIcon: import("vue").DefineComponent<{
    readonly wallet: {
        readonly type: PropType<WalletConnector>;
        readonly required: true;
    };
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    readonly wallet: {
        readonly type: PropType<WalletConnector>;
        readonly required: true;
    };
}>>, {}, {}>;
//# sourceMappingURL=LoadingSpinnerIcon.d.ts.map