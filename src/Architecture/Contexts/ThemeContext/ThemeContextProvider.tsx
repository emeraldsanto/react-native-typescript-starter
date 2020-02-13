import React, { Component } from "react";
import ThemeContextValue from "../../../Models/Types/ThemeContextValue";
import ThemeContext from "./ThemeContext";
import ThemeContextProviderState from "./ThemeContextProviderState";
import ThemeContextProviderProps from "./ThemeContextProviderProps.js";

export default class ThemeContextProvider extends Component<ThemeContextProviderProps, ThemeContextProviderState> {
    
    state = {
        theme : this.props.initialTheme
    }

    private _changeTheme = (themeName : string) : void => {
        const theme = this.props.supportedThemes.find(t => t.name === themeName);

        if (!theme) {
            console.warn(`Unable to find theme with name: ${themeName}`);
            return;
        }

        this.setState({ theme });
    }

    private _computeProviderValue = () : ThemeContextValue => {
        return {
            theme : this.state.theme,
            changeTheme : this._changeTheme,
            supportedThemes : this.props.supportedThemes
        }
    }

    render() {
        return (
            <ThemeContext.Provider value={this._computeProviderValue()}>
                {this.props.children}
            </ThemeContext.Provider>
        );
    }
}