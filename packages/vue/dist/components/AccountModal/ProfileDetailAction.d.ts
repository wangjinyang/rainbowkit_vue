import { Component, PropType } from "vue";
export declare const createProfileDetailActionProps: {
    readonly label: {
        readonly type: StringConstructor;
        readonly required: true;
    };
    readonly url: StringConstructor;
    readonly icon: {
        readonly type: PropType<Component>;
        readonly required: true;
    };
};
export declare const ProfileDetailAction: import("vue").DefineComponent<{
    readonly label: {
        readonly type: StringConstructor;
        readonly required: true;
    };
    readonly url: StringConstructor;
    readonly icon: {
        readonly type: PropType<Component>;
        readonly required: true;
    };
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "action"[], "action", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    readonly label: {
        readonly type: StringConstructor;
        readonly required: true;
    };
    readonly url: StringConstructor;
    readonly icon: {
        readonly type: PropType<Component>;
        readonly required: true;
    };
}>> & {
    onAction?: ((...args: any[]) => any) | undefined;
}, {}, {}>;
//# sourceMappingURL=ProfileDetailAction.d.ts.map