import { type ComponentPublicInstance, type EmitsOptions, type ExtractPropTypes, type PropType, type RenderFunction, type SetupContext, type SlotsType } from "vue";
export declare const createAvatarComponentProps: {
    readonly address: {
        readonly type: StringConstructor;
        readonly required: true;
    };
    readonly ensImage: {
        readonly type: PropType<string | null>;
    };
    readonly size: {
        readonly type: NumberConstructor;
        readonly required: true;
    };
};
export type AvatarComponentProps = ExtractPropTypes<typeof createAvatarComponentProps>;
export type AvatarProps = {
    address: `0x${string}`;
    loading?: boolean;
    imageUrl?: string | null;
    size: number;
};
export type AvatarReturnType = Object & ComponentPublicInstance;
export type AvatarComponentSetupFn<E extends EmitsOptions = {}, S extends SlotsType = SlotsType> = (props: AvatarComponentProps, ctx: SetupContext<E, S>) => RenderFunction | Promise<RenderFunction>;
export declare function createAvatarComponent(setup: AvatarComponentSetupFn): import("vue").DefineComponent<{
    readonly address: {
        readonly type: StringConstructor;
        readonly required: true;
    };
    readonly ensImage: {
        readonly type: PropType<string | null>;
    };
    readonly size: {
        readonly type: NumberConstructor;
        readonly required: true;
    };
}, RenderFunction, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<ExtractPropTypes<{
    readonly address: {
        readonly type: StringConstructor;
        readonly required: true;
    };
    readonly ensImage: {
        readonly type: PropType<string | null>;
    };
    readonly size: {
        readonly type: NumberConstructor;
        readonly required: true;
    };
}>>, {}, {}>;
export type Emoji = {
    color: string;
    emoji: string;
};
//# sourceMappingURL=avatar.d.ts.map