import ThemedComponent from "../../../Architecture/ThemedComponent";
import Native, { TextProps } from "react-native";
import { default as Localized } from '../LocalizedText/LocalizedText';
import React from "react";
import { default as Btn } from '../Button/Button';
import ButtonProps from "../Button/ButtonProps";

namespace Themed {

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

export default Themed;