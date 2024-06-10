import { WalletConnector } from "../../types";
import { ExtractPropTypes, PropType } from "vue";
export declare const createInstructionDesktopDetail: {
    readonly connectWallet: {
        readonly type: PropType<(wallet: WalletConnector) => void>;
        readonly required: true;
    };
    readonly wallet: {
        readonly type: PropType<WalletConnector>;
        readonly required: false;
    };
};
export type InstructionDesktopDetailProps = ExtractPropTypes<typeof createInstructionDesktopDetail>;
export declare const InstructionDesktopDetail: import("vue").DefineComponent<{
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
//# sourceMappingURL=InstructionDesktopDetail.d.ts.map