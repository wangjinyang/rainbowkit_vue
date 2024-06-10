import type { RequiredConditionalValue } from '@vanilla-extract/sprinkles';
import type { ResetCssStyleType } from '../types';
import './reset.css';
declare const theme: {
    colors: {
        accentColor: string;
        accentColorForeground: string;
        actionButtonBorder: string;
        actionButtonBorderMobile: string;
        actionButtonSecondaryBackground: string;
        closeButton: string;
        closeButtonBackground: string;
        connectButtonBackground: string;
        connectButtonBackgroundError: string;
        connectButtonInnerBackground: string;
        connectButtonText: string;
        connectButtonTextError: string;
        connectionIndicator: string;
        downloadBottomCardBackground: string;
        downloadTopCardBackground: string;
        error: string;
        generalBorder: string;
        generalBorderDim: string;
        menuItemBackground: string;
        modalBackdrop: string;
        modalBackground: string;
        modalBorder: string;
        modalText: string;
        modalTextDim: string;
        modalTextSecondary: string;
        profileAction: string;
        profileActionHover: string;
        profileForeground: string;
        selectedOptionBorder: string;
        standby: string;
    };
    fonts: {
        body: string;
    };
    radii: {
        actionButton: string;
        connectButton: string;
        menuButton: string;
        modal: string;
        modalMobile: string;
    };
    shadows: {
        connectButton: string;
        dialog: string;
        profileDetailsAction: string;
        selectedOption: string;
        selectedWallet: string;
        walletLogo: string;
    };
    blurs: {
        modalOverlay: string;
    };
};
declare const responsive: {
    conditions: {
        defaultCondition: "smallScreen";
        conditionNames: ("smallScreen" | "largeScreen")[];
    };
    styles: {
        alignItems: {
            values: {
                center: {
                    defaultClass: string;
                    conditions: {
                        smallScreen: string;
                        largeScreen: string;
                    };
                };
                "flex-end": {
                    defaultClass: string;
                    conditions: {
                        smallScreen: string;
                        largeScreen: string;
                    };
                };
                "flex-start": {
                    defaultClass: string;
                    conditions: {
                        smallScreen: string;
                        largeScreen: string;
                    };
                };
            };
        };
        display: {
            values: {
                none: {
                    defaultClass: string;
                    conditions: {
                        smallScreen: string;
                        largeScreen: string;
                    };
                };
                flex: {
                    defaultClass: string;
                    conditions: {
                        smallScreen: string;
                        largeScreen: string;
                    };
                };
                block: {
                    defaultClass: string;
                    conditions: {
                        smallScreen: string;
                        largeScreen: string;
                    };
                };
                inline: {
                    defaultClass: string;
                    conditions: {
                        smallScreen: string;
                        largeScreen: string;
                    };
                };
            };
        };
    };
};
export declare const largeScreenMinWidth = 768;
export declare const themeVars: {
    colors: {
        accentColor: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        accentColorForeground: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        actionButtonBorder: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        actionButtonBorderMobile: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        actionButtonSecondaryBackground: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        closeButton: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        closeButtonBackground: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        connectButtonBackground: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        connectButtonBackgroundError: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        connectButtonInnerBackground: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        connectButtonText: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        connectButtonTextError: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        connectionIndicator: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        downloadBottomCardBackground: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        downloadTopCardBackground: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        error: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        generalBorder: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        generalBorderDim: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        menuItemBackground: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        modalBackdrop: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        modalBackground: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        modalBorder: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        modalText: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        modalTextDim: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        modalTextSecondary: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        profileAction: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        profileActionHover: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        profileForeground: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        selectedOptionBorder: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        standby: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
    };
    fonts: {
        body: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
    };
    radii: {
        actionButton: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        connectButton: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        menuButton: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        modal: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        modalMobile: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
    };
    shadows: {
        connectButton: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        dialog: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        profileDetailsAction: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        selectedOption: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        selectedWallet: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        walletLogo: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
    };
    blurs: {
        modalOverlay: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
    };
};
export declare const sprinkles: ((props: {
    background?: "accentColor" | "accentColorForeground" | "actionButtonBorder" | "actionButtonBorderMobile" | "actionButtonSecondaryBackground" | "closeButton" | "closeButtonBackground" | "connectButtonBackground" | "connectButtonBackgroundError" | "connectButtonInnerBackground" | "connectButtonText" | "connectButtonTextError" | "connectionIndicator" | "downloadBottomCardBackground" | "downloadTopCardBackground" | "error" | "generalBorder" | "generalBorderDim" | "menuItemBackground" | "modalBackdrop" | "modalBackground" | "modalBorder" | "modalText" | "modalTextDim" | "modalTextSecondary" | "profileAction" | "profileActionHover" | "profileForeground" | "selectedOptionBorder" | "standby" | {
        base?: "accentColor" | "accentColorForeground" | "actionButtonBorder" | "actionButtonBorderMobile" | "actionButtonSecondaryBackground" | "closeButton" | "closeButtonBackground" | "connectButtonBackground" | "connectButtonBackgroundError" | "connectButtonInnerBackground" | "connectButtonText" | "connectButtonTextError" | "connectionIndicator" | "downloadBottomCardBackground" | "downloadTopCardBackground" | "error" | "generalBorder" | "generalBorderDim" | "menuItemBackground" | "modalBackdrop" | "modalBackground" | "modalBorder" | "modalText" | "modalTextDim" | "modalTextSecondary" | "profileAction" | "profileActionHover" | "profileForeground" | "selectedOptionBorder" | "standby" | undefined;
        hover?: "accentColor" | "accentColorForeground" | "actionButtonBorder" | "actionButtonBorderMobile" | "actionButtonSecondaryBackground" | "closeButton" | "closeButtonBackground" | "connectButtonBackground" | "connectButtonBackgroundError" | "connectButtonInnerBackground" | "connectButtonText" | "connectButtonTextError" | "connectionIndicator" | "downloadBottomCardBackground" | "downloadTopCardBackground" | "error" | "generalBorder" | "generalBorderDim" | "menuItemBackground" | "modalBackdrop" | "modalBackground" | "modalBorder" | "modalText" | "modalTextDim" | "modalTextSecondary" | "profileAction" | "profileActionHover" | "profileForeground" | "selectedOptionBorder" | "standby" | undefined;
        active?: "accentColor" | "accentColorForeground" | "actionButtonBorder" | "actionButtonBorderMobile" | "actionButtonSecondaryBackground" | "closeButton" | "closeButtonBackground" | "connectButtonBackground" | "connectButtonBackgroundError" | "connectButtonInnerBackground" | "connectButtonText" | "connectButtonTextError" | "connectionIndicator" | "downloadBottomCardBackground" | "downloadTopCardBackground" | "error" | "generalBorder" | "generalBorderDim" | "menuItemBackground" | "modalBackdrop" | "modalBackground" | "modalBorder" | "modalText" | "modalTextDim" | "modalTextSecondary" | "profileAction" | "profileActionHover" | "profileForeground" | "selectedOptionBorder" | "standby" | undefined;
    } | undefined;
    borderColor?: "accentColor" | "accentColorForeground" | "actionButtonBorder" | "actionButtonBorderMobile" | "actionButtonSecondaryBackground" | "closeButton" | "closeButtonBackground" | "connectButtonBackground" | "connectButtonBackgroundError" | "connectButtonInnerBackground" | "connectButtonText" | "connectButtonTextError" | "connectionIndicator" | "downloadBottomCardBackground" | "downloadTopCardBackground" | "error" | "generalBorder" | "generalBorderDim" | "menuItemBackground" | "modalBackdrop" | "modalBackground" | "modalBorder" | "modalText" | "modalTextDim" | "modalTextSecondary" | "profileAction" | "profileActionHover" | "profileForeground" | "selectedOptionBorder" | "standby" | {
        base?: "accentColor" | "accentColorForeground" | "actionButtonBorder" | "actionButtonBorderMobile" | "actionButtonSecondaryBackground" | "closeButton" | "closeButtonBackground" | "connectButtonBackground" | "connectButtonBackgroundError" | "connectButtonInnerBackground" | "connectButtonText" | "connectButtonTextError" | "connectionIndicator" | "downloadBottomCardBackground" | "downloadTopCardBackground" | "error" | "generalBorder" | "generalBorderDim" | "menuItemBackground" | "modalBackdrop" | "modalBackground" | "modalBorder" | "modalText" | "modalTextDim" | "modalTextSecondary" | "profileAction" | "profileActionHover" | "profileForeground" | "selectedOptionBorder" | "standby" | undefined;
        hover?: "accentColor" | "accentColorForeground" | "actionButtonBorder" | "actionButtonBorderMobile" | "actionButtonSecondaryBackground" | "closeButton" | "closeButtonBackground" | "connectButtonBackground" | "connectButtonBackgroundError" | "connectButtonInnerBackground" | "connectButtonText" | "connectButtonTextError" | "connectionIndicator" | "downloadBottomCardBackground" | "downloadTopCardBackground" | "error" | "generalBorder" | "generalBorderDim" | "menuItemBackground" | "modalBackdrop" | "modalBackground" | "modalBorder" | "modalText" | "modalTextDim" | "modalTextSecondary" | "profileAction" | "profileActionHover" | "profileForeground" | "selectedOptionBorder" | "standby" | undefined;
        active?: "accentColor" | "accentColorForeground" | "actionButtonBorder" | "actionButtonBorderMobile" | "actionButtonSecondaryBackground" | "closeButton" | "closeButtonBackground" | "connectButtonBackground" | "connectButtonBackgroundError" | "connectButtonInnerBackground" | "connectButtonText" | "connectButtonTextError" | "connectionIndicator" | "downloadBottomCardBackground" | "downloadTopCardBackground" | "error" | "generalBorder" | "generalBorderDim" | "menuItemBackground" | "modalBackdrop" | "modalBackground" | "modalBorder" | "modalText" | "modalTextDim" | "modalTextSecondary" | "profileAction" | "profileActionHover" | "profileForeground" | "selectedOptionBorder" | "standby" | undefined;
    } | undefined;
    boxShadow?: "connectButton" | "dialog" | "profileDetailsAction" | "selectedOption" | "selectedWallet" | "walletLogo" | {
        base?: "connectButton" | "dialog" | "profileDetailsAction" | "selectedOption" | "selectedWallet" | "walletLogo" | undefined;
        hover?: "connectButton" | "dialog" | "profileDetailsAction" | "selectedOption" | "selectedWallet" | "walletLogo" | undefined;
        active?: "connectButton" | "dialog" | "profileDetailsAction" | "selectedOption" | "selectedWallet" | "walletLogo" | undefined;
    } | undefined;
    color?: "accentColor" | "accentColorForeground" | "actionButtonBorder" | "actionButtonBorderMobile" | "actionButtonSecondaryBackground" | "closeButton" | "closeButtonBackground" | "connectButtonBackground" | "connectButtonBackgroundError" | "connectButtonInnerBackground" | "connectButtonText" | "connectButtonTextError" | "connectionIndicator" | "downloadBottomCardBackground" | "downloadTopCardBackground" | "error" | "generalBorder" | "generalBorderDim" | "menuItemBackground" | "modalBackdrop" | "modalBackground" | "modalBorder" | "modalText" | "modalTextDim" | "modalTextSecondary" | "profileAction" | "profileActionHover" | "profileForeground" | "selectedOptionBorder" | "standby" | {
        base?: "accentColor" | "accentColorForeground" | "actionButtonBorder" | "actionButtonBorderMobile" | "actionButtonSecondaryBackground" | "closeButton" | "closeButtonBackground" | "connectButtonBackground" | "connectButtonBackgroundError" | "connectButtonInnerBackground" | "connectButtonText" | "connectButtonTextError" | "connectionIndicator" | "downloadBottomCardBackground" | "downloadTopCardBackground" | "error" | "generalBorder" | "generalBorderDim" | "menuItemBackground" | "modalBackdrop" | "modalBackground" | "modalBorder" | "modalText" | "modalTextDim" | "modalTextSecondary" | "profileAction" | "profileActionHover" | "profileForeground" | "selectedOptionBorder" | "standby" | undefined;
        hover?: "accentColor" | "accentColorForeground" | "actionButtonBorder" | "actionButtonBorderMobile" | "actionButtonSecondaryBackground" | "closeButton" | "closeButtonBackground" | "connectButtonBackground" | "connectButtonBackgroundError" | "connectButtonInnerBackground" | "connectButtonText" | "connectButtonTextError" | "connectionIndicator" | "downloadBottomCardBackground" | "downloadTopCardBackground" | "error" | "generalBorder" | "generalBorderDim" | "menuItemBackground" | "modalBackdrop" | "modalBackground" | "modalBorder" | "modalText" | "modalTextDim" | "modalTextSecondary" | "profileAction" | "profileActionHover" | "profileForeground" | "selectedOptionBorder" | "standby" | undefined;
        active?: "accentColor" | "accentColorForeground" | "actionButtonBorder" | "actionButtonBorderMobile" | "actionButtonSecondaryBackground" | "closeButton" | "closeButtonBackground" | "connectButtonBackground" | "connectButtonBackgroundError" | "connectButtonInnerBackground" | "connectButtonText" | "connectButtonTextError" | "connectionIndicator" | "downloadBottomCardBackground" | "downloadTopCardBackground" | "error" | "generalBorder" | "generalBorderDim" | "menuItemBackground" | "modalBackdrop" | "modalBackground" | "modalBorder" | "modalText" | "modalTextDim" | "modalTextSecondary" | "profileAction" | "profileActionHover" | "profileForeground" | "selectedOptionBorder" | "standby" | undefined;
    } | undefined;
} & {
    alignItems?: "center" | "flex-end" | "flex-start" | {
        smallScreen?: "center" | "flex-end" | "flex-start" | undefined;
        largeScreen?: "center" | "flex-end" | "flex-start" | undefined;
    } | undefined;
    display?: "none" | "flex" | "block" | "inline" | {
        smallScreen?: "none" | "flex" | "block" | "inline" | undefined;
        largeScreen?: "none" | "flex" | "block" | "inline" | undefined;
    } | undefined;
} & {
    readonly alignSelf?: "center" | "flex-end" | "flex-start" | undefined;
    readonly backgroundSize?: "cover" | undefined;
    readonly borderRadius?: "1" | "6" | "10" | "full" | "actionButton" | "connectButton" | "menuButton" | "modal" | "modalMobile" | "13" | "25%" | undefined;
    readonly borderStyle?: "solid" | undefined;
    readonly borderWidth?: "0" | "1" | "2" | "4" | undefined;
    readonly cursor?: "none" | "pointer" | undefined;
    readonly pointerEvents?: "none" | "all" | undefined;
    readonly minHeight?: "8" | "44" | undefined;
    readonly flexDirection?: "column" | "row" | undefined;
    readonly fontFamily?: "body" | undefined;
    readonly fontSize?: "12" | "14" | "16" | "18" | "20" | "13" | "23" | undefined;
    readonly fontWeight?: "medium" | "bold" | "regular" | "semibold" | "heavy" | undefined;
    readonly gap?: string | undefined;
    readonly height?: string | undefined;
    readonly justifyContent?: "center" | "space-around" | "space-between" | "flex-end" | "flex-start" | undefined;
    readonly textAlign?: "inherit" | "left" | "center" | undefined;
    readonly marginBottom?: string | undefined;
    readonly marginLeft?: string | undefined;
    readonly marginRight?: string | undefined;
    readonly marginTop?: string | undefined;
    readonly maxWidth?: string | undefined;
    readonly minWidth?: string | undefined;
    readonly overflow?: "hidden" | undefined;
    readonly paddingBottom?: string | undefined;
    readonly paddingLeft?: string | undefined;
    readonly paddingRight?: string | undefined;
    readonly paddingTop?: string | undefined;
    readonly position?: "fixed" | "absolute" | "relative" | undefined;
    readonly WebkitUserSelect?: "none" | undefined;
    readonly right?: "0" | undefined;
    readonly transition?: "transform" | "default" | undefined;
    readonly userSelect?: "none" | undefined;
    readonly width?: string | undefined;
    readonly backdropFilter?: "modalOverlay" | undefined;
    margin?: string | undefined;
    marginX?: string | undefined;
    marginY?: string | undefined;
    padding?: string | undefined;
    paddingX?: string | undefined;
    paddingY?: string | undefined;
}) => string) & {
    properties: Set<"alignItems" | "alignSelf" | "backdropFilter" | "backgroundSize" | "boxShadow" | "color" | "cursor" | "display" | "flexDirection" | "fontFamily" | "fontSize" | "fontWeight" | "height" | "justifyContent" | "marginBottom" | "marginLeft" | "marginRight" | "marginTop" | "maxWidth" | "minHeight" | "minWidth" | "paddingBottom" | "paddingLeft" | "paddingRight" | "paddingTop" | "pointerEvents" | "position" | "right" | "textAlign" | "userSelect" | "width" | "background" | "borderColor" | "borderRadius" | "borderStyle" | "borderWidth" | "gap" | "margin" | "overflow" | "padding" | "transition" | "WebkitUserSelect" | "marginX" | "marginY" | "paddingX" | "paddingY">;
};
export declare const mapResponsiveValue: <OutputValue extends string | number | boolean | null | undefined, Value extends import("@vanilla-extract/sprinkles").ConditionalValue<{
    conditions: {
        defaultCondition: "smallScreen";
        conditionNames: ("smallScreen" | "largeScreen")[];
    };
    styles: {
        alignItems: {
            values: {
                center: {
                    defaultClass: string;
                    conditions: {
                        smallScreen: string;
                        largeScreen: string;
                    };
                };
                "flex-end": {
                    defaultClass: string;
                    conditions: {
                        smallScreen: string;
                        largeScreen: string;
                    };
                };
                "flex-start": {
                    defaultClass: string;
                    conditions: {
                        smallScreen: string;
                        largeScreen: string;
                    };
                };
            };
        };
        display: {
            values: {
                none: {
                    defaultClass: string;
                    conditions: {
                        smallScreen: string;
                        largeScreen: string;
                    };
                };
                flex: {
                    defaultClass: string;
                    conditions: {
                        smallScreen: string;
                        largeScreen: string;
                    };
                };
                block: {
                    defaultClass: string;
                    conditions: {
                        smallScreen: string;
                        largeScreen: string;
                    };
                };
                inline: {
                    defaultClass: string;
                    conditions: {
                        smallScreen: string;
                        largeScreen: string;
                    };
                };
            };
        };
    };
}, string | number | boolean>>(value: Value, fn: (inputValue: Value extends import("@vanilla-extract/sprinkles").ResponsiveArray<1, string | number | boolean | null> | import("@vanilla-extract/sprinkles").ResponsiveArray<1 | 2, string | number | boolean | null> | import("@vanilla-extract/sprinkles").ResponsiveArray<1 | 2 | 3, string | number | boolean | null> | import("@vanilla-extract/sprinkles").ResponsiveArray<1 | 2 | 4 | 3, string | number | boolean | null> | import("@vanilla-extract/sprinkles").ResponsiveArray<1 | 2 | 4 | 3 | 5, string | number | boolean | null> | import("@vanilla-extract/sprinkles").ResponsiveArray<1 | 2 | 4 | 3 | 5 | 6, string | number | boolean | null> | import("@vanilla-extract/sprinkles").ResponsiveArray<1 | 2 | 4 | 3 | 5 | 6 | 7, string | number | boolean | null> | import("@vanilla-extract/sprinkles").ResponsiveArray<1 | 2 | 4 | 3 | 5 | 6 | 7 | 8, string | number | boolean | null> ? NonNullable<Value[number]> : Value extends Partial<Record<string, string | number | boolean>> ? NonNullable<Value[keyof Value]> : Value, key: "smallScreen" | "largeScreen") => OutputValue) => Value extends string | number | boolean ? OutputValue : Partial<Record<"smallScreen" | "largeScreen", OutputValue>>;
export declare const normalizeResponsiveValue: <Value extends string | number | boolean>(value: import("@vanilla-extract/sprinkles").ConditionalValue<{
    conditions: {
        defaultCondition: "smallScreen";
        conditionNames: ("smallScreen" | "largeScreen")[];
    };
    styles: {
        alignItems: {
            values: {
                center: {
                    defaultClass: string;
                    conditions: {
                        smallScreen: string;
                        largeScreen: string;
                    };
                };
                "flex-end": {
                    defaultClass: string;
                    conditions: {
                        smallScreen: string;
                        largeScreen: string;
                    };
                };
                "flex-start": {
                    defaultClass: string;
                    conditions: {
                        smallScreen: string;
                        largeScreen: string;
                    };
                };
            };
        };
        display: {
            values: {
                none: {
                    defaultClass: string;
                    conditions: {
                        smallScreen: string;
                        largeScreen: string;
                    };
                };
                flex: {
                    defaultClass: string;
                    conditions: {
                        smallScreen: string;
                        largeScreen: string;
                    };
                };
                block: {
                    defaultClass: string;
                    conditions: {
                        smallScreen: string;
                        largeScreen: string;
                    };
                };
                inline: {
                    defaultClass: string;
                    conditions: {
                        smallScreen: string;
                        largeScreen: string;
                    };
                };
            };
        };
    };
}, Value>) => Partial<Record<"smallScreen" | "largeScreen", Value>>;
export type Sprinkles = Parameters<typeof sprinkles>[0];
export type ThemeVariables = typeof theme;
export type ResponsiveValue<value extends string | number | boolean> = RequiredConditionalValue<typeof responsive, value>;
type ResetKey = keyof ResetCssStyleType;
export type Atoms = Sprinkles & {
    resetKey: ResetKey;
};
export {};
//# sourceMappingURL=sprinkles.css.d.ts.map