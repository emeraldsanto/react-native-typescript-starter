import React, { FC } from "react";
import Native, { TextProps, ViewProps } from "react-native";
import { Button as Btn } from '../Button/Button';
import { ButtonProps } from "../Button/ButtonProps";
import { LocalizedText as Localized } from '../LocalizedText/LocalizedText';
import { useTheme } from "../ThemeContext/ThemeContext";
import { ThemedProps } from './ThemedProps';

export namespace Themed {

    export const View : FC<ThemedProps & ViewProps> = props => {
        const { context = 'surface', style, children, ...rest } = props;
        const { theme } = useTheme();

        return (
            <Native.View style={[style, { backgroundColor : theme.colors[context] }]} {...rest}>
                {children}
            </Native.View>
        );
    }

    export const Text : FC<ThemedProps & TextProps> = props => {
        const { context = 'onSurface', style, children, ...rest } = props;
        const { theme } = useTheme();

        return (
            <Native.Text style={[style, { color : theme.colors[context] }]} {...rest}>
                {children}
            </Native.Text>
        );
    }

    export const LocalizedText : FC<ThemedProps & TextProps> = props => {
        const { context = 'onSurface', style, children, ...rest } = props;
        const { theme } = useTheme();

        return (
            <Localized style={[style, { color : theme.colors[context] }]} {...rest}>
                {children}
            </Localized>
        );
    }

    export const Button : FC<ThemedProps & ButtonProps> = props => {
        const { context = 'primary', style, children, ...rest } = props;
        const { theme } = useTheme();

        return (
            <Btn style={[style, { backgroundColor : theme.colors[context] }]} {...rest}>
                {children}
            </Btn>
        );
    }
}