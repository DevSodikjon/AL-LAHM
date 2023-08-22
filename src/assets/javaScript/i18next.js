import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import translationEN from "../../db/translation/eng.json"; // Import your English translations
import translationUZ from "../../db/translation/uzb.json"; // Import your Uzbek translations
import translationRU from "../../db/translation/rus.json"; // Import your Russian translations

const resources = {
  en: {
    translation: translationEN,
  },
  uz: {
    translation: translationUZ,
  },
  ru: {
    translation: translationRU,
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "uzb", // Default language fallback
    debug: true, // Enable debug mode for development
    interpolation: {
      escapeValue: false, // React handles escaping
    },
  });

export default i18n;
