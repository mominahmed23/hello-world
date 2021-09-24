import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./public/Locales/en/common.json";
import ar from "./public/Locales/ar/common.json";

const resources = {
  en: {
    translation: en,
  },
  ar: {
    translation: ar,
  },
};
i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  keySeparator: false,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
