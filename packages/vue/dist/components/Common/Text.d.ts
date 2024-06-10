import { PropType, ExtractPropTypes } from "vue";
export declare const createTextProps: {
    readonly id: StringConstructor;
    readonly tag: {
        readonly type: PropType<"p" | "div" | "code" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "label" | "span">;
        readonly default: "div";
    };
    readonly color: {
        readonly type: PropType<"accentColor" | "accentColorForeground" | "actionButtonBorder" | "actionButtonBorderMobile" | "actionButtonSecondaryBackground" | "closeButton" | "closeButtonBackground" | "connectButtonBackground" | "connectButtonBackgroundError" | "connectButtonInnerBackground" | "connectButtonText" | "connectButtonTextError" | "connectionIndicator" | "downloadBottomCardBackground" | "downloadTopCardBackground" | "error" | "generalBorder" | "generalBorderDim" | "menuItemBackground" | "modalBackdrop" | "modalBackground" | "modalBorder" | "modalText" | "modalTextDim" | "modalTextSecondary" | "profileAction" | "profileActionHover" | "profileForeground" | "selectedOptionBorder" | "standby" | ({
            base?: "accentColor" | "accentColorForeground" | "actionButtonBorder" | "actionButtonBorderMobile" | "actionButtonSecondaryBackground" | "closeButton" | "closeButtonBackground" | "connectButtonBackground" | "connectButtonBackgroundError" | "connectButtonInnerBackground" | "connectButtonText" | "connectButtonTextError" | "connectionIndicator" | "downloadBottomCardBackground" | "downloadTopCardBackground" | "error" | "generalBorder" | "generalBorderDim" | "menuItemBackground" | "modalBackdrop" | "modalBackground" | "modalBorder" | "modalText" | "modalTextDim" | "modalTextSecondary" | "profileAction" | "profileActionHover" | "profileForeground" | "selectedOptionBorder" | "standby" | undefined;
            hover?: "accentColor" | "accentColorForeground" | "actionButtonBorder" | "actionButtonBorderMobile" | "actionButtonSecondaryBackground" | "closeButton" | "closeButtonBackground" | "connectButtonBackground" | "connectButtonBackgroundError" | "connectButtonInnerBackground" | "connectButtonText" | "connectButtonTextError" | "connectionIndicator" | "downloadBottomCardBackground" | "downloadTopCardBackground" | "error" | "generalBorder" | "generalBorderDim" | "menuItemBackground" | "modalBackdrop" | "modalBackground" | "modalBorder" | "modalText" | "modalTextDim" | "modalTextSecondary" | "profileAction" | "profileActionHover" | "profileForeground" | "selectedOptionBorder" | "standby" | undefined;
            active?: "accentColor" | "accentColorForeground" | "actionButtonBorder" | "actionButtonBorderMobile" | "actionButtonSecondaryBackground" | "closeButton" | "closeButtonBackground" | "connectButtonBackground" | "connectButtonBackgroundError" | "connectButtonInnerBackground" | "connectButtonText" | "connectButtonTextError" | "connectionIndicator" | "downloadBottomCardBackground" | "downloadTopCardBackground" | "error" | "generalBorder" | "generalBorderDim" | "menuItemBackground" | "modalBackdrop" | "modalBackground" | "modalBorder" | "modalText" | "modalTextDim" | "modalTextSecondary" | "profileAction" | "profileActionHover" | "profileForeground" | "selectedOptionBorder" | "standby" | undefined;
        } & string) | undefined>;
        readonly default: "modalText";
    };
    readonly font: {
        readonly type: PropType<"body" | undefined>;
        readonly default: "body";
    };
    readonly size: {
        readonly type: PropType<"12" | "14" | "16" | "18" | "20" | "13" | "23" | undefined>;
        readonly default: "16";
    };
    readonly weight: {
        readonly type: PropType<"medium" | "bold" | "regular" | "semibold" | "heavy" | undefined>;
        readonly default: "regular";
    };
    readonly className: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly tabIndex: {
        readonly type: NumberConstructor;
        readonly default: 0;
    };
    readonly textAlign: {
        readonly type: PropType<"inherit" | "left" | "center" | undefined>;
        readonly default: "inherit";
    };
    readonly display: {
        readonly type: PropType<"none" | "flex" | "block" | "inline" | {
            smallScreen?: "none" | "flex" | "block" | "inline" | undefined;
            largeScreen?: "none" | "flex" | "block" | "inline" | undefined;
        } | undefined>;
        readonly default: "block";
    };
};
export type TextProps = ExtractPropTypes<typeof createTextProps>;
export declare const Text: import("vue").DefineComponent<{
    readonly id: StringConstructor;
    readonly tag: {
        readonly type: PropType<"p" | "div" | "code" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "label" | "span">;
        readonly default: "div";
    };
    readonly color: {
        readonly type: PropType<"accentColor" | "accentColorForeground" | "actionButtonBorder" | "actionButtonBorderMobile" | "actionButtonSecondaryBackground" | "closeButton" | "closeButtonBackground" | "connectButtonBackground" | "connectButtonBackgroundError" | "connectButtonInnerBackground" | "connectButtonText" | "connectButtonTextError" | "connectionIndicator" | "downloadBottomCardBackground" | "downloadTopCardBackground" | "error" | "generalBorder" | "generalBorderDim" | "menuItemBackground" | "modalBackdrop" | "modalBackground" | "modalBorder" | "modalText" | "modalTextDim" | "modalTextSecondary" | "profileAction" | "profileActionHover" | "profileForeground" | "selectedOptionBorder" | "standby" | ({
            base?: "accentColor" | "accentColorForeground" | "actionButtonBorder" | "actionButtonBorderMobile" | "actionButtonSecondaryBackground" | "closeButton" | "closeButtonBackground" | "connectButtonBackground" | "connectButtonBackgroundError" | "connectButtonInnerBackground" | "connectButtonText" | "connectButtonTextError" | "connectionIndicator" | "downloadBottomCardBackground" | "downloadTopCardBackground" | "error" | "generalBorder" | "generalBorderDim" | "menuItemBackground" | "modalBackdrop" | "modalBackground" | "modalBorder" | "modalText" | "modalTextDim" | "modalTextSecondary" | "profileAction" | "profileActionHover" | "profileForeground" | "selectedOptionBorder" | "standby" | undefined;
            hover?: "accentColor" | "accentColorForeground" | "actionButtonBorder" | "actionButtonBorderMobile" | "actionButtonSecondaryBackground" | "closeButton" | "closeButtonBackground" | "connectButtonBackground" | "connectButtonBackgroundError" | "connectButtonInnerBackground" | "connectButtonText" | "connectButtonTextError" | "connectionIndicator" | "downloadBottomCardBackground" | "downloadTopCardBackground" | "error" | "generalBorder" | "generalBorderDim" | "menuItemBackground" | "modalBackdrop" | "modalBackground" | "modalBorder" | "modalText" | "modalTextDim" | "modalTextSecondary" | "profileAction" | "profileActionHover" | "profileForeground" | "selectedOptionBorder" | "standby" | undefined;
            active?: "accentColor" | "accentColorForeground" | "actionButtonBorder" | "actionButtonBorderMobile" | "actionButtonSecondaryBackground" | "closeButton" | "closeButtonBackground" | "connectButtonBackground" | "connectButtonBackgroundError" | "connectButtonInnerBackground" | "connectButtonText" | "connectButtonTextError" | "connectionIndicator" | "downloadBottomCardBackground" | "downloadTopCardBackground" | "error" | "generalBorder" | "generalBorderDim" | "menuItemBackground" | "modalBackdrop" | "modalBackground" | "modalBorder" | "modalText" | "modalTextDim" | "modalTextSecondary" | "profileAction" | "profileActionHover" | "profileForeground" | "selectedOptionBorder" | "standby" | undefined;
        } & string) | undefined>;
        readonly default: "modalText";
    };
    readonly font: {
        readonly type: PropType<"body" | undefined>;
        readonly default: "body";
    };
    readonly size: {
        readonly type: PropType<"12" | "14" | "16" | "18" | "20" | "13" | "23" | undefined>;
        readonly default: "16";
    };
    readonly weight: {
        readonly type: PropType<"medium" | "bold" | "regular" | "semibold" | "heavy" | undefined>;
        readonly default: "regular";
    };
    readonly className: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly tabIndex: {
        readonly type: NumberConstructor;
        readonly default: 0;
    };
    readonly textAlign: {
        readonly type: PropType<"inherit" | "left" | "center" | undefined>;
        readonly default: "inherit";
    };
    readonly display: {
        readonly type: PropType<"none" | "flex" | "block" | "inline" | {
            smallScreen?: "none" | "flex" | "block" | "inline" | undefined;
            largeScreen?: "none" | "flex" | "block" | "inline" | undefined;
        } | undefined>;
        readonly default: "block";
    };
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<ExtractPropTypes<{
    readonly id: StringConstructor;
    readonly tag: {
        readonly type: PropType<"p" | "div" | "code" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "label" | "span">;
        readonly default: "div";
    };
    readonly color: {
        readonly type: PropType<"accentColor" | "accentColorForeground" | "actionButtonBorder" | "actionButtonBorderMobile" | "actionButtonSecondaryBackground" | "closeButton" | "closeButtonBackground" | "connectButtonBackground" | "connectButtonBackgroundError" | "connectButtonInnerBackground" | "connectButtonText" | "connectButtonTextError" | "connectionIndicator" | "downloadBottomCardBackground" | "downloadTopCardBackground" | "error" | "generalBorder" | "generalBorderDim" | "menuItemBackground" | "modalBackdrop" | "modalBackground" | "modalBorder" | "modalText" | "modalTextDim" | "modalTextSecondary" | "profileAction" | "profileActionHover" | "profileForeground" | "selectedOptionBorder" | "standby" | ({
            base?: "accentColor" | "accentColorForeground" | "actionButtonBorder" | "actionButtonBorderMobile" | "actionButtonSecondaryBackground" | "closeButton" | "closeButtonBackground" | "connectButtonBackground" | "connectButtonBackgroundError" | "connectButtonInnerBackground" | "connectButtonText" | "connectButtonTextError" | "connectionIndicator" | "downloadBottomCardBackground" | "downloadTopCardBackground" | "error" | "generalBorder" | "generalBorderDim" | "menuItemBackground" | "modalBackdrop" | "modalBackground" | "modalBorder" | "modalText" | "modalTextDim" | "modalTextSecondary" | "profileAction" | "profileActionHover" | "profileForeground" | "selectedOptionBorder" | "standby" | undefined;
            hover?: "accentColor" | "accentColorForeground" | "actionButtonBorder" | "actionButtonBorderMobile" | "actionButtonSecondaryBackground" | "closeButton" | "closeButtonBackground" | "connectButtonBackground" | "connectButtonBackgroundError" | "connectButtonInnerBackground" | "connectButtonText" | "connectButtonTextError" | "connectionIndicator" | "downloadBottomCardBackground" | "downloadTopCardBackground" | "error" | "generalBorder" | "generalBorderDim" | "menuItemBackground" | "modalBackdrop" | "modalBackground" | "modalBorder" | "modalText" | "modalTextDim" | "modalTextSecondary" | "profileAction" | "profileActionHover" | "profileForeground" | "selectedOptionBorder" | "standby" | undefined;
            active?: "accentColor" | "accentColorForeground" | "actionButtonBorder" | "actionButtonBorderMobile" | "actionButtonSecondaryBackground" | "closeButton" | "closeButtonBackground" | "connectButtonBackground" | "connectButtonBackgroundError" | "connectButtonInnerBackground" | "connectButtonText" | "connectButtonTextError" | "connectionIndicator" | "downloadBottomCardBackground" | "downloadTopCardBackground" | "error" | "generalBorder" | "generalBorderDim" | "menuItemBackground" | "modalBackdrop" | "modalBackground" | "modalBorder" | "modalText" | "modalTextDim" | "modalTextSecondary" | "profileAction" | "profileActionHover" | "profileForeground" | "selectedOptionBorder" | "standby" | undefined;
        } & string) | undefined>;
        readonly default: "modalText";
    };
    readonly font: {
        readonly type: PropType<"body" | undefined>;
        readonly default: "body";
    };
    readonly size: {
        readonly type: PropType<"12" | "14" | "16" | "18" | "20" | "13" | "23" | undefined>;
        readonly default: "16";
    };
    readonly weight: {
        readonly type: PropType<"medium" | "bold" | "regular" | "semibold" | "heavy" | undefined>;
        readonly default: "regular";
    };
    readonly className: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly tabIndex: {
        readonly type: NumberConstructor;
        readonly default: 0;
    };
    readonly textAlign: {
        readonly type: PropType<"inherit" | "left" | "center" | undefined>;
        readonly default: "inherit";
    };
    readonly display: {
        readonly type: PropType<"none" | "flex" | "block" | "inline" | {
            smallScreen?: "none" | "flex" | "block" | "inline" | undefined;
            largeScreen?: "none" | "flex" | "block" | "inline" | undefined;
        } | undefined>;
        readonly default: "block";
    };
}>>, {
    readonly size: "12" | "14" | "16" | "18" | "20" | "13" | "23" | undefined;
    readonly color: "accentColor" | "accentColorForeground" | "actionButtonBorder" | "actionButtonBorderMobile" | "actionButtonSecondaryBackground" | "closeButton" | "closeButtonBackground" | "connectButtonBackground" | "connectButtonBackgroundError" | "connectButtonInnerBackground" | "connectButtonText" | "connectButtonTextError" | "connectionIndicator" | "downloadBottomCardBackground" | "downloadTopCardBackground" | "error" | "generalBorder" | "generalBorderDim" | "menuItemBackground" | "modalBackdrop" | "modalBackground" | "modalBorder" | "modalText" | "modalTextDim" | "modalTextSecondary" | "profileAction" | "profileActionHover" | "profileForeground" | "selectedOptionBorder" | "standby" | ({
        base?: "accentColor" | "accentColorForeground" | "actionButtonBorder" | "actionButtonBorderMobile" | "actionButtonSecondaryBackground" | "closeButton" | "closeButtonBackground" | "connectButtonBackground" | "connectButtonBackgroundError" | "connectButtonInnerBackground" | "connectButtonText" | "connectButtonTextError" | "connectionIndicator" | "downloadBottomCardBackground" | "downloadTopCardBackground" | "error" | "generalBorder" | "generalBorderDim" | "menuItemBackground" | "modalBackdrop" | "modalBackground" | "modalBorder" | "modalText" | "modalTextDim" | "modalTextSecondary" | "profileAction" | "profileActionHover" | "profileForeground" | "selectedOptionBorder" | "standby" | undefined;
        hover?: "accentColor" | "accentColorForeground" | "actionButtonBorder" | "actionButtonBorderMobile" | "actionButtonSecondaryBackground" | "closeButton" | "closeButtonBackground" | "connectButtonBackground" | "connectButtonBackgroundError" | "connectButtonInnerBackground" | "connectButtonText" | "connectButtonTextError" | "connectionIndicator" | "downloadBottomCardBackground" | "downloadTopCardBackground" | "error" | "generalBorder" | "generalBorderDim" | "menuItemBackground" | "modalBackdrop" | "modalBackground" | "modalBorder" | "modalText" | "modalTextDim" | "modalTextSecondary" | "profileAction" | "profileActionHover" | "profileForeground" | "selectedOptionBorder" | "standby" | undefined;
        active?: "accentColor" | "accentColorForeground" | "actionButtonBorder" | "actionButtonBorderMobile" | "actionButtonSecondaryBackground" | "closeButton" | "closeButtonBackground" | "connectButtonBackground" | "connectButtonBackgroundError" | "connectButtonInnerBackground" | "connectButtonText" | "connectButtonTextError" | "connectionIndicator" | "downloadBottomCardBackground" | "downloadTopCardBackground" | "error" | "generalBorder" | "generalBorderDim" | "menuItemBackground" | "modalBackdrop" | "modalBackground" | "modalBorder" | "modalText" | "modalTextDim" | "modalTextSecondary" | "profileAction" | "profileActionHover" | "profileForeground" | "selectedOptionBorder" | "standby" | undefined;
    } & string) | undefined;
    readonly display: "none" | "flex" | "block" | "inline" | {
        smallScreen?: "none" | "flex" | "block" | "inline" | undefined;
        largeScreen?: "none" | "flex" | "block" | "inline" | undefined;
    } | undefined;
    readonly textAlign: "inherit" | "left" | "center" | undefined;
    readonly font: "body" | undefined;
    readonly weight: "medium" | "bold" | "regular" | "semibold" | "heavy" | undefined;
    readonly tag: "p" | "div" | "code" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "label" | "span";
    readonly className: string;
    readonly tabIndex: number;
}, {}>;
//# sourceMappingURL=Text.d.ts.map