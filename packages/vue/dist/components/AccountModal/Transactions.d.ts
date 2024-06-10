import { PropType } from "vue";
export declare const createTransactionsProps: {
    readonly address: {
        readonly type: PropType<`0x${string}`>;
        readonly required: true;
    };
};
export declare const Transactions: import("vue").DefineComponent<{
    readonly address: {
        readonly type: PropType<`0x${string}`>;
        readonly required: true;
    };
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>[], unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    readonly address: {
        readonly type: PropType<`0x${string}`>;
        readonly required: true;
    };
}>>, {}, {}>;
//# sourceMappingURL=Transactions.d.ts.map