import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import translationEN from "./locales/en/translation.json";
import translationTW from "./locales/zh-TW/translation.json";
import translationJP from "./locales/ja/translation.json";

// 設置語言和翻譯
const resources = {
  en: {
    translation: translationEN,
  },
  "zh-TW": {
    translation: translationTW,
  },
  ja: {
    translation: translationJP,
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: "ja", // 預設語言為 ja
    fallbackLng: "en",
    debug: true,

    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
  });

export default i18n;
