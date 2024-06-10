import { WalletConnector } from "../../types";
import { ExtractPropTypes, PropType } from "vue";
export declare const createInstructionExtensionDetailProps: {
    readonly wallet: {
        readonly type: PropType<WalletConnector>;
        readonly required: false;
    };
};
export type InstructionExtensionDetailProps = ExtractPropTypes<typeof createInstructionExtensionDetailProps>;
export declare const InstructionExtensionDetail: import("vue").DefineComponent<{
    readonly wallet: {
        readonly type: PropType<WalletConnector>;
        readonly required: false;
    };
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<ExtractPropTypes<{
    readonly wallet: {
        readonly type: PropType<WalletConnector>;
        readonly required: false;
    };
}>>, {}, {}>;
//# sourceMappingURL=InstructionExtensionDetail.d.ts.map