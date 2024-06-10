import { WalletConnector } from '../../types';
import { PropType } from 'vue';
export declare const createMobileWalletGet: {
    readonly wallets: {
        readonly type: PropType<WalletConnector[]>;
        readonly required: true;
    };
    readonly isIOS: {
        readonly type: BooleanConstructor;
        readonly default: false;
        readonly required: true;
    };
};
export declare const MobileWalletGet: import("vue").DefineComponent<{
    readonly wallets: {
        readonly type: PropType<WalletConnector[]>;
        readonly required: true;
    };
    readonly isIOS: {
        readonly type: BooleanConstructor;
        readonly default: false;
        readonly required: true;
    };
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    readonly wallets: {
        readonly type: PropType<WalletConnector[]>;
        readonly required: true;
    };
    readonly isIOS: {
        readonly type: BooleanConstructor;
        readonly default: false;
        readonly required: true;
    };
}>>, {}, {}>;
//# sourceMappingURL=MobileWalletGet.d.ts.map