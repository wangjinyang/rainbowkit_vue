import { WalletConnector } from "../../types";
import { ExtractPropTypes, PropType } from "vue";
export declare const createInstructionMobileDetailProps: {
    readonly connectWallet: {
        readonly type: PropType<(wallet: WalletConnector) => void>;
        readonly required: true;
    };
    readonly wallet: {
        readonly type: PropType<WalletConnector>;
        readonly required: false;
    };
};
export type InstructionMobileDetailProps = ExtractPropTypes<typeof createInstructionMobileDetailProps>;
export declare const InstructionMobileDetail: import("vue").DefineComponent<{
    readonly connectWallet: {
        readonly type: PropType<(wallet: WalletConnector) => void>;
        readonly required: true;
    };
    readonly wallet: {
        readonly type: PropType<WalletConnector>;
        readonly required: false;
    };
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<ExtractPropTypes<{
    readonly connectWallet: {
        readonly type: PropType<(wallet: WalletConnector) => void>;
        readonly required: true;
    };
    readonly wallet: {
        readonly type: PropType<WalletConnector>;
        readonly required: false;
    };
}>>, {}, {}>;
//# sourceMappingURL=InstructionMobileDetail.d.ts.map