import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Engtrans from "./../public/Locales/EngTrans.json";

const resources = {
  en: {
    translation: Engtrans,
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
