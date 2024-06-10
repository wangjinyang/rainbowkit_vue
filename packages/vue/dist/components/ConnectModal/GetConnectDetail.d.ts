import { ExtractPropTypes, PropType } from "vue";
export declare const createGetConnectDetailProps: {
    readonly getWalletDownload: {
        readonly type: PropType<(walletId: string) => void>;
        readonly required: true;
    };
    readonly compactModeEnabled: {
        readonly type: BooleanConstructor;
        readonly required: false;
    };
};
export type GetConnectDetailProps = ExtractPropTypes<typeof createGetConnectDetailProps>;
export declare const GetConnectDetail: import("vue").DefineComponent<{
    readonly getWalletDownload: {
        readonly type: PropType<(walletId: string) => void>;
        readonly required: true;
    };
    readonly compactModeEnabled: {
        readonly type: BooleanConstructor;
        readonly required: false;
    };
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<ExtractPropTypes<{
    readonly getWalletDownload: {
        readonly type: PropType<(walletId: string) => void>;
        readonly required: true;
    };
    readonly compactModeEnabled: {
        readonly type: BooleanConstructor;
        readonly required: false;
    };
}>>, {
    readonly compactModeEnabled: boolean;
}, {}>;
//# sourceMappingURL=GetConnectDetail.d.ts.map