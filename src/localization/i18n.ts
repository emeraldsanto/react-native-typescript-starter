import en from 'app/localization/en.json';
import fr from 'app/localization/fr.json';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

void i18n.use(initReactI18next).init({
  lng: 'en',
  resources: {
    en,
    fr,
  },
});

export { i18n };
