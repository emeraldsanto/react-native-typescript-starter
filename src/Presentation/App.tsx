import React, { Component } from "react";
import { SafeAreaView } from "react-native";
import LocalizedContextProvider from "./components/LocalizedContext/LocalizedContextProvider";
import LocalizedText from "./components/LocalizedText/LocalizedText";
import translations from './translation/translations.json';

export default class App extends Component {

    render() {
        return (
            <LocalizedContextProvider initialLanguage='fr' supportedLanguages={['fr', 'en']} translations={translations}>
                <SafeAreaView>
                    <LocalizedText>
                        welcome
                    </LocalizedText>
                </SafeAreaView>
            </LocalizedContextProvider>
        );
    }
}