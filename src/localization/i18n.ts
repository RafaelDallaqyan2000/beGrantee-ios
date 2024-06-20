import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import {hy, ru } from "./translations";
import SecureStorage from 'react-native-encrypted-storage';

const STORE_LANGUAGE_KEY = "language";

const languageDetectorPlugin: any = {
    type: "languageDetector",
    async: true,
    init: () => { },
    detect: async function (callback: (lang: string) => void) {
        try {
            // get stored language from Async storage
            // put your own language detection logic here
            await SecureStorage.getItem(STORE_LANGUAGE_KEY).then((language) => {
                if (language) {
                    //if language was stored before, use this language in the app
                    return callback(language);
                } else {
                    //if language was not stored yet, use english
                    return callback("en");
                }
            });
        } catch (error) {
            console.log("Error reading language", error);
        }
    },
    cacheUserLanguage: async function (language: string) {
        try {
            //save a user's language choice in Async storage
            console.log();
            
            await SecureStorage.setItem(STORE_LANGUAGE_KEY, language);
        } catch (error) { }
    },
};
const resources = {
    hy: {
        translation: hy,
    },
    ru: {
        translation: ru,
    },
};

i18n.use(initReactI18next).use(languageDetectorPlugin).init({
    resources,
    compatibilityJSON: 'v3',
    // fallback language is set to english
    fallbackLng: "en",
    interpolation: {
        escapeValue: false,
    },
});
export default i18n;