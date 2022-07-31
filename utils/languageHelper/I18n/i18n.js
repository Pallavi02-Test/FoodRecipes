import { I18n } from "i18n-js";
import fr from "./fr.json";
import en from "./en.json";

const i18n = new I18n({
  ...fr,
  ...en,
});

i18n.locale = "en";

export const translate = (str) => (i18n.t(str))

export const changeLanguage = (lang) => (i18n.locale = lang)

export default i18n