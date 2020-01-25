import React, { Component } from "react";
import LocalizedContext, { LocalizedContextValue } from "./LocalizedContext";
import LocalizedContextProviderProps from './LocalizedContextProviderProps';
import LocalizedContextProviderState from './LocalizedContextProviderState';

export default class LocalizedContextProvider extends Component<LocalizedContextProviderProps, LocalizedContextProviderState> {
    
    state = {
        language : this.props.initialLanguage
    }

    private _translate = (key : string) : string => {
        const { translations } = this.props;
        const { language } = this.state;

        try {
            return translations[key][language];
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
            changeLanguage : this._changeLanguage
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