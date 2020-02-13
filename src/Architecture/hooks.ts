import { useContext } from "react";
import { LocalizationContext } from "./Contexts/LocalizedContext/LocalizationContext";
import { ThemeContext } from "./Contexts/ThemeContext/ThemeContext";

export function useLocalization() {
    return useContext(LocalizationContext);
}

export function useTheme() {
    return useContext(ThemeContext);
}