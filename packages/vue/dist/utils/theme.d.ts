import { type ThemeVariables } from '../css/sprinkles.css';
export declare function cssObjectFromTheme(theme: ThemeVariables | (() => ThemeVariables), { extends: baseTheme }?: {
    extends?: ThemeVariables | (() => ThemeVariables);
}): Record<string, string>;
export declare function cssStringFromTheme(theme: ThemeVariables | (() => ThemeVariables), options?: {
    extends?: ThemeVariables | (() => ThemeVariables);
}): string;
//# sourceMappingURL=theme.d.ts.map