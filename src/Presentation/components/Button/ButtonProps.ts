import { TouchableWithoutFeedbackProps } from "react-native";

export default interface ButtonProps extends TouchableWithoutFeedbackProps {

    effect? : 'none' | 'opacity' | 'highlight' | 'native';
}