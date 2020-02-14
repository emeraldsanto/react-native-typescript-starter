import { TouchableWithoutFeedbackProps } from "react-native";

export interface ButtonProps extends TouchableWithoutFeedbackProps {

    effect? : 'none' | 'opacity' | 'highlight' | 'native';
}