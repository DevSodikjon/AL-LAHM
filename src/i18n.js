import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import uz from "./db/translation/uzb.json";
import ru from "./db/translation/rus.json";
import en from "./db/translation/eng.json";
const resources = {
  uz: {
    translation: uz,
  },
  ru: {
    translation: ru,
  },
  en: {
    translation: en,
  },
};
i18n.use(initReactI18next).init({
  resources,
  fallbackLng: "uz",
  debug: true,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;