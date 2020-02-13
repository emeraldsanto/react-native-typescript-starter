import React from "react";
import Native, { TextProps } from "react-native";
import { Button as Btn } from '../../../Presentation/components/Button/Button';
import { ButtonProps } from "../../../Presentation/components/Button/ButtonProps";
import { LocalizedText as Localized } from '../LocalizedText/LocalizedText';
import { ThemedComponent } from "../ThemedComponent/ThemedComponent";

export namespace Themed {

    export class Text extends ThemedComponent<TextProps> {

        render() {
            const { context = 'onSurface', style, children, ...rest } = this.props;
            const { colors } = this.context.theme;

            return (
                <Native.Text style={[{ color : colors[context] }, style]} {...rest}>
                    {children}
                </Native.Text>
            );
        }
    }

    export class LocalizedText extends ThemedComponent<TextProps> {

        render() {
            const { context = 'onSurface', style, children, ...rest } = this.props;
            const { colors } = this.context.theme;

            return (
                <Localized style={[{ color : colors[context] }, style]} {...rest}>
                    {children}
                </Localized>
            );
        }
    }

    export class Button extends ThemedComponent<ButtonProps> {

        render() {
            const { context = 'primary', style, children, ...rest } = this.props;
            const { colors } = this.context.theme;

            return (
                <Btn style={[{ backgroundColor : colors[context] }, style]} {...rest}>
                    {children}
                </Btn>
            );
        }
    }
}