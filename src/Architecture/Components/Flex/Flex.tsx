import { PureComponent } from "react";
import FlexProps from "./FlexProps";
import React from "react";
import { View } from "react-native";

export class Row extends PureComponent<FlexProps> {

    render() {
        const { reverse, alignItems, justifyContent, style, children, ...rest } = this.props;
        const direction = reverse ? 'row-reverse' : 'row'

        return (
            <View style={[{ flexDirection : direction, alignItems, justifyContent }, style]} {...rest}>
                {children}
            </View> 
        );
    }
}

export class Column extends PureComponent<FlexProps> {
    
    render() {
        const { reverse, alignItems, justifyContent, style, children, ...rest } = this.props;
        const direction = reverse ? 'column-reverse' : 'column'

        return (
            <View style={[{ flexDirection : direction, alignItems, justifyContent }, style]} {...rest}>
                {children}
            </View> 
        );
    }
}