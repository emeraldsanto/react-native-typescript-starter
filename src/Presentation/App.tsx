import React, { FunctionComponent } from "react";
import { LocalizationContextProvider } from "../Architecture/Contexts/LocalizedContext/LocalizationContextProvider";
import { Theme } from "../Architecture/Contexts/ThemeContext/ThemeContext";
import { ThemeContextProvider } from "../Architecture/Contexts/ThemeContext/ThemeContextProvider";
import themes from '../Config/themes.json';
import { Navigation } from "./Navigation";
import translations from "./translation/translations.json";

export const App : FunctionComponent = () => {
    const initialTheme : Theme = themes[0];

    return (
        <ThemeContextProvider initialTheme={initialTheme} supportedThemes={themes}>
            <LocalizationContextProvider initialLanguage='fr' supportedLanguages={['fr', 'en']} translations={translations}>
                <Navigation />
            </LocalizationContextProvider>
        </ThemeContextProvider>
    );
}