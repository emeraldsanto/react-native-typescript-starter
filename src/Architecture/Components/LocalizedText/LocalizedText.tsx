import React, { Children, Component, ContextType } from "react";
import { Text, TextProps } from "react-native";
import { LocalizationContext } from '../../Contexts/LocalizedContext/LocalizationContext';

export class LocalizedText extends Component<TextProps> {
    static contextType = LocalizationContext;
    context! : ContextType<typeof LocalizationContext>;

    render() {
        const { style, children, ...rest } = this.props;
        return (
            <Text style={style} {...rest}>
                {Children.map(children, child => {
                    if (typeof child === 'string') {
                        return this.context.translate(child);
                    }

                    return child;
                })}
            </Text>
        );
    }
}