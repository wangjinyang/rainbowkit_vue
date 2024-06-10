import { Transaction } from "../../types";
import { PropType } from "vue";
export declare const createTransactionItemProps: {
    readonly transaction: {
        readonly type: PropType<Transaction>;
        readonly required: true;
    };
};
export declare const TransactionItem: import("vue").DefineComponent<{
    readonly transaction: {
        readonly type: PropType<Transaction>;
        readonly required: true;
    };
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    readonly transaction: {
        readonly type: PropType<Transaction>;
        readonly required: true;
    };
}>>, {}, {}>;
//# sourceMappingURL=TransactionItem.d.ts.map