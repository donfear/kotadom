import i18n from "i18next";

import { initReactI18next } from "react-i18next";
import { ruTranslations } from "./translations/ru";
import { eeTranslations } from "./translations/ee";
import { enTranslations } from "./translations/en";

// the translations
const resources = {
  ee: { translation: eeTranslations },
  ru: { translation: ruTranslations },
  en: { translation: enTranslations },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "ru",
    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
