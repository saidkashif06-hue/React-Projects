import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import en from './localas/en.json'
import ur from './localas/ur.json'
import ja from './localas/ja.json'

i18n.use(initReactI18next).init({

  resources: {

    en: {
      translation: en
    },

    ur: {
      translation: ur
    },
    
    ja: {
      translation: ja
    },


  },

  lng: 'en',

  fallbackLng: 'en',

  interpolation: {
    escapeValue: false
  }

})

export default i18n