import { type Context, type LocaleAdapterInstance, type RainbowKitPluginConfig, type Locale } from '../types';
export declare function createLocaleContext(option: RainbowKitPluginConfig): Context<LocaleAdapterInstance>;
export declare function useLocale(): {
    t: (key: string, ...replacements: Record<string, any>[]) => string;
    changeLocale: (locale: Locale) => void;
    adapter: Context<LocaleAdapterInstance>;
};
//# sourceMappingURL=locale.d.ts.map