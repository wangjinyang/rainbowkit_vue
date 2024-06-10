import { PropType, SlotsType } from "vue";
export declare const createMobileStatusProps: {
    readonly onClosed: {
        readonly type: PropType<() => void>;
        readonly required: true;
    };
};
export declare const MobileStatus: import("vue").DefineComponent<{
    readonly onClosed: {
        readonly type: PropType<() => void>;
        readonly required: true;
    };
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}> | import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>[], unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    readonly onClosed: {
        readonly type: PropType<() => void>;
        readonly required: true;
    };
}>>, {}, SlotsType<{
    default: {
        connectorName: string;
        onClosed: (() => void);
    };
}>>;
//# sourceMappingURL=MobileStatus.d.ts.map