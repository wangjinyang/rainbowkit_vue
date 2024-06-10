import { PropType } from "vue";
export declare const createAvatarProps: {
    readonly address: {
        readonly type: PropType<`0x${string}`>;
        readonly required: true;
    };
    readonly loading: BooleanConstructor;
    readonly imageUrl: PropType<string | null>;
    readonly size: {
        readonly type: NumberConstructor;
        readonly required: true;
    };
};
export declare const Avatar: import("vue").DefineComponent<{
    readonly address: {
        readonly type: PropType<`0x${string}`>;
        readonly required: true;
    };
    readonly loading: BooleanConstructor;
    readonly imageUrl: PropType<string | null>;
    readonly size: {
        readonly type: NumberConstructor;
        readonly required: true;
    };
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    readonly address: {
        readonly type: PropType<`0x${string}`>;
        readonly required: true;
    };
    readonly loading: BooleanConstructor;
    readonly imageUrl: PropType<string | null>;
    readonly size: {
        readonly type: NumberConstructor;
        readonly required: true;
    };
}>>, {
    readonly loading: boolean;
}, {}>;
//# sourceMappingURL=Avatar.d.ts.map