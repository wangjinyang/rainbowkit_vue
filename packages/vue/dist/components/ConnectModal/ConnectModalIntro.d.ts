import { ExtractPropTypes, PropType, RenderFunction, SetupContext, EmitsOptions, SlotsType } from "vue";
export declare const createConnectModalIntro: {
    readonly compactModalEnabled: BooleanConstructor;
    readonly getWallet: {
        readonly type: PropType<() => void>;
        readonly required: true;
    };
};
export type ConnectModalIntroProps = ExtractPropTypes<typeof createConnectModalIntro>;
export type ConnectModalIntroComponentSetupFn<E extends EmitsOptions = {}, S extends SlotsType = SlotsType> = (props: ConnectModalIntroProps, ctx: SetupContext<E, S>) => RenderFunction | Promise<RenderFunction>;
export declare function createConnectModalIntroComponent(setup: ConnectModalIntroComponentSetupFn): import("vue").DefineComponent<{
    readonly compactModalEnabled: BooleanConstructor;
    readonly getWallet: {
        readonly type: PropType<() => void>;
        readonly required: true;
    };
}, RenderFunction, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<ExtractPropTypes<{
    readonly compactModalEnabled: BooleanConstructor;
    readonly getWallet: {
        readonly type: PropType<() => void>;
        readonly required: true;
    };
}>>, {
    readonly compactModalEnabled: boolean;
}, {}>;
export declare const ConnectModalIntro: import("vue").DefineComponent<{
    readonly compactModalEnabled: BooleanConstructor;
    readonly getWallet: {
        readonly type: PropType<() => void>;
        readonly required: true;
    };
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<ExtractPropTypes<{
    readonly compactModalEnabled: BooleanConstructor;
    readonly getWallet: {
        readonly type: PropType<() => void>;
        readonly required: true;
    };
}>>, {
    readonly compactModalEnabled: boolean;
}, {}>;
//# sourceMappingURL=ConnectModalIntro.d.ts.map