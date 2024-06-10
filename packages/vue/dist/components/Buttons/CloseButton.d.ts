export declare const createCloseButton: {
    readonly ariaLabel: {
        readonly type: StringConstructor;
        readonly default: "Close";
    };
};
export declare const CloseButton: import("vue").DefineComponent<{
    readonly ariaLabel: {
        readonly type: StringConstructor;
        readonly default: "Close";
    };
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "closed"[], "closed", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    readonly ariaLabel: {
        readonly type: StringConstructor;
        readonly default: "Close";
    };
}>> & {
    onClosed?: ((...args: any[]) => any) | undefined;
}, {
    readonly ariaLabel: string;
}, {}>;
//# sourceMappingURL=CloseButton.d.ts.map