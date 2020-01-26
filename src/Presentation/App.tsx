import React, { Component } from "react";
import LocalizedContextProvider from "./components/LocalizedContext/LocalizedContextProvider";
import { Navigation } from "./Navigation";
import translations from './translation/translations.json';

export default class App extends Component {

    render() {
        return (
            <LocalizedContextProvider initialLanguage='fr' supportedLanguages={['fr', 'en']} translations={translations}>
                <Navigation />
            </LocalizedContextProvider>
        );
    }
}