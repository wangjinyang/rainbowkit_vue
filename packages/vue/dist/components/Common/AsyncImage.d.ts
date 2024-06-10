import { AsyncImageSrc, CustomBorderColor } from '../../types';
import { PropType } from 'vue';
export declare const createAsyncImageProps: {
    readonly alt: StringConstructor;
    readonly background: StringConstructor;
    readonly src: PropType<string | AsyncImageSrc | undefined>;
    readonly borderRadius: PropType<"1" | "6" | "10" | "full" | "actionButton" | "connectButton" | "menuButton" | "modal" | "modalMobile" | "13" | "25%" | undefined>;
    readonly borderColor: PropType<("accentColor" | "accentColorForeground" | "actionButtonBorder" | "actionButtonBorderMobile" | "actionButtonSecondaryBackground" | "closeButton" | "closeButtonBackground" | "connectButtonBackground" | "connectButtonBackgroundError" | "connectButtonInnerBackground" | "connectButtonText" | "connectButtonTextError" | "connectionIndicator" | "downloadBottomCardBackground" | "downloadTopCardBackground" | "error" | "generalBorder" | "generalBorderDim" | "menuItemBackground" | "modalBackdrop" | "modalBackground" | "modalBorder" | "modalText" | "modalTextDim" | "modalTextSecondary" | "profileAction" | "profileActionHover" | "profileForeground" | "selectedOptionBorder" | "standby" | {
        base?: "accentColor" | "accentColorForeground" | "actionButtonBorder" | "actionButtonBorderMobile" | "actionButtonSecondaryBackground" | "closeButton" | "closeButtonBackground" | "connectButtonBackground" | "connectButtonBackgroundError" | "connectButtonInnerBackground" | "connectButtonText" | "connectButtonTextError" | "connectionIndicator" | "downloadBottomCardBackground" | "downloadTopCardBackground" | "error" | "generalBorder" | "generalBorderDim" | "menuItemBackground" | "modalBackdrop" | "modalBackground" | "modalBorder" | "modalText" | "modalTextDim" | "modalTextSecondary" | "profileAction" | "profileActionHover" | "profileForeground" | "selectedOptionBorder" | "standby" | undefined;
        hover?: "accentColor" | "accentColorForeground" | "actionButtonBorder" | "actionButtonBorderMobile" | "actionButtonSecondaryBackground" | "closeButton" | "closeButtonBackground" | "connectButtonBackground" | "connectButtonBackgroundError" | "connectButtonInnerBackground" | "connectButtonText" | "connectButtonTextError" | "connectionIndicator" | "downloadBottomCardBackground" | "downloadTopCardBackground" | "error" | "generalBorder" | "generalBorderDim" | "menuItemBackground" | "modalBackdrop" | "modalBackground" | "modalBorder" | "modalText" | "modalTextDim" | "modalTextSecondary" | "profileAction" | "profileActionHover" | "profileForeground" | "selectedOptionBorder" | "standby" | undefined;
        active?: "accentColor" | "accentColorForeground" | "actionButtonBorder" | "actionButtonBorderMobile" | "actionButtonSecondaryBackground" | "closeButton" | "closeButtonBackground" | "connectButtonBackground" | "connectButtonBackgroundError" | "connectButtonInnerBackground" | "connectButtonText" | "connectButtonTextError" | "connectionIndicator" | "downloadBottomCardBackground" | "downloadTopCardBackground" | "error" | "generalBorder" | "generalBorderDim" | "menuItemBackground" | "modalBackdrop" | "modalBackground" | "modalBorder" | "modalText" | "modalTextDim" | "modalTextSecondary" | "profileAction" | "profileActionHover" | "profileForeground" | "selectedOptionBorder" | "standby" | undefined;
    } | undefined) | CustomBorderColor>;
    readonly boxShadow: PropType<"connectButton" | "dialog" | "profileDetailsAction" | "selectedOption" | "selectedWallet" | "walletLogo" | {
        base?: "connectButton" | "dialog" | "profileDetailsAction" | "selectedOption" | "selectedWallet" | "walletLogo" | undefined;
        hover?: "connectButton" | "dialog" | "profileDetailsAction" | "selectedOption" | "selectedWallet" | "walletLogo" | undefined;
        active?: "connectButton" | "dialog" | "profileDetailsAction" | "selectedOption" | "selectedWallet" | "walletLogo" | undefined;
    } | undefined>;
    readonly useAsImage: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly width: {
        readonly type: PropType<string | number | undefined>;
        readonly required: true;
    };
    readonly height: {
        readonly type: PropType<string | number | undefined>;
        readonly required: true;
    };
};
export declare const AsyncImage: import("vue").DefineComponent<{
    readonly alt: StringConstructor;
    readonly background: StringConstructor;
    readonly src: PropType<string | AsyncImageSrc | undefined>;
    readonly borderRadius: PropType<"1" | "6" | "10" | "full" | "actionButton" | "connectButton" | "menuButton" | "modal" | "modalMobile" | "13" | "25%" | undefined>;
    readonly borderColor: PropType<("accentColor" | "accentColorForeground" | "actionButtonBorder" | "actionButtonBorderMobile" | "actionButtonSecondaryBackground" | "closeButton" | "closeButtonBackground" | "connectButtonBackground" | "connectButtonBackgroundError" | "connectButtonInnerBackground" | "connectButtonText" | "connectButtonTextError" | "connectionIndicator" | "downloadBottomCardBackground" | "downloadTopCardBackground" | "error" | "generalBorder" | "generalBorderDim" | "menuItemBackground" | "modalBackdrop" | "modalBackground" | "modalBorder" | "modalText" | "modalTextDim" | "modalTextSecondary" | "profileAction" | "profileActionHover" | "profileForeground" | "selectedOptionBorder" | "standby" | {
        base?: "accentColor" | "accentColorForeground" | "actionButtonBorder" | "actionButtonBorderMobile" | "actionButtonSecondaryBackground" | "closeButton" | "closeButtonBackground" | "connectButtonBackground" | "connectButtonBackgroundError" | "connectButtonInnerBackground" | "connectButtonText" | "connectButtonTextError" | "connectionIndicator" | "downloadBottomCardBackground" | "downloadTopCardBackground" | "error" | "generalBorder" | "generalBorderDim" | "menuItemBackground" | "modalBackdrop" | "modalBackground" | "modalBorder" | "modalText" | "modalTextDim" | "modalTextSecondary" | "profileAction" | "profileActionHover" | "profileForeground" | "selectedOptionBorder" | "standby" | undefined;
        hover?: "accentColor" | "accentColorForeground" | "actionButtonBorder" | "actionButtonBorderMobile" | "actionButtonSecondaryBackground" | "closeButton" | "closeButtonBackground" | "connectButtonBackground" | "connectButtonBackgroundError" | "connectButtonInnerBackground" | "connectButtonText" | "connectButtonTextError" | "connectionIndicator" | "downloadBottomCardBackground" | "downloadTopCardBackground" | "error" | "generalBorder" | "generalBorderDim" | "menuItemBackground" | "modalBackdrop" | "modalBackground" | "modalBorder" | "modalText" | "modalTextDim" | "modalTextSecondary" | "profileAction" | "profileActionHover" | "profileForeground" | "selectedOptionBorder" | "standby" | undefined;
        active?: "accentColor" | "accentColorForeground" | "actionButtonBorder" | "actionButtonBorderMobile" | "actionButtonSecondaryBackground" | "closeButton" | "closeButtonBackground" | "connectButtonBackground" | "connectButtonBackgroundError" | "connectButtonInnerBackground" | "connectButtonText" | "connectButtonTextError" | "connectionIndicator" | "downloadBottomCardBackground" | "downloadTopCardBackground" | "error" | "generalBorder" | "generalBorderDim" | "menuItemBackground" | "modalBackdrop" | "modalBackground" | "modalBorder" | "modalText" | "modalTextDim" | "modalTextSecondary" | "profileAction" | "profileActionHover" | "profileForeground" | "selectedOptionBorder" | "standby" | undefined;
    } | undefined) | CustomBorderColor>;
    readonly boxShadow: PropType<"connectButton" | "dialog" | "profileDetailsAction" | "selectedOption" | "selectedWallet" | "walletLogo" | {
        base?: "connectButton" | "dialog" | "profileDetailsAction" | "selectedOption" | "selectedWallet" | "walletLogo" | undefined;
        hover?: "connectButton" | "dialog" | "profileDetailsAction" | "selectedOption" | "selectedWallet" | "walletLogo" | undefined;
        active?: "connectButton" | "dialog" | "profileDetailsAction" | "selectedOption" | "selectedWallet" | "walletLogo" | undefined;
    } | undefined>;
    readonly useAsImage: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly width: {
        readonly type: PropType<string | number | undefined>;
        readonly required: true;
    };
    readonly height: {
        readonly type: PropType<string | number | undefined>;
        readonly required: true;
    };
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    readonly alt: StringConstructor;
    readonly background: StringConstructor;
    readonly src: PropType<string | AsyncImageSrc | undefined>;
    readonly borderRadius: PropType<"1" | "6" | "10" | "full" | "actionButton" | "connectButton" | "menuButton" | "modal" | "modalMobile" | "13" | "25%" | undefined>;
    readonly borderColor: PropType<("accentColor" | "accentColorForeground" | "actionButtonBorder" | "actionButtonBorderMobile" | "actionButtonSecondaryBackground" | "closeButton" | "closeButtonBackground" | "connectButtonBackground" | "connectButtonBackgroundError" | "connectButtonInnerBackground" | "connectButtonText" | "connectButtonTextError" | "connectionIndicator" | "downloadBottomCardBackground" | "downloadTopCardBackground" | "error" | "generalBorder" | "generalBorderDim" | "menuItemBackground" | "modalBackdrop" | "modalBackground" | "modalBorder" | "modalText" | "modalTextDim" | "modalTextSecondary" | "profileAction" | "profileActionHover" | "profileForeground" | "selectedOptionBorder" | "standby" | {
        base?: "accentColor" | "accentColorForeground" | "actionButtonBorder" | "actionButtonBorderMobile" | "actionButtonSecondaryBackground" | "closeButton" | "closeButtonBackground" | "connectButtonBackground" | "connectButtonBackgroundError" | "connectButtonInnerBackground" | "connectButtonText" | "connectButtonTextError" | "connectionIndicator" | "downloadBottomCardBackground" | "downloadTopCardBackground" | "error" | "generalBorder" | "generalBorderDim" | "menuItemBackground" | "modalBackdrop" | "modalBackground" | "modalBorder" | "modalText" | "modalTextDim" | "modalTextSecondary" | "profileAction" | "profileActionHover" | "profileForeground" | "selectedOptionBorder" | "standby" | undefined;
        hover?: "accentColor" | "accentColorForeground" | "actionButtonBorder" | "actionButtonBorderMobile" | "actionButtonSecondaryBackground" | "closeButton" | "closeButtonBackground" | "connectButtonBackground" | "connectButtonBackgroundError" | "connectButtonInnerBackground" | "connectButtonText" | "connectButtonTextError" | "connectionIndicator" | "downloadBottomCardBackground" | "downloadTopCardBackground" | "error" | "generalBorder" | "generalBorderDim" | "menuItemBackground" | "modalBackdrop" | "modalBackground" | "modalBorder" | "modalText" | "modalTextDim" | "modalTextSecondary" | "profileAction" | "profileActionHover" | "profileForeground" | "selectedOptionBorder" | "standby" | undefined;
        active?: "accentColor" | "accentColorForeground" | "actionButtonBorder" | "actionButtonBorderMobile" | "actionButtonSecondaryBackground" | "closeButton" | "closeButtonBackground" | "connectButtonBackground" | "connectButtonBackgroundError" | "connectButtonInnerBackground" | "connectButtonText" | "connectButtonTextError" | "connectionIndicator" | "downloadBottomCardBackground" | "downloadTopCardBackground" | "error" | "generalBorder" | "generalBorderDim" | "menuItemBackground" | "modalBackdrop" | "modalBackground" | "modalBorder" | "modalText" | "modalTextDim" | "modalTextSecondary" | "profileAction" | "profileActionHover" | "profileForeground" | "selectedOptionBorder" | "standby" | undefined;
    } | undefined) | CustomBorderColor>;
    readonly boxShadow: PropType<"connectButton" | "dialog" | "profileDetailsAction" | "selectedOption" | "selectedWallet" | "walletLogo" | {
        base?: "connectButton" | "dialog" | "profileDetailsAction" | "selectedOption" | "selectedWallet" | "walletLogo" | undefined;
        hover?: "connectButton" | "dialog" | "profileDetailsAction" | "selectedOption" | "selectedWallet" | "walletLogo" | undefined;
        active?: "connectButton" | "dialog" | "profileDetailsAction" | "selectedOption" | "selectedWallet" | "walletLogo" | undefined;
    } | undefined>;
    readonly useAsImage: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly width: {
        readonly type: PropType<string | number | undefined>;
        readonly required: true;
    };
    readonly height: {
        readonly type: PropType<string | number | undefined>;
        readonly required: true;
    };
}>>, {
    readonly useAsImage: boolean;
}, {}>;
//# sourceMappingURL=AsyncImage.d.ts.map