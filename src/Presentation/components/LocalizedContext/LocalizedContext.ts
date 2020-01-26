import { createContext } from 'react';
import LocalizedContextValue from '../../../Models/Types/LocalizedContextValue';

const LocalizedContext = createContext<LocalizedContextValue>({
    language : 'en',
    translate : (_ : string) => 'PLACEHOLDER_TRANSLATION',
    changeLanguage : (_ : string) => {}
});

export default LocalizedContext;