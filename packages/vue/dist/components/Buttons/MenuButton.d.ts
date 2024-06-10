export declare const createMenuButtonProps: {
    readonly currentlySelected: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
};
export declare const MenuButton: import("vue").DefineComponent<{
    readonly currentlySelected: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "action"[], "action", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    readonly currentlySelected: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
}>> & {
    onAction?: ((...args: any[]) => any) | undefined;
}, {
    readonly currentlySelected: boolean;
}, {}>;
//# sourceMappingURL=MenuButton.d.ts.map