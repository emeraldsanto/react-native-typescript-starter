import React, { Component } from "react";
import LocalizedContextProvider from "./components/LocalizedContext/LocalizedContextProvider";
import ThemeContextProvider from "./components/ThemeContext/ThemeContextProvider";
import { Navigation } from "./Navigation";

export default class App extends Component {

    render() {
        return (
            <ThemeContextProvider>
                <LocalizedContextProvider>
                    <Navigation />
                </LocalizedContextProvider>
            </ThemeContextProvider>
        );
    }
}