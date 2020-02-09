import { createContext } from 'react';
import LocalizedContextValue from '../../../Models/Types/LocalizedContextValue';

const LocalizedContext = createContext<LocalizedContextValue>({
    language : 'en',
    supportedLanguages : ['en'],
    changeLanguage : (_ : string) => {},
    translate : (_ : string) => 'PLACEHOLDER_TRANSLATION',
});

export default LocalizedContext;