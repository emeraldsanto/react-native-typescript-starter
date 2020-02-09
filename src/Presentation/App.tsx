import React, { Component } from "react";
import LocalizedContextProvider from "../Architecture/Contexts/LocalizedContext/LocalizedContextProvider";
import ThemeContextProvider from "../Architecture/Contexts/ThemeContext/ThemeContextProvider";
import Navigation from "./Navigation";

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