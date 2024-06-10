import { AsyncImageSrc } from "../../types";
import { PropType } from "vue";
export declare const createChainBoxProps: {
    readonly chainId: {
        readonly type: PropType<number>;
        readonly required: true;
    };
    readonly currentChainId: {
        readonly type: PropType<number | undefined>;
        readonly required: true;
    };
    readonly switchChain: {
        readonly type: PropType<import("@wagmi/vue/query").SwitchChainMutate<import("../../types").Config, unknown>>;
        readonly required: true;
    };
    readonly chainIconSize: {
        readonly type: PropType<string | undefined>;
        readonly required: true;
    };
    readonly isLoading: {
        readonly type: PropType<boolean>;
        readonly required: true;
        readonly default: false;
    };
    readonly iconBackground: {
        readonly type: PropType<string | undefined>;
        readonly required: true;
    };
    readonly isConnected: {
        readonly type: PropType<boolean>;
        readonly default: false;
    };
    readonly src: PropType<string | AsyncImageSrc>;
    readonly idx: PropType<number>;
    readonly name: PropType<string>;
};
export declare const ChainBox: import("vue").DefineComponent<{
    readonly chainId: {
        readonly type: PropType<number>;
        readonly required: true;
    };
    readonly currentChainId: {
        readonly type: PropType<number | undefined>;
        readonly required: true;
    };
    readonly switchChain: {
        readonly type: PropType<import("@wagmi/vue/query").SwitchChainMutate<import("../../types").Config, unknown>>;
        readonly required: true;
    };
    readonly chainIconSize: {
        readonly type: PropType<string | undefined>;
        readonly required: true;
    };
    readonly isLoading: {
        readonly type: PropType<boolean>;
        readonly required: true;
        readonly default: false;
    };
    readonly iconBackground: {
        readonly type: PropType<string | undefined>;
        readonly required: true;
    };
    readonly isConnected: {
        readonly type: PropType<boolean>;
        readonly default: false;
    };
    readonly src: PropType<string | AsyncImageSrc>;
    readonly idx: PropType<number>;
    readonly name: PropType<string>;
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    readonly chainId: {
        readonly type: PropType<number>;
        readonly required: true;
    };
    readonly currentChainId: {
        readonly type: PropType<number | undefined>;
        readonly required: true;
    };
    readonly switchChain: {
        readonly type: PropType<import("@wagmi/vue/query").SwitchChainMutate<import("../../types").Config, unknown>>;
        readonly required: true;
    };
    readonly chainIconSize: {
        readonly type: PropType<string | undefined>;
        readonly required: true;
    };
    readonly isLoading: {
        readonly type: PropType<boolean>;
        readonly required: true;
        readonly default: false;
    };
    readonly iconBackground: {
        readonly type: PropType<string | undefined>;
        readonly required: true;
    };
    readonly isConnected: {
        readonly type: PropType<boolean>;
        readonly default: false;
    };
    readonly src: PropType<string | AsyncImageSrc>;
    readonly idx: PropType<number>;
    readonly name: PropType<string>;
}>>, {
    readonly isConnected: boolean;
    readonly isLoading: boolean;
}, {}>;
//# sourceMappingURL=ChainBox.d.ts.map