import React, { FC } from "react";
import { TouchableHighlight, TouchableNativeFeedback, TouchableOpacity, TouchableWithoutFeedback } from "react-native";
import { ButtonProps } from "./ButtonProps";

export const Button : FC<ButtonProps> = props => {
    const { effect = 'none', style, children, ...rest } = props;

    const computeType = (touchableEffect : string) => {
        switch (touchableEffect) {
            case 'opacity':
                return TouchableOpacity;

            case 'highlight':
                return TouchableHighlight;

            case 'native':
                return TouchableNativeFeedback;

            case 'none':
            default:
                return TouchableWithoutFeedback;
        }
    }

    const Touchable = computeType(effect);
    return (
        <Touchable style={[{ borderRadius : 6, padding : 10 }, style]} {...rest}>
            {children}
        </Touchable>
    );
}