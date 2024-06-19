# Rainbowkit Vue i18n Locale Provider

An locale adapter for rainbowkit vue plugin.

## Installation

Install locale adapter and its [rainbowkit-vue](https://github.com/0xHoST/rainbowkit_vue.git), [vue-i18n](https://github.com/kazupon/vue-i18n) peer dependencies.

```bash
npm install vue-i18n use-rainbowkit-vue use-rainbowkit-vue-i18n-locale-provider
```

## Usage

```ts
import { RainbowKitVuePlugin  } from "use-rainbowkit-vue";
import { RainbowKitVueI18nLocaleAdapterPlugin } from 'use-rainbowkit-vue-i18n-locale-provider';
import { createI18n } from 'vue-i18n';

///If having existing i18n
const i18n = createI18n({
    locale: 'en',
    fallbackLocale: 'en',
    legacy: true,
    globalInjection: true,
    messages: {
        'en': {
            "wallet.module": "This wording is the default word"
        }
    }
});

const { create: createI18nAdapter } = RainbowKitVueI18nLocaleAdapterPlugin();
const i18nAdapter = createI18nAdapter(app,{ 
    currentLocale: 'zh', /// No need to assign, if you having existing i18n
    fallbackLocale: 'zh', /// No need to assign, if you having existing i18n
    messages:{ "en": { "wallet.module": "You can override the existing language with same key or add your new language wording" }},
    i18n
});

app.use(i18n).use(RainbowKitVuePlugin,{
    adapter: i18nAdapter
})
```
