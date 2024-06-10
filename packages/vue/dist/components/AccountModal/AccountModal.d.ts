import { Address, GetEnsAvatarReturnType, GetEnsNameReturnType } from "../../types";
import { SlotsType } from "vue";
export declare const createAccontModalProps: {
    readonly open: {
        readonly type: BooleanConstructor;
        readonly required: true;
    };
};
export declare const AccountModal: import("vue").DefineComponent<{
    readonly open: {
        readonly type: BooleanConstructor;
        readonly required: true;
    };
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "closed"[], "closed", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    readonly open: {
        readonly type: BooleanConstructor;
        readonly required: true;
    };
}>> & {
    onClosed?: ((...args: any[]) => any) | undefined;
}, {}, SlotsType<{
    default: {
        ensName: GetEnsNameReturnType | undefined;
        ensAvatar: GetEnsAvatarReturnType | undefined;
        onDisconnect: (() => void);
        address: Address | undefined;
        onClosed: (() => void);
        formattedBalance: string | undefined;
        symbol: string | undefined;
        abbreviatedBalance: string | undefined;
        balance: BigInt | undefined;
    };
}>>;
//# sourceMappingURL=AccountModal.d.ts.map