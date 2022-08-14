import { I18n } from "i18n-js";
import fr from "./fr.json";
import en from "./en.json";
import AsyncStorage from '@react-native-community/async-storage';
import Config from '../../../src/config';

const i18n = new I18n({
  ...fr,
  ...en,
});

i18n.locale = "en";

export const translate = (str) => (i18n.t(str))

export const changeLanguage = async (lang) => {
  i18n.locale = lang
  console.log(" Lang ", i18n.locale);
  try {
    await AsyncStorage.setItem(
      Config.storage_key.USER_LANGUAGE_SELECTED,
      i18n.locale
    );
  }
  catch (e) {
    console.log("error ", e);
  }
}






export default i18n