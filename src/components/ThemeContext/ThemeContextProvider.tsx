import React, { FC, useState } from "react";
import { Theme, ThemeContext } from "./ThemeContext";
import { ThemeContextProviderProps } from "./ThemeContextProviderProps";

export const ThemeContextProvider : FC<ThemeContextProviderProps> = props => {
    const { initialTheme, supportedThemes, children } = props;
    const [theme, setTheme] = useState(initialTheme);

    const changeTheme = (newTheme : Theme) => {
        setTheme(newTheme);
    }

    return (
        <ThemeContext.Provider value={{ theme, supportedThemes, changeTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}