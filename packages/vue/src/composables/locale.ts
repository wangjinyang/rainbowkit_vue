import { createRainbowKitDefaultLocaleAdapter } from '@/locales/adapters/RainbowkitDefaultLocaleAdapter'
import {
  LocaleAdapterContextKey,
  type Context,
  type LocaleAdapterInstance,
  type RainbowKitPluginConfig,
  type Locale,
} from '@/types'
import { detectedBrowserLocale } from '@/utils'
import { inject, ref } from 'vue'

export function createLocaleContext(
  option: RainbowKitPluginConfig
): Context<LocaleAdapterInstance> {
  const defaultAdapter = createRainbowKitDefaultLocaleAdapter().install({ 
    locale: detectedBrowserLocale() ?? 'en', 
    fallbackLocale: detectedBrowserLocale() ?? 'en' 
  });
  const adapter = option?.locale ?? defaultAdapter;
  const context = ref<LocaleAdapterInstance>(adapter)
  return context;
}

export function useLocale() {
  const adapter = inject(LocaleAdapterContextKey)
  if (!adapter)
    throw Error(`Could not find injected '${String(LocaleAdapterContextKey)}' instance.`)
  const { t: translate, currentLocale, fallbackLocale, messages } = adapter.value

  const changeLocale = (locale: Locale) => {
    adapter.value.changeLocale(adapter,locale);
  }

  const t = (key: string, ...replacements: Record<string, any>[]) => {
    const result = translate(
      fallbackLocale,
      currentLocale,
      messages, 
      key, 
      replacements);

    return result
  }

  return { t, changeLocale, adapter }
}
