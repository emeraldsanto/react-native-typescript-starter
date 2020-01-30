import { PureComponent } from "react";
import RowProps from "./RowProps";
import { View } from "react-native";
import React from "react";

export default class Row extends PureComponent<RowProps> {

    render() {
        const { reverse, alignItems, justifyContent, style, children, ...rest } = this.props;
        const direction = reverse ? 'row-reverse' : 'row'

        return (
            <View style={[{ flexDirection : direction, alignItems, justifyContent }, style]} {...rest}>
                {children}
            </View> 
        )
    }
}