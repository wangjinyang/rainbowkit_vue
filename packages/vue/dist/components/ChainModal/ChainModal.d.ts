import { RainbowKitChain, DisconnectMutate } from "../../types";
import { SlotsType } from "vue";
export declare const createChainModalProps: {
    readonly open: {
        readonly type: BooleanConstructor;
        readonly required: true;
    };
};
export declare const ChainModal: import("vue").DefineComponent<{
    readonly open: {
        readonly type: BooleanConstructor;
        readonly required: true;
    };
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "closed"[], "closed", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    readonly open: {
        readonly type: BooleanConstructor;
        readonly required: true;
    };
}>> & {
    onClosed?: ((...args: any[]) => any) | undefined;
}, {}, SlotsType<{
    default: {
        isCurrentChainSupported: boolean;
        chains: Array<RainbowKitChain> | undefined;
        pendingChainId: number | undefined;
        disconnect: DisconnectMutate;
    };
}>>;
//# sourceMappingURL=ChainModal.d.ts.map