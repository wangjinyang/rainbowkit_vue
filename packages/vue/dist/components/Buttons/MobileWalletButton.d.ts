import { WalletConnector } from '../../types';
import { PropType } from 'vue';
export declare const createMobileWalletButtonProps: {
    readonly wallet: {
        readonly type: PropType<WalletConnector>;
        readonly required: true;
    };
    readonly connecting: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
};
export declare const MobileWalletButton: import("vue").DefineComponent<{
    readonly wallet: {
        readonly type: PropType<WalletConnector>;
        readonly required: true;
    };
    readonly connecting: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "closed"[], "closed", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    readonly wallet: {
        readonly type: PropType<WalletConnector>;
        readonly required: true;
    };
    readonly connecting: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
}>> & {
    onClosed?: ((...args: any[]) => any) | undefined;
}, {
    readonly connecting: boolean;
}, {}>;
//# sourceMappingURL=MobileWalletButton.d.ts.map