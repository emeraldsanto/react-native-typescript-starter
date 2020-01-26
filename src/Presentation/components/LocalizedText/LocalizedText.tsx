import React, { Component, ContextType } from "react";
import { Text, TextProps } from "react-native";
import LocalizedContext from '../LocalizedContext/LocalizedContext';

export default class LocalizedText extends Component<TextProps> {
    static contextType = LocalizedContext;
    context! : ContextType<typeof LocalizedContext>;

    render() {
        const { style, children, ...rest } = this.props;
        return (
            <Text style={style} {...rest}>
                {this.context.translate(children as string)}
            </Text>
        );
    }
}