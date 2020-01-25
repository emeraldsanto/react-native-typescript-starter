import React, { Component, ContextType } from "react";
import { Text } from "react-native";
import LocalizedContext from '../LocalizedContext/LocalizedContext';
import LocalizedTextProps from "./LocalizedTextProps";

export default class LocalizedText extends Component<LocalizedTextProps> {
    static contextType = LocalizedContext;
    context! : ContextType<typeof LocalizedContext>;

    render() {
        const { style, children } = this.props;
        return (
            <Text style={style}>
                {this.context.translate(children as string)}
            </Text>
        );
    }
}