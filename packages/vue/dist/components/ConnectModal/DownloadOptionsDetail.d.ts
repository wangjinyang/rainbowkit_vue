import { WalletConnector, WalletStep } from "../../types";
import { ExtractPropTypes, PropType } from "vue";
export declare const createDownloadOptionsDetail: {
    readonly changeWalletStep: {
        readonly type: PropType<(step: WalletStep) => void>;
        readonly required: true;
    };
    readonly wallet: {
        readonly type: PropType<WalletConnector>;
        readonly required: false;
    };
};
export type DownloadOptionsDetailProps = ExtractPropTypes<typeof createDownloadOptionsDetail>;
export declare const DownloadOptionsDetail: import("vue").DefineComponent<{
    readonly changeWalletStep: {
        readonly type: PropType<(step: WalletStep) => void>;
        readonly required: true;
    };
    readonly wallet: {
        readonly type: PropType<WalletConnector>;
        readonly required: false;
    };
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<ExtractPropTypes<{
    readonly changeWalletStep: {
        readonly type: PropType<(step: WalletStep) => void>;
        readonly required: true;
    };
    readonly wallet: {
        readonly type: PropType<WalletConnector>;
        readonly required: false;
    };
}>>, {}, {}>;
//# sourceMappingURL=DownloadOptionsDetail.d.ts.map