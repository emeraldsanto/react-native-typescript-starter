import { PureComponent } from "react";
import ColumnProps from "./ColumnProps";
import { View } from "react-native";
import React from "react";

export default class Row extends PureComponent<ColumnProps> {

    render() {
        const { reverse, alignItems, justifyContent, style, children, ...rest } = this.props;
        const direction = reverse ? 'column-reverse' : 'column'

        return (
            <View style={[{ flexDirection : direction, alignItems, justifyContent }, style]} {...rest}>
                {children}
            </View> 
        )
    }
}