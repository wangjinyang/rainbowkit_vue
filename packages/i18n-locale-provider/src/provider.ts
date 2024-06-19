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
        options?: { currentLocale?: Locale; fallbackLocale?: Locale, messages?:AdditionalLocaleMessages, i18n?: I18n<any,any,any,any,false> }
    ): LocaleAdapterInstance {

        const defaultMessages = fetchAllTranslations();
        const i18n = options?.i18n;
        if(i18n){   
           
            Object.keys(i18n.global.messages.value).forEach((locale)=>{
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

            if(!i18n.global.messages.value){
                i18n.global.mergeLocaleMessage(i18n.global.locale.value,defaultMessages[i18n.global.locale.value as Locale]);
            }         

            if(typeof i18n.global.fallbackLocale.value === 'string'){
                i18n.global.mergeLocaleMessage(i18n.global.fallbackLocale.value,defaultMessages[i18n.global.fallbackLocale.value as Locale]);
            }else if(Array.isArray(i18n.global.fallbackLocale.value)){
                for(const locale of i18n.global.fallbackLocale.value){
                    console.log(locale);
                    i18n.global.mergeLocaleMessage(locale,defaultMessages[locale as Locale]);
                }
            }

            return {
                name: "vue-i18n",
                currentLocale: i18n.global.locale.value,
                fallbackLocale: i18n.global.fallbackLocale.value,
                messages: i18n.global.messages.value,
                t: (_fallbackLocale: string, _currentLocale: string, _messages: LocaleMessages, key: string, ...params: Record<string, any>[])=>{
                    if(params.length > 0){
                        const mergeParams = params.reduce((param,currentParam)=>{
                            return { ...param, currentParam }
                        })[0];
                        console.log(mergeParams);
                        // @ts-expect-error Type instantiation is excessively deep and possibly infinite
                        return i18n.global.t(key,mergeParams);
                    }
                    return i18n.global.t(key);
                },
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

        if(!newI18n.global.messages.value){
            newI18n.global.mergeLocaleMessage(newI18n.global.locale.value,defaultMessages[newI18n.global.locale.value as Locale]);
        }         
        
        if(typeof newI18n.global.fallbackLocale.value === 'string'){
            newI18n.global.mergeLocaleMessage(newI18n.global.fallbackLocale.value,defaultMessages[newI18n.global.fallbackLocale.value as Locale]);
        }else if(Array.isArray(newI18n.global.fallbackLocale.value)){
            for(const locale of newI18n.global.fallbackLocale.value){
                newI18n.global.mergeLocaleMessage(locale,defaultMessages[locale as Locale]);
            }
        }

        return {
            name: "vue-i18n",
            currentLocale,
            fallbackLocale,
            messages: newI18n.global.messages.value,
            t: (_fallbackLocale: string, _currentLocale: string, _messages: LocaleMessages, key: string, ...params: Record<string, any>[]) =>{
                if(params.length > 0){
                    const mergeParams = params.reduce((param,currentParam)=>{
                        return { ...param, currentParam }
                    })[0];
                    return newI18n.global.t(key,mergeParams);
                }
                return newI18n.global.t(key);
            },
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
