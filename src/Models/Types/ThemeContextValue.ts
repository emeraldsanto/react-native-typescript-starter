import Theme from './Theme';

export default interface ThemeContextValue {
    theme : Theme;
    supportedThemes : Theme[];
    changeTheme : (_ : string) => void;
}