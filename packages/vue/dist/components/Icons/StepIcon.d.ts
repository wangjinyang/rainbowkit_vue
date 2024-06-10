import { RainbowKitInstructionStepName, WalletConnector } from "../../types";
import { PropType } from "vue";
export declare const createStepProps: {
    readonly step: {
        readonly type: PropType<RainbowKitInstructionStepName>;
        readonly required: true;
    };
    readonly wallet: PropType<WalletConnector>;
};
export declare const StepIcon: import("vue").DefineComponent<{
    readonly step: {
        readonly type: PropType<RainbowKitInstructionStepName>;
        readonly required: true;
    };
    readonly wallet: PropType<WalletConnector>;
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    readonly step: {
        readonly type: PropType<RainbowKitInstructionStepName>;
        readonly required: true;
    };
    readonly wallet: PropType<WalletConnector>;
}>>, {}, {}>;
//# sourceMappingURL=StepIcon.d.ts.map