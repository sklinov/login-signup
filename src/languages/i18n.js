import i18next from 'i18next';
import { initReactI18next } from "react-i18next";
import ru from './ru.json'
import en from './en.json'

i18next
  .use(initReactI18next)
  .init({
    interpolation: {
      escapeValue: false,
    },
    lng: 'en',
    resources: {
      en: {
        "LoginTitle": "Log In"
      },
      ru: {
        common: ru        
      },
    },
  })

export default i18next