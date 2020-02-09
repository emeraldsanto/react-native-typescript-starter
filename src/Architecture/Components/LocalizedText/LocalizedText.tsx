import React, { Component, ContextType, Children } from "react";
import { Text, TextProps } from "react-native";
import LocalizedContext from '../../../Architecture/Contexts/LocalizedContext/LocalizedContext';

export default class LocalizedText extends Component<TextProps> {
    static contextType = LocalizedContext;
    context! : ContextType<typeof LocalizedContext>;

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