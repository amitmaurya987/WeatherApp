import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import * as RNLocalize from 'react-native-localize';
import {I18nManager} from 'react-native';

// List Of Indian Languages
import bn from '../locales/bn';
import en from '../locales/en';
import gu from '../locales/gu';
import hi from '../locales/hi';
import kn from '../locales/kn';
import ml from '../locales/ml';
import mr from '../locales/mr';
import or from '../locales/or';
import pa from '../locales/pa';
import ta from '../locales/ta';
import te from '../locales/te';
import ur from '../locales/ur';

const locales = RNLocalize.getLocales();
const language = locales[0]?.languageCode || 'en';

// Function to check if the language is RTL
const isRTL = lang => ['ur', 'ar', 'fa', 'he'].includes(lang);

// Apply RTL settings if needed
const applyRTL = lang => {
  const rtlEnabled = isRTL(lang);
  if (I18nManager.isRTL !== rtlEnabled) {
    I18nManager.allowRTL(rtlEnabled);
    I18nManager.forceRTL(rtlEnabled);
  }
};

// Initialize i18n
i18n.use(initReactI18next).init(
  {
    compatibilityJSON: 'v3',
    resources: {
      bn: {translation: bn},
      en: {translation: en},
      gu: {translation: gu},
      hi: {translation: hi},
      kn: {translation: kn},
      ml: {translation: ml},
      mr: {translation: mr},
      or: {translation: or},
      pa: {translation: pa},
      ta: {translation: ta},
      te: {translation: te},
      ur: {translation: ur},
    },
    lng: language,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  },
  () => {
    applyRTL(language);
  },
);

// Function to change language and apply RTL settings if needed
export const changeLanguage = lang => {
  i18n.changeLanguage(lang);
  applyRTL(lang);
};

export default i18n;
