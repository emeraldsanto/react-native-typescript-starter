import React, { Children, FunctionComponent } from "react";
import { Text, TextProps } from "react-native";
import { useLocalization } from "../LocalizedContext/LocalizationContext";

export const LocalizedText : FunctionComponent<TextProps> = props => {
    const { style, children, ...rest } = props;
    const { translate } = useLocalization();

    return (
        <Text style={style} {...rest}>
            {Children.map(children, child => {
                if (typeof child === 'string') {
                    return translate(child);
                }

                return child;
            })}
        </Text>
    );
}