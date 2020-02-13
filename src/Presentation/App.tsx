import React, { FunctionComponent } from "react";
import { LocalizationContextProvider } from "../Architecture/Contexts/LocalizedContext/LocalizationContextProvider";
import { ThemeContextProvider } from "../Architecture/Contexts/ThemeContext/ThemeContextProvider";
import themes from '../Config/themes.json';
import { Navigation } from "./Navigation";
import translations from "./translation/translations.json";

export const App : FunctionComponent = () => {
    return (
        <ThemeContextProvider initialTheme={themes[0]} supportedThemes={themes}>
            <LocalizationContextProvider initialLanguage='fr' supportedLanguages={['fr', 'en']} translations={translations}>
                <Navigation />
            </LocalizationContextProvider>
        </ThemeContextProvider>
    );
}