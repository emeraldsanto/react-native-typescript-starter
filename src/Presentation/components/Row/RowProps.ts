import { FlexAlignType, ViewProps } from "react-native";

export default interface RowProps extends ViewProps {

    reverse? : boolean;
    alignItems : FlexAlignType;
    justifyContent : 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
}