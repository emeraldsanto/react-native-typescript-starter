import { createContext } from 'react';

export interface LocalizationContextValue {
    language : string;
    supportedLanguages : string[];
    changeLanguage : (_ : string) => void;
    translate : (_ : string) => string;
}

export const LocalizationContext = createContext<LocalizationContextValue>({
    language : 'en',
    supportedLanguages : ['en'],
    changeLanguage : (_ : string) => {},
    translate : (_ : string) => 'PLACEHOLDER_TRANSLATION',
});

