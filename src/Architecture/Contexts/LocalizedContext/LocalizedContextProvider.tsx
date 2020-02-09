import React, { Component } from "react";
import LocalizedContextValue from "../../../Models/Types/LocalizedContextValue.js";
import translations from '../../../Presentation/translation/translations.json';
import LocalizedContext from "./LocalizedContext";
import LocalizedContextProviderState from './LocalizedContextProviderState';

export default class LocalizedContextProvider extends Component<{}, LocalizedContextProviderState> {
    
    static SUPPORTED_LANGUAGES = ['fr', 'en'];
    static STORAGE_KEY = "SAVED_LANGUAGE";

    state = {
        language : "en"
    }

    componentDidMount() {
        this._fetchSavedLanguage();
    }

    componentWillUnmount() {
        this._updateSavedLanguage();
    }

    private _translate = (key : string) : string => {
        const { language } = this.state;
        const localizations : { 
            [key : string] : {
                [key : string] : string
            }
        } = translations;

        try {
            return localizations[key][language];
        } catch (error) {
            return `[${key}]`;
        }
    }

    private _changeLanguage = (language : string) : void => {
        if (!LocalizedContextProvider.SUPPORTED_LANGUAGES.includes(language)) {
            throw new Error(`Unsupported language: ${language}`);
        }

        this.setState({ language });
    }

    private _computeProviderValue = () : LocalizedContextValue => {
        return {
            language : this.state.language,
            supportedLanguages : LocalizedContextProvider.SUPPORTED_LANGUAGES,
            changeLanguage : this._changeLanguage,
            translate : this._translate,
        };
    }

    private _fetchSavedLanguage = async () => {
        // TODO: After having implemented EncryptedStorage on the native
    }

    private _updateSavedLanguage = async () => {
        // TODO: After having implemented EncryptedStorage on the native
    }

    render() {
        return (
            <LocalizedContext.Provider value={this._computeProviderValue()}>
                {this.props.children}
            </LocalizedContext.Provider>
        );
    }
}