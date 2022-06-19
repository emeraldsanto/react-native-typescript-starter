import i18n from 'i18next';
import en from './en.json';
import fr from './fr.json';
import { initReactI18next } from 'react-i18next';

void i18n.use(initReactI18next).init({
  lng: 'en',
  resources: {
    en,
    fr,
  },
});

export { i18n };
