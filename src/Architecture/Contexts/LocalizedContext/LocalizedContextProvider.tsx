import React, { Component } from "react";
import LocalizedContextValue from "../../../Models/Types/LocalizedContextValue";
import translations from '../../../Presentation/translation/translations.json';
import LocalizedContext from "./LocalizedContext";
import LocalizedContextProviderState from './LocalizedContextProviderState';
import LocalizedContextProviderProps from "./LocalizedContextProviderProps";

export default class LocalizedContextProvider extends Component<LocalizedContextProviderProps, LocalizedContextProviderState> {

    state = {
        language : this.props.initialLanguage
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
        if (!this.props.supportedLanguages.includes(language)) {
            throw new Error(`Unsupported language: ${language}`);
        }

        this.setState({ language });
    }

    private _computeProviderValue = () : LocalizedContextValue => {
        return {
            language : this.state.language,
            translate : this._translate,
            changeLanguage : this._changeLanguage,
            supportedLanguages : this.props.supportedLanguages,
        };
    }

    render() {
        return (
            <LocalizedContext.Provider value={this._computeProviderValue()}>
                {this.props.children}
            </LocalizedContext.Provider>
        );
    }
}