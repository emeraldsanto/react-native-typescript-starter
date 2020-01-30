import ThemedComponent from "../../../Architecture/ThemedComponent";
import Native, { TextProps } from "react-native";
import { default as Localized } from '../LocalizedText/LocalizedText';
import React from "react";

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
}

export default Themed;