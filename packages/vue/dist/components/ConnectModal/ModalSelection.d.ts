import { PropType } from 'vue';
export declare const createModalSelectionProps: {
    readonly as: {
        readonly type: PropType<keyof import("vue").IntrinsicElementAttributes>;
        readonly required: true;
        readonly default: "button";
    };
    readonly name: {
        readonly type: StringConstructor;
        readonly required: true;
    };
    readonly iconUrl: {
        readonly type: PropType<string | (() => Promise<string>)>;
        readonly required: true;
    };
    readonly currentlySelected: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly isRainbowKitConnector: BooleanConstructor;
    readonly iconBackground: StringConstructor;
    readonly ready: BooleanConstructor;
    readonly recent: BooleanConstructor;
};
export declare const ModalSelection: import("vue").DefineComponent<{
    readonly as: {
        readonly type: PropType<keyof import("vue").IntrinsicElementAttributes>;
        readonly required: true;
        readonly default: "button";
    };
    readonly name: {
        readonly type: StringConstructor;
        readonly required: true;
    };
    readonly iconUrl: {
        readonly type: PropType<string | (() => Promise<string>)>;
        readonly required: true;
    };
    readonly currentlySelected: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly isRainbowKitConnector: BooleanConstructor;
    readonly iconBackground: StringConstructor;
    readonly ready: BooleanConstructor;
    readonly recent: BooleanConstructor;
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "selectWallet"[], "selectWallet", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    readonly as: {
        readonly type: PropType<keyof import("vue").IntrinsicElementAttributes>;
        readonly required: true;
        readonly default: "button";
    };
    readonly name: {
        readonly type: StringConstructor;
        readonly required: true;
    };
    readonly iconUrl: {
        readonly type: PropType<string | (() => Promise<string>)>;
        readonly required: true;
    };
    readonly currentlySelected: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly isRainbowKitConnector: BooleanConstructor;
    readonly iconBackground: StringConstructor;
    readonly ready: BooleanConstructor;
    readonly recent: BooleanConstructor;
}>> & {
    onSelectWallet?: ((...args: any[]) => any) | undefined;
}, {
    readonly ready: boolean;
    readonly recent: boolean;
    readonly isRainbowKitConnector: boolean;
    readonly as: keyof import("vue").IntrinsicElementAttributes;
    readonly currentlySelected: boolean;
}, {}>;
//# sourceMappingURL=ModalSelection.d.ts.map