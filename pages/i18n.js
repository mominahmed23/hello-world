import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./../locale/en.json";
import ar from "./../locale/ar.json";
import tr from "./../locale/tr.json";

const resources = {
  en: {
    translation: en,
  },
  ar: {
    translation: ar,
  },
  tr: {
    translation: tr,
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
