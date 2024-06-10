import { Size } from "../../types";
import { PropType } from "vue";
export declare const createActionButtonProps: {
    readonly href: StringConstructor;
    readonly label: {
        readonly type: StringConstructor;
        readonly required: true;
    };
    readonly rel: {
        readonly type: StringConstructor;
        readonly default: "noreferrer noopener";
    };
    readonly size: {
        readonly type: PropType<Size>;
        readonly default: "medium";
    };
    readonly target: {
        readonly type: StringConstructor;
        readonly default: "_blank";
    };
    readonly type: {
        readonly type: PropType<"primary" | "secondary">;
        readonly default: "primary";
    };
    readonly disabled: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
};
export declare const ActionButton: import("vue").DefineComponent<{
    readonly href: StringConstructor;
    readonly label: {
        readonly type: StringConstructor;
        readonly required: true;
    };
    readonly rel: {
        readonly type: StringConstructor;
        readonly default: "noreferrer noopener";
    };
    readonly size: {
        readonly type: PropType<Size>;
        readonly default: "medium";
    };
    readonly target: {
        readonly type: StringConstructor;
        readonly default: "_blank";
    };
    readonly type: {
        readonly type: PropType<"primary" | "secondary">;
        readonly default: "primary";
    };
    readonly disabled: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "action"[], "action", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    readonly href: StringConstructor;
    readonly label: {
        readonly type: StringConstructor;
        readonly required: true;
    };
    readonly rel: {
        readonly type: StringConstructor;
        readonly default: "noreferrer noopener";
    };
    readonly size: {
        readonly type: PropType<Size>;
        readonly default: "medium";
    };
    readonly target: {
        readonly type: StringConstructor;
        readonly default: "_blank";
    };
    readonly type: {
        readonly type: PropType<"primary" | "secondary">;
        readonly default: "primary";
    };
    readonly disabled: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
}>> & {
    onAction?: ((...args: any[]) => any) | undefined;
}, {
    readonly type: "primary" | "secondary";
    readonly size: Size;
    readonly disabled: boolean;
    readonly target: string;
    readonly rel: string;
}, {}>;
//# sourceMappingURL=ActionButton.d.ts.map