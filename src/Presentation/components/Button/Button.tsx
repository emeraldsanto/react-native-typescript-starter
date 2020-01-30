import ButtonProps from "./ButtonProps";
import React, { PureComponent } from "react";
import { TouchableWithoutFeedback, TouchableOpacity, TouchableHighlight, TouchableNativeFeedback } from "react-native";

export default class Button extends PureComponent<ButtonProps> {

    private _computeType = (touchableEffect : string) => {
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

    render() {
        const { effect = 'none', style, children, ...rest } = this.props;
        const Touchable = this._computeType(effect);

        return (
            <Touchable style={[{ borderRadius : 6 }, style]} {...rest}>
                {children}
            </Touchable>
        );
    }
}