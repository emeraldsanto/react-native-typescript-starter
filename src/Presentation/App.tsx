import React, { Component } from "react";
import { LocalizedContextProvider } from "../Architecture/Contexts/LocalizedContext/LocalizedContextProvider";
import { ThemeContextProvider } from "../Architecture/Contexts/ThemeContext/ThemeContextProvider";
import { Navigation } from "./Navigation";
import themes from '../Config/themes.json';
import translations from "./translation/translations.json";

export class App extends Component {

    render() {
        return (
            <ThemeContextProvider initialTheme={themes[0]} supportedThemes={themes}>
                <LocalizedContextProvider initialLanguage='fr' supportedLanguages={['fr', 'en']} translations={translations}>
                    <Navigation />
                </LocalizedContextProvider>
            </ThemeContextProvider>
        );
    }
}