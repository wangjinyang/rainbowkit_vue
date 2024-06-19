import { App, Ref } from "vue";
import {
    fetchAllTranslations,
    Locale,
    LocaleAdapterInstance,
    LocaleMessages,
} from "use-rainbowkit-vue";
import { createI18n, I18n } from "vue-i18n";

export const RainbowKitVueI18nLocaleAdapterPlugin = () => {

    type AdditionalLocaleMessages= {
        [K in Locale]?: LocaleMessages;
    };
    
    function create(
        app: App,
        options?: { currentLocale?: Locale; fallbackLocale?: Locale, messages?:AdditionalLocaleMessages, i18n?: I18n<any,any,any,any,true> }
    ): LocaleAdapterInstance {

        const defaultMessages = fetchAllTranslations();
        const i18n = options?.i18n;
        if(i18n){            
            Object.keys(i18n.global.messages).forEach((locale)=>{
                const currentMessages = defaultMessages[locale as Locale];
                if(currentMessages){
                    ///Merge the default messages first 
                    i18n.global.mergeLocaleMessage(locale,currentMessages);
                    if(options.messages){
                        ///Overwrite default message or add new messages  
                        const overridenMessages = options.messages[locale as Locale];
                        if(overridenMessages){
                            i18n.global.mergeLocaleMessage(locale,overridenMessages);
                        }
                    }
                }
            });

            return {
                name: "vue-i18n",
                currentLocale: i18n.global.locale.value,
                fallbackLocale: i18n.global.fallbackLocale.value,
                messages: i18n.global.messages.value,
                // @ts-expect-error Type instantiation is excessively deep and possibly infinite
                t: (_fallbackLocale: string, _currentLocale: string, _messages: LocaleMessages, key: string, ...params: Record<string, any>[]) => i18n.global.t(key, params),
                n: (_fallbackLocale: string, _currentLocale: string, value: number, ..._params: Record<string, any>[]) => i18n.global.n(value),
                changeLocale: (
                    adapter: Ref<LocaleAdapterInstance>,
                    newLocale: Locale
                ) => {
                    i18n.global.locale.value = newLocale;
                    adapter.value = {
                        ...adapter.value,
                        messages: i18n.global.messages.value,
                        currentLocale: newLocale,
                    };
                },
            };
        }

        const currentLocale = options?.currentLocale ?? 'en-US';
        const fallbackLocale = options?.fallbackLocale ?? 'en-US';      
        const newI18n = createI18n({
            locale: currentLocale,
            fallbackLocale: fallbackLocale,
            legacy: false,
            globalInjection: true,
            messages: defaultMessages
        });
        app.use(newI18n);

        const messages = options?.messages;
        if (messages) {
            Object.keys(messages).forEach((locale)=>{
                const currentMessages = messages[locale as Locale];
                if(currentMessages){
                    newI18n.global.mergeLocaleMessage(locale,currentMessages);
                }
            });
        }

        return {
            name: "vue-i18n",
            currentLocale,
            fallbackLocale,
            messages: newI18n.global.messages.value,
            //// @ts-expect-error Type instantiation is excessively deep and possibly infinite
            t: (_fallbackLocale: string, _currentLocale: string, _messages: LocaleMessages, key: string, ...params: Record<string, any>[]) => newI18n.global.t(key, params),
            n: (_fallbackLocale: string, _currentLocale: string, value: number, ..._params: Record<string, any>[]) => newI18n.global.n(value),
            changeLocale: (adapter: Ref<LocaleAdapterInstance>, newLocale: Locale) => {
                newI18n.global.locale.value = newLocale;
                adapter.value = {
                    ...adapter.value,
                    messages: newI18n.global.messages.value,
                    currentLocale: newLocale,
                };
            },
        };
    }

    return { create };
};
