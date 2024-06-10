import { PropType } from "vue";
export declare const createDialogProps: {
    readonly paddingBottom: PropType<string | undefined>;
    readonly marginTop: PropType<string | undefined>;
    readonly padding: {
        readonly type: PropType<string | undefined>;
        readonly default: "16";
    };
    readonly bottomSheetOnMobile: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly identifier: {
        readonly type: StringConstructor;
        readonly default: "rk-dialog";
    };
    readonly target: {
        readonly type: StringConstructor;
        readonly default: "body";
    };
    readonly wide: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly open: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
};
export declare const Dialog: import("vue").DefineComponent<{
    readonly paddingBottom: PropType<string | undefined>;
    readonly marginTop: PropType<string | undefined>;
    readonly padding: {
        readonly type: PropType<string | undefined>;
        readonly default: "16";
    };
    readonly bottomSheetOnMobile: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly identifier: {
        readonly type: StringConstructor;
        readonly default: "rk-dialog";
    };
    readonly target: {
        readonly type: StringConstructor;
        readonly default: "body";
    };
    readonly wide: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly open: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}> | undefined, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "closed"[], "closed", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    readonly paddingBottom: PropType<string | undefined>;
    readonly marginTop: PropType<string | undefined>;
    readonly padding: {
        readonly type: PropType<string | undefined>;
        readonly default: "16";
    };
    readonly bottomSheetOnMobile: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly identifier: {
        readonly type: StringConstructor;
        readonly default: "rk-dialog";
    };
    readonly target: {
        readonly type: StringConstructor;
        readonly default: "body";
    };
    readonly wide: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly open: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
}>> & {
    onClosed?: ((...args: any[]) => any) | undefined;
}, {
    readonly padding: string | undefined;
    readonly open: boolean;
    readonly target: string;
    readonly wide: boolean;
    readonly bottomSheetOnMobile: boolean;
    readonly identifier: string;
}, {}>;
//# sourceMappingURL=Dialog.d.ts.map