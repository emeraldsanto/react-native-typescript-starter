import React, { Component } from "react";
import { Text } from "react-native";
import LocalizedContextProvider from "./components/LocalizedContext/LocalizedContextProvider";
import translations from './translation/translations.json';

export default class App extends Component {

    render() {
        return (
            <LocalizedContextProvider initialLanguage='fr' supportedLanguages={['fr', 'en']} translations={translations}>
                <Text>Bonsoir</Text>
            </LocalizedContextProvider>
        );
    }
}