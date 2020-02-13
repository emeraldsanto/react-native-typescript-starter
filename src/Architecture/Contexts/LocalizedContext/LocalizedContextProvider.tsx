import React, { FunctionComponent, useState } from "react";
import { LocalizationContext } from "./LocalizationContext";
import { LocalizedContextProviderProps } from "./LocalizedContextProviderProps";

export const LocalizedContextProvider : FunctionComponent<LocalizedContextProviderProps> = props => {
    const { initialLanguage, supportedLanguages, translations, children } = props;
    const [language, setLanguage] = useState(initialLanguage);

    const changeLanguage = (newLanguage : string) => {
        if (!supportedLanguages.includes(newLanguage)) {
            throw new Error(`Unsupported language: ${language}`);
        }

        setLanguage(newLanguage);
    }

    const translate = (key : string) => {   
        try {
            return translations[key][language];
        } catch (error) {
            return `[${key}]`;
        }
    }

    return (
        <LocalizationContext.Provider value={{ language, changeLanguage, translate, supportedLanguages }}>
            {children}
        </LocalizationContext.Provider>
    );
}