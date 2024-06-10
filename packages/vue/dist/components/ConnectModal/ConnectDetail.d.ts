import { WalletConnector, WalletStep } from "../../types";
import { ExtractPropTypes, PropType } from "vue";
export declare const createConnectDetailProps: {
    readonly changeWalletStep: {
        readonly type: PropType<(step: WalletStep) => void>;
        readonly required: true;
    };
    readonly reconnect: {
        readonly type: PropType<(wallet: WalletConnector) => void>;
        readonly required: true;
    };
    readonly onClosed: {
        readonly type: PropType<() => void>;
        readonly required: true;
    };
    readonly connectionError: {
        readonly type: BooleanConstructor;
        readonly required: true;
        readonly default: false;
    };
    readonly qrCodeUri: {
        readonly type: StringConstructor;
    };
    readonly compactModeEnabled: {
        readonly type: BooleanConstructor;
        readonly required: true;
        readonly default: false;
    };
    readonly wallet: {
        readonly type: PropType<WalletConnector>;
    };
};
export type ConnectDetailProps = ExtractPropTypes<typeof createConnectDetailProps>;
export declare const ConnectDetail: import("vue").DefineComponent<{
    readonly changeWalletStep: {
        readonly type: PropType<(step: WalletStep) => void>;
        readonly required: true;
    };
    readonly reconnect: {
        readonly type: PropType<(wallet: WalletConnector) => void>;
        readonly required: true;
    };
    readonly onClosed: {
        readonly type: PropType<() => void>;
        readonly required: true;
    };
    readonly connectionError: {
        readonly type: BooleanConstructor;
        readonly required: true;
        readonly default: false;
    };
    readonly qrCodeUri: {
        readonly type: StringConstructor;
    };
    readonly compactModeEnabled: {
        readonly type: BooleanConstructor;
        readonly required: true;
        readonly default: false;
    };
    readonly wallet: {
        readonly type: PropType<WalletConnector>;
    };
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<ExtractPropTypes<{
    readonly changeWalletStep: {
        readonly type: PropType<(step: WalletStep) => void>;
        readonly required: true;
    };
    readonly reconnect: {
        readonly type: PropType<(wallet: WalletConnector) => void>;
        readonly required: true;
    };
    readonly onClosed: {
        readonly type: PropType<() => void>;
        readonly required: true;
    };
    readonly connectionError: {
        readonly type: BooleanConstructor;
        readonly required: true;
        readonly default: false;
    };
    readonly qrCodeUri: {
        readonly type: StringConstructor;
    };
    readonly compactModeEnabled: {
        readonly type: BooleanConstructor;
        readonly required: true;
        readonly default: false;
    };
    readonly wallet: {
        readonly type: PropType<WalletConnector>;
    };
}>>, {}, {}>;
//# sourceMappingURL=ConnectDetail.d.ts.map