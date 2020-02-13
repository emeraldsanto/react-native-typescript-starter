import { Theme } from "./ThemeContext";

export interface ThemeContextProviderProps {

    initialTheme : Theme;
    supportedThemes : Theme[];
}