import { GetEnsAvatarReturnType, GetEnsNameReturnType, Address } from "../../types";
import { PropType, SlotsType } from "vue";
export declare const ProfileDetail: import("vue").DefineComponent<{
    readonly address: PropType<`0x${string}`>;
    readonly ensAvatar: PropType<import("viem").GetEnsAvatarReturnType>;
    readonly ensName: PropType<import("viem").GetEnsNameReturnType>;
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("disconnect" | "closed")[], "disconnect" | "closed", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    readonly address: PropType<`0x${string}`>;
    readonly ensAvatar: PropType<import("viem").GetEnsAvatarReturnType>;
    readonly ensName: PropType<import("viem").GetEnsNameReturnType>;
}>> & {
    onDisconnect?: ((...args: any[]) => any) | undefined;
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
//# sourceMappingURL=ProfileDetail.d.ts.map