import { createContext, useContext } from "react";

export interface Theme {
    name : string, 
    dark : boolean, 
    colors : {
        primary : string;
        primaryVariant : string;
        secondary : string;
        secondaryVariant : string;
        background : string;
        surface : string;
        error : string;
        onPrimary : string;
        onSecondary : string;
        onBackground : string;
        onSurface : string;
        onError : string;
        [key : string] : string;
    }
}

export interface ThemeContextValue {
    theme : Theme;
    supportedThemes : Theme[];
    changeTheme : (_ : Theme) => void;
}

export const ThemeContext = createContext<ThemeContextValue>({
    theme : {
        name : "",
        dark : false,
        colors : {
            primary : "",
            primaryVariant : "",
            secondary : "",
            secondaryVariant : "",
            background : "",
            surface : "",
            error : "",
            onPrimary : "",
            onSecondary : "",
            onBackground : "",
            onSurface : "",
            onError : ""
        }
    },
    supportedThemes : [],
    changeTheme : (_ : Theme) => {}
});

export function useTheme() {
    return useContext(ThemeContext);
}