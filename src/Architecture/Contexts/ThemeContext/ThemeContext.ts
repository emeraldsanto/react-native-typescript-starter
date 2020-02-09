import { createContext } from "react";
import ThemeContextValue from "../../../Models/Types/ThemeContextValue";

const ThemeContext = createContext<ThemeContextValue>({
    theme : {
        "name" : "",
        dark : false,
        "colors" : {
            "primary" : "",
            "primaryVariant" : "",
            "secondary" : "",
            "secondaryVariant" : "",
            "background" : "",
            "surface" : "",
            "error" : "",
            "onPrimary" : "",
            "onSecondary" : "",
            "onBackground" : "",
            "onSurface" : "",
            "onError" : ""
        }
    },
    supportedThemes : [],
    changeTheme : (_ : string) => {}
});

export default ThemeContext;