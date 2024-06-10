import { AsyncImageSrc } from "../../types";
import { PropType } from "vue";
export declare const createDownloadOptionsProps: {
    readonly iconAccent: StringConstructor;
    readonly iconBackground: StringConstructor;
    readonly url: StringConstructor;
    readonly title: {
        readonly type: StringConstructor;
        readonly required: true;
    };
    readonly description: {
        readonly type: StringConstructor;
        readonly required: true;
    };
    readonly actionLabel: {
        readonly type: StringConstructor;
        readonly required: true;
    };
    readonly isCompact: {
        readonly type: BooleanConstructor;
        readonly required: true;
    };
    readonly variant: {
        readonly type: PropType<"desktop" | "browser" | "app">;
        readonly required: true;
    };
    readonly iconUrl: {
        readonly type: PropType<string | AsyncImageSrc>;
        readonly required: true;
    };
    readonly onAction: PropType<() => void>;
};
export declare const DownloadOptionsBox: import("vue").DefineComponent<{
    readonly iconAccent: StringConstructor;
    readonly iconBackground: StringConstructor;
    readonly url: StringConstructor;
    readonly title: {
        readonly type: StringConstructor;
        readonly required: true;
    };
    readonly description: {
        readonly type: StringConstructor;
        readonly required: true;
    };
    readonly actionLabel: {
        readonly type: StringConstructor;
        readonly required: true;
    };
    readonly isCompact: {
        readonly type: BooleanConstructor;
        readonly required: true;
    };
    readonly variant: {
        readonly type: PropType<"desktop" | "browser" | "app">;
        readonly required: true;
    };
    readonly iconUrl: {
        readonly type: PropType<string | AsyncImageSrc>;
        readonly required: true;
    };
    readonly onAction: PropType<() => void>;
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    readonly iconAccent: StringConstructor;
    readonly iconBackground: StringConstructor;
    readonly url: StringConstructor;
    readonly title: {
        readonly type: StringConstructor;
        readonly required: true;
    };
    readonly description: {
        readonly type: StringConstructor;
        readonly required: true;
    };
    readonly actionLabel: {
        readonly type: StringConstructor;
        readonly required: true;
    };
    readonly isCompact: {
        readonly type: BooleanConstructor;
        readonly required: true;
    };
    readonly variant: {
        readonly type: PropType<"desktop" | "browser" | "app">;
        readonly required: true;
    };
    readonly iconUrl: {
        readonly type: PropType<string | AsyncImageSrc>;
        readonly required: true;
    };
    readonly onAction: PropType<() => void>;
}>>, {}, {}>;
//# sourceMappingURL=DownloadOptionsBox.d.ts.map