import { PropType } from 'vue';
export declare const FocusTrap: import("vue").DefineComponent<{
    active: {
        type: BooleanConstructor;
        default: boolean;
    };
} & {
    escapeDeactivates: {
        type: PropType<boolean | import("focus-trap").KeyboardEventToBoolean | undefined>;
        default: true;
    };
    returnFocusOnDeactivate: {
        type: BooleanConstructor;
        default: true;
    };
    allowOutsideClick: {
        type: PropType<boolean | import("focus-trap").MouseEventToBoolean | undefined>;
        default: true;
    };
    clickOutsideDeactivates: PropType<boolean | import("focus-trap").MouseEventToBoolean | undefined>;
    initialFocus: PropType<import("focus-trap").FocusTargetOrFalse | (() => void) | undefined>;
    fallbackFocus: PropType<import("focus-trap").FocusTarget | undefined>;
    checkCanFocusTrap: PropType<((containers: (HTMLElement | SVGElement)[]) => Promise<void>) | undefined>;
    checkCanReturnFocus: PropType<((trigger: HTMLElement | SVGElement) => Promise<void>) | undefined>;
    delayInitialFocus: {
        type: BooleanConstructor;
        default: true;
    };
    document: PropType<Document | undefined>;
    preventScroll: BooleanConstructor;
    setReturnFocus: PropType<import("focus-trap").FocusTargetValueOrFalse | ((nodeFocusedBeforeActivation: HTMLElement | SVGElement) => import("focus-trap").FocusTargetValueOrFalse) | undefined>;
    tabbableOptions: PropType<import("focus-trap").FocusTrapTabbableOptions | undefined>;
}, {
    activate(): void;
    deactivate(): void;
    renderImpl(): import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }> | import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[] | null;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:active" | "activate" | "postActivate" | "deactivate" | "postDeactivate")[], "update:active" | "activate" | "postActivate" | "deactivate" | "postDeactivate", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    active: {
        type: BooleanConstructor;
        default: boolean;
    };
} & {
    escapeDeactivates: {
        type: PropType<boolean | import("focus-trap").KeyboardEventToBoolean | undefined>;
        default: true;
    };
    returnFocusOnDeactivate: {
        type: BooleanConstructor;
        default: true;
    };
    allowOutsideClick: {
        type: PropType<boolean | import("focus-trap").MouseEventToBoolean | undefined>;
        default: true;
    };
    clickOutsideDeactivates: PropType<boolean | import("focus-trap").MouseEventToBoolean | undefined>;
    initialFocus: PropType<import("focus-trap").FocusTargetOrFalse | (() => void) | undefined>;
    fallbackFocus: PropType<import("focus-trap").FocusTarget | undefined>;
    checkCanFocusTrap: PropType<((containers: (HTMLElement | SVGElement)[]) => Promise<void>) | undefined>;
    checkCanReturnFocus: PropType<((trigger: HTMLElement | SVGElement) => Promise<void>) | undefined>;
    delayInitialFocus: {
        type: BooleanConstructor;
        default: true;
    };
    document: PropType<Document | undefined>;
    preventScroll: BooleanConstructor;
    setReturnFocus: PropType<import("focus-trap").FocusTargetValueOrFalse | ((nodeFocusedBeforeActivation: HTMLElement | SVGElement) => import("focus-trap").FocusTargetValueOrFalse) | undefined>;
    tabbableOptions: PropType<import("focus-trap").FocusTrapTabbableOptions | undefined>;
}>> & {
    onActivate?: ((...args: any[]) => any) | undefined;
    onPostActivate?: ((...args: any[]) => any) | undefined;
    onDeactivate?: ((...args: any[]) => any) | undefined;
    onPostDeactivate?: ((...args: any[]) => any) | undefined;
    "onUpdate:active"?: ((...args: any[]) => any) | undefined;
}, {
    active: boolean;
    returnFocusOnDeactivate: boolean;
    escapeDeactivates: boolean | import("focus-trap").KeyboardEventToBoolean | undefined;
    allowOutsideClick: boolean | import("focus-trap").MouseEventToBoolean | undefined;
    preventScroll: boolean;
    delayInitialFocus: boolean;
}, {}>;
//# sourceMappingURL=FocusTrap.d.ts.map