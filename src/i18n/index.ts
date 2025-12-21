import { createI18n } from 'vue-i18n'
import en from './locales/en.json'
import zhCN from './locales/zh-CN.json'
import zhTW from './locales/zh-TW.json'
import ja from './locales/ja.json'

const messages = {
  en,
  'zh-CN': zhCN,
  'zh-TW': zhTW,
  ja
}

// Get browser locale
const getBrowserLocale = () => {
  const browserLang = navigator.language
  
  if (browserLang.startsWith('zh')) {
    if (browserLang.includes('TW') || browserLang.includes('HK')) {
      return 'zh-TW'
    }
    return 'zh-CN'
  }
  
  if (browserLang.startsWith('ja')) {
    return 'ja'
  }
  
  return 'en'
}

export const i18n = createI18n({
  legacy: false,
  locale: getBrowserLocale(),
  fallbackLocale: 'en',
  messages
})

export const availableLocales = [
  { code: 'en', name: 'English' },
  { code: 'zh-CN', name: '简体中文' },
  { code: 'zh-TW', name: '繁體中文' },
  { code: 'ja', name: '日本語' }
]