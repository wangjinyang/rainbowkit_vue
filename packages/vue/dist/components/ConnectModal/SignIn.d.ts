import { SignInRefType, Address, Chain } from "../../types";
import { PropType, SlotsType } from "vue";
export declare const SignIn: import("vue").DefineComponent<{
    readonly onClosed: {
        readonly type: PropType<() => void>;
        readonly required: true;
    };
    readonly onClosedModal: {
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
    readonly onClosedModal: {
        readonly type: PropType<() => void>;
        readonly required: true;
    };
}>>, {}, SlotsType<{
    default: {
        signIn: (() => Promise<void>);
        verify: (message: any, signature: `0x${string}` | undefined) => Promise<void>;
        signMessage: (message: any) => Promise<`0x${string}` | undefined>;
        getNonce: (() => Promise<void>);
        signInInfo: SignInRefType;
        address: Address | undefined;
        chain: Chain | undefined;
    };
}>>;
//# sourceMappingURL=SignIn.d.ts.map