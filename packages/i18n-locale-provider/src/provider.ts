import { App, Ref } from "vue";
import {
    Locale,
    LocaleAdapterInstance,
    LocaleMessages,
} from "use-rainbowkit-vue";
import { createI18n, I18n } from "vue-i18n";
import arAr from "./locales/ar_AR.json";
import enUs from "./locales/en_US.json";
import es419 from "./locales/es_419.json";
import frFR from "./locales/fr_FR.json";
import hiIN from "./locales/hi_IN.json";
import idID from "./locales/id_ID.json";
import jaJP from "./locales/ja_JP.json";
import koKR from "./locales/ko_KR.json";
import ptBR from "./locales/pt_BR.json";
import ruRU from "./locales/ru_RU.json";
import thTH from "./locales/th_TH.json";
import trTR from "./locales/tr_TR.json";
import ukUA from "./locales/uk_UA.json";
import zhCN from "./locales/zh_CN.json";

export const RainbowKitVueI18nLocaleAdapterPlugin = () => {

    type AdditionalLocaleMessages= {
        [K in Locale]?: LocaleMessages;
    };
    
    function create(
        app: App,
        options?: { currentLocale?: Locale; fallbackLocale?: Locale, messages?:AdditionalLocaleMessages, i18n?: I18n<any,any,any,any,true> }
    ): LocaleAdapterInstance {
        type MessageSchema = typeof enUs;
        const defaultMessages =  {
            ar: arAr,
            "ar-AR": arAr,
            en: enUs,
            "en-US": enUs,
            es: es419,
            "es-419": es419,
            fr: frFR,
            "fr-FR": frFR,
            hi: hiIN,
            "hi-IN": hiIN,
            id: idID,
            "id-ID": idID,
            ja: jaJP,
            "ja-JP": jaJP,
            ko: koKR,
            "ko-KR": koKR,
            pt: ptBR,
            "pt-BR": ptBR,
            ru: ruRU,
            "ru-RU": ruRU,
            th: thTH,
            "th-TH": thTH,
            tr: trTR,
            "tr-TR": trTR,
            ua: ukUA,
            "uk-UA": ukUA,
            zh: zhCN,
            "zh-CN": zhCN,
        };

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
        const newI18n = createI18n<[MessageSchema], Locale,false>({
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
            t: (
                _fallbackLocale: string,
                _currentLocale: string,
                _messages: LocaleMessages,
                key: string,
                ...params: Record<string, any>[]
            ) => newI18n.global.t(key, params),
            n: (
                _fallbackLocale: string,
                _currentLocale: string,
                value: number,
                ..._params: Record<string, any>[]
            ) => newI18n.global.n(value),
            changeLocale: (
                adapter: Ref<LocaleAdapterInstance>,
                newLocale: Locale
            ) => {
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
