import { fetchTranslations } from "@/utils";
import type {
    Locale,
    LocaleAdapter,
    LocaleAdapterInstance,
    LocaleAdapterNumberTranslationFunc,
    LocaleAdapterTextTranslationFunc,
    LocaleAdditionalMessages,
    LocaleMessages,
    LocaleMixedType,
    LocaleOptions
} from "@/types";
import { InjectionKey, Ref, getCurrentInstance, inject } from "vue";

export function createRainbowKitDefaultLocaleAdapter(): LocaleAdapter {
    ///symbol key to store the additional resource messages
    const RainbowKitLocaleResourceKey: InjectionKey<LocaleAdditionalMessages> = Symbol.for('rk-locale-resources-context');

    function isObject(obj: LocaleMixedType) {
        return obj !== null && typeof obj === 'object' && obj !== undefined;
    }

    function isNumber(obj: LocaleMixedType) {
        return obj !== null && typeof obj === 'number' && obj !== undefined;
    }

    function isString(obj: LocaleMixedType) {
        return obj !== null && typeof obj === 'string' && obj !== undefined;
    }

    function isBoolean(obj: LocaleMixedType) {
        return obj !== null && typeof obj === 'boolean' && obj !== undefined;
    }

    function isArray(obj: LocaleMixedType) {
        return Array.isArray(obj);
    }

    function isLocaleMessages(messages: LocaleMessages | string): messages is LocaleMessages {
        return isObject(messages) && !isArray(messages);
    }

    function isNumberFormatOptions(options: Intl.NumberFormatOptions): options is Intl.NumberFormatOptions {
        try {
            Intl.NumberFormat(undefined, options);
            return true;
        } catch (error) {
            return false;
        }
    }

    function flattenTranslation(
        translationObject: LocaleMessages
    ): LocaleMessages {
        const result: LocaleMessages = {};
        const flatten = (
            currentTranslationObj: LocaleMessages,
            parentKey: string,
        ) => {
            for (const key of Object.keys(currentTranslationObj)) {
                const newKey =  parentKey === '' ? key : `${parentKey}.${key}`;
                const currentValue = currentTranslationObj[key];

                // If more nested values are encountered in the object, then
                // the same function will be called again
                if (typeof currentValue === 'object' && currentValue !== null) {
                    flatten(currentValue, newKey);
                } else {
                    // Otherwise, assign the result to the final
                    // object value with the new key
                    result[newKey] = currentValue;
                }
            }
        };

        flatten(translationObject, '');
        return result;
    }


    function getResourceFromMessages(messages: LocaleMessages | string, targetKey: string, placeHolders: Record<string, any>[]): string {
        if (!isLocaleMessages(messages)) return targetKey;
        for (const key of Object.keys(messages)) {
            const values = messages[key];
            if (isString(values) && targetKey === key) {
                return translateWithPlaceholder(values as string, placeHolders);
            }
            ///
            if (isLocaleMessages(values) && targetKey !== key) {
                return getResourceFromMessages(values, targetKey, placeHolders);
            }
        }

        return targetKey;
    }

    function translateWithPlaceholder(message: string, placeHolders: Array<Record<string, any>>) {
        let translatedMessage = message;
        for (const placeHolder of placeHolders) {

            const newPlaceHolder = placeHolder[0];
            if (!newPlaceHolder) continue;

            const keys = Object.keys(newPlaceHolder);
            if (!keys) continue;

            keys.map((key) => {

                const value = newPlaceHolder[key];
                const formattedKey = `%{${key}}`;

                if (isObject(value) || isArray(value)) return; /// currently no support for object and array
                if (isBoolean(value)) {
                    translatedMessage = translatedMessage.trim().replace(formattedKey, String(value as boolean));
                    return;
                }
                if (isNumber(value)) {
                    translatedMessage = translatedMessage.trim().replace(formattedKey, (value as number).toString());
                    return;
                }

                translatedMessage = translatedMessage.trim().replace(formattedKey.trim(), value);
            })
        }

        return translatedMessage;
    }

    function createTranslateNumberFunc(): LocaleAdapterNumberTranslationFunc {
        return (currentLocale: string, fallbackLocale: string, value: number, ...args: any) => {
            if (!isNumberFormatOptions(args)) return value.toString();
            if (!currentLocale && !fallbackLocale) return value.toString();
            const formatter = new Intl.NumberFormat([currentLocale, fallbackLocale], args);
            return formatter.format(value);
        }
    }

    function createTranslateTextFunc(): LocaleAdapterTextTranslationFunc {
        return (fallbackLocale: string, currentLocale: string, messages: LocaleMessages, key: string, ...params: Record<string, any>[]) => {
            if (!fallbackLocale && !currentLocale) return key;

            let message = key;
            const formattedKey = key;
            if (currentLocale) {
                message = getResourceFromMessages(messages, formattedKey, params);
                return message;
            }

            message = getResourceFromMessages(messages, formattedKey, params);
            return message;
        }
    }

    function changeLocale(adapter: Ref<LocaleAdapterInstance>, newLocale: Locale) {

        const resources = inject(RainbowKitLocaleResourceKey);
        let messages = flattenTranslation(fetchTranslations(newLocale));
        if (resources) {
            const additionalMessages = resources[newLocale];
            if (additionalMessages) {
                messages = { ...messages, ...additionalMessages };
            }
        }

        adapter.value = {
            ...adapter.value,
            messages,
            currentLocale: newLocale,
        }
    }

    function install(option?: LocaleOptions): LocaleAdapterInstance {

        const currentLocale = option?.locale ?? "en";
        const fallbackLocale = option?.fallbackLocale ?? "en";
        let currentMessages = flattenTranslation(fetchTranslations(currentLocale));

        const optionMessages = option?.message
        if (optionMessages) {
            getCurrentInstance()?.appContext.app.provide(RainbowKitLocaleResourceKey, optionMessages);
            const currentAdditionalMessages = optionMessages[currentLocale];
            if (currentAdditionalMessages) {
                currentMessages = { ...currentMessages, ...flattenTranslation(currentAdditionalMessages) };
            }

            return {
                name: "RainbowKit Vue",
                currentLocale,
                fallbackLocale,
                messages: currentMessages,
                changeLocale,
                t: createTranslateTextFunc(),
                n: createTranslateNumberFunc(),
            };
        }

        return {
            name: "RainbowKit Vue",
            currentLocale,
            fallbackLocale,
            messages: currentMessages,
            changeLocale,
            t: createTranslateTextFunc(),
            n: createTranslateNumberFunc(),
        }
    }

    return { install }
} 