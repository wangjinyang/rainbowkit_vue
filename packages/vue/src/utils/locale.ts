import { 
    type Locale,
    type LocaleMessages
} from "@/types";

export const detectedBrowserLocale = () => {
    if (typeof window !== 'undefined' && typeof navigator !== 'undefined') {
      if (navigator.languages?.length) {
        return navigator.languages[0] as Locale;
      }
  
      if (navigator.language) {
        return navigator.language as Locale;
      }
    }
};

export type Resources = {
  [K in Locale]: LocaleMessages;
};

export const fetchAllTranslations = (): Resources =>{
  return {
    ar: fetchTranslations("ar"),
    "ar-AR": fetchTranslations("ar-AR"),
    en: fetchTranslations("en"),
    "en-US": fetchTranslations("en-US"),
    es: fetchTranslations("es"),
    "es-419": fetchTranslations("es-419"),
    fr: fetchTranslations("fr"),
    "fr-FR": fetchTranslations("fr-FR"),
    hi: fetchTranslations("hi"),
    "hi-IN": fetchTranslations("hi-IN"),
    id: fetchTranslations("id"),
    "id-ID": fetchTranslations("id-ID"),
    ja: fetchTranslations("ja"),
    "ja-JP": fetchTranslations("ja-JP"),
    ko: fetchTranslations("ko"),
    "ko-KR": fetchTranslations("ko-KR"),
    pt: fetchTranslations("pt"),
    "pt-BR": fetchTranslations("pt-BR"),
    ru: fetchTranslations("ru"),
    "ru-RU": fetchTranslations("ru-RU"),
    th: fetchTranslations("th"),
    "th-TH": fetchTranslations("th-TH"),
    tr: fetchTranslations("tr"),
    "tr-TR": fetchTranslations("tr-TR"),
    ua: fetchTranslations("ua"),
    "uk-UA": fetchTranslations("uk-UA"),
    zh: fetchTranslations("zh"),
    "zh-CN": fetchTranslations("zh-CN"),
  };
}

export const fetchTranslations = (locale: Locale): LocaleMessages => {
    switch (locale) {
      case 'ar':
      case 'ar-AR':
        const ar = (import.meta.glob<{ default: LocaleMessages }>('../locales/ar_AR.json',{eager: true }))['../locales/ar_AR.json'].default;
        return ar as LocaleMessages;
      case 'en':
        const en = (import.meta.glob<{ default: LocaleMessages }>('../locales/en_US.json',{eager: true}))['../locales/en_US.json'].default;
        return en as LocaleMessages;
      case 'es':
      case 'es-419':
        const es = (import.meta.glob<{ default: LocaleMessages }>('../locales/es_419.json',{eager: true}))['../locales/es_419.json'].default;
        return es as LocaleMessages;
      case 'fr':
      case 'fr-FR':
        const fr = (import.meta.glob<{ default: LocaleMessages }>('../locales/fr_FR.json',{eager: true}))['../locales/fr_FR.json'].default;
        return fr as LocaleMessages;
      case 'hi':
      case 'hi-IN':
        const hi = (import.meta.glob<{ default: LocaleMessages }>('../locales/hi_IN.json',{eager: true}))['../locales/hi_IN.json'].default;
        return hi as LocaleMessages;
      case 'id':
      case 'id-ID':
        const id = (import.meta.glob<{ default: LocaleMessages }>('../locales/id_ID.json',{eager: true}))['../locales/id_ID.json'].default;
        return id as LocaleMessages;
      case 'ja':
      case 'ja-JP':
        const ja = (import.meta.glob<{ default: LocaleMessages }>('../locales/ja_JP.json',{eager:true}))['../locales/ja_JP.json'].default;
        return ja as LocaleMessages;
      case 'ko':
      case 'ko-KR':
        const ko = (import.meta.glob<{ default: LocaleMessages }>('../locales/ko_KR.json',{eager:true}))['../locales/ko_KR.json'].default;
        return ko as LocaleMessages;
      case 'pt':
      case 'pt-BR':
        const pt = (import.meta.glob<{ default: LocaleMessages }>('../locales/pt_BR.json',{eager:true}))['../locales/pt_BR.json'].default;
        return pt as LocaleMessages;
      case 'ru':
      case 'ru-RU':
        const ru = (import.meta.glob<{ default: LocaleMessages }>('../locales/ru_RU.json',{eager:true}))['../locales/ru_RU.json'].default;
        return ru as LocaleMessages;
      case 'th':
      case 'th-TH':
        const th = (import.meta.glob<{ default: LocaleMessages }>('../locales/th_TH.json',{eager:true}))['../locales/th_TH.json'].default;
        return th as LocaleMessages;
      case 'tr':
      case 'tr-TR':
        const tr = (import.meta.glob<{ default: LocaleMessages }>('../locales/tr_TR.json',{eager:true}))['../locales/tr_TR.json'].default;
        return tr as LocaleMessages;
      case 'ua':
      case 'uk-UA':
        const ua = (import.meta.glob<{ default: LocaleMessages }>('../locales/uk_UA.json',{eager:true}))['../locales/uk_UA.json'].default;
        return ua as LocaleMessages;
      case 'zh':
      case 'zh-CN':
        const zh = (import.meta.glob<{ default: LocaleMessages }>('../locales/zh_CN.json',{eager:true}))['../locales/zh_CN.json'].default;
        return zh as LocaleMessages;
      default:
        const enUS = (import.meta.glob<{ default: LocaleMessages }>('../locales/en_US.json',{eager:true}))['../locales/en_US.json'].default;
        return enUS as LocaleMessages;
    }
};
  