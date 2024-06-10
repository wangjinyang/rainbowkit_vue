import { EmitsOptions, ExtractPropTypes, PropType, RenderFunction, SetupContext, SlotsType } from "vue";
export type DisclaimerLinkProps = {
    href: string;
};
export declare const createDisclaimerProps: {
    readonly text: {
        readonly type: PropType<import("vue").DefineComponent<{}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<ExtractPropTypes<{}>>, {}, {}>>;
        readonly required: true;
    };
    readonly link: {
        readonly type: PropType<import("vue").DefineComponent<{
            readonly href: {
                readonly type: StringConstructor;
                readonly required: true;
            };
        }, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<ExtractPropTypes<{
            readonly href: {
                readonly type: StringConstructor;
                readonly required: true;
            };
        }>>, {}, {}>>;
        readonly required: true;
    };
};
export type DisclaimerProps = ExtractPropTypes<typeof createDisclaimerProps>;
export type DisclaimerComponentSetupFn<E extends EmitsOptions = {}, S extends SlotsType = SlotsType> = (props: DisclaimerProps, ctx: SetupContext<E, S>) => RenderFunction | Promise<RenderFunction>;
export declare function createDisclaimerComponent(setup: DisclaimerComponentSetupFn): import("vue").DefineComponent<{
    readonly text: {
        readonly type: PropType<import("vue").DefineComponent<{}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<ExtractPropTypes<{}>>, {}, {}>>;
        readonly required: true;
    };
    readonly link: {
        readonly type: PropType<import("vue").DefineComponent<{
            readonly href: {
                readonly type: StringConstructor;
                readonly required: true;
            };
        }, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<ExtractPropTypes<{
            readonly href: {
                readonly type: StringConstructor;
                readonly required: true;
            };
        }>>, {}, {}>>;
        readonly required: true;
    };
}, RenderFunction, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<ExtractPropTypes<{
    readonly text: {
        readonly type: PropType<import("vue").DefineComponent<{}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<ExtractPropTypes<{}>>, {}, {}>>;
        readonly required: true;
    };
    readonly link: {
        readonly type: PropType<import("vue").DefineComponent<{
            readonly href: {
                readonly type: StringConstructor;
                readonly required: true;
            };
        }, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<ExtractPropTypes<{
            readonly href: {
                readonly type: StringConstructor;
                readonly required: true;
            };
        }>>, {}, {}>>;
        readonly required: true;
    };
}>>, {}, {}>;
//# sourceMappingURL=disclaimer.d.ts.map