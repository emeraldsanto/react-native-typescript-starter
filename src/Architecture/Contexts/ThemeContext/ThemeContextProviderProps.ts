import Theme from "../../../Models/Types/Theme";

export default interface ThemeContextProviderProps {

    initialTheme : Theme;
    supportedThemes : Theme[];
}