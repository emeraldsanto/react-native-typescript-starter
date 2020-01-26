import React, { Component } from "react";
import Themes from '../../../Config/themes.json';
import ThemeContextValue from "../../../Models/Types/ThemeContextValue";
import ThemeContext from "./ThemeContext";
import ThemeContextProviderState from "./ThemeContextProviderState";

export default class ThemeContextProvider extends Component<{}, ThemeContextProviderState> {
    
    state = {
        theme : Themes[0]
    }

    private _changeTheme = (themeName : string) => {
        const theme = Themes.find(t => t.name === themeName);

        if (!theme) {
            console.warn(`Unable to find theme with name: ${themeName}`);
            return;
        }

        this.setState({ theme });
    }

    private _computeProviderValue = () : ThemeContextValue => {
        return {
            theme : this.state.theme,
            supportedThemes : Themes,
            changeTheme : this._changeTheme
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