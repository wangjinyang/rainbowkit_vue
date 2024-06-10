import { PropType } from "vue";
export declare const createIconProps: {
    viewBox: {
        type: StringConstructor;
        required: boolean;
    };
    width: {
        type: PropType<string | number>;
        required: boolean;
    };
    height: {
        type: PropType<string | number>;
        required: boolean;
    };
    fillColor: {
        type: StringConstructor;
        default: string;
    };
    fillSvg: {
        type: StringConstructor;
        default: string;
    };
    title: {
        type: StringConstructor;
        required: boolean;
    };
    d: {
        type: StringConstructor;
        required: boolean;
    };
};
export declare const Icon: import("vue").DefineComponent<{
    viewBox: {
        type: StringConstructor;
        required: boolean;
    };
    width: {
        type: PropType<string | number>;
        required: boolean;
    };
    height: {
        type: PropType<string | number>;
        required: boolean;
    };
    fillColor: {
        type: StringConstructor;
        default: string;
    };
    fillSvg: {
        type: StringConstructor;
        default: string;
    };
    title: {
        type: StringConstructor;
        required: boolean;
    };
    d: {
        type: StringConstructor;
        required: boolean;
    };
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    viewBox: {
        type: StringConstructor;
        required: boolean;
    };
    width: {
        type: PropType<string | number>;
        required: boolean;
    };
    height: {
        type: PropType<string | number>;
        required: boolean;
    };
    fillColor: {
        type: StringConstructor;
        default: string;
    };
    fillSvg: {
        type: StringConstructor;
        default: string;
    };
    title: {
        type: StringConstructor;
        required: boolean;
    };
    d: {
        type: StringConstructor;
        required: boolean;
    };
}>>, {
    fillColor: string;
    fillSvg: string;
}, {}>;
//# sourceMappingURL=Icon.d.ts.map