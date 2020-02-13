import React, { PureComponent } from "react";
import { View } from "react-native";
import { FlexProps } from "./FlexProps";

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