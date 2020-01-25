import { createContext } from 'react';

export interface LocalizedContextValue {
    language : string;
    translate : (_ : string) => string;
    changeLanguage : (_ : string) => void;
}

const LocalizedContext = createContext<LocalizedContextValue>({
    language : 'en',
    translate : (_ : string) => 'PLACEHOLDER_TRANSLATION',
    changeLanguage : (_ : string) => {}
});

export default LocalizedContext;