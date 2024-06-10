import { App } from "vue";
import { Locale, LocaleAdapterInstance, LocaleMessages } from "use-rainbowkit-vue";
export declare const RainbowKitVueI18nLocaleAdapterPlugin: () => {
    create: (app: App, options?: {
        currentLocale?: Locale;
        fallbackLocale?: Locale;
        messages?: Record<Locale, LocaleMessages>;
    }) => LocaleAdapterInstance;
};
//# sourceMappingURL=provider.d.ts.map