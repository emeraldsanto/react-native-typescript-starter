import { Theme } from "../../../Models/Types/Theme";

export interface ThemeContextProviderProps {

    initialTheme : Theme;
    supportedThemes : Theme[];
}