import { ViewProps, FlexAlignType } from "react-native";

export default interface ColumnProps extends ViewProps {

    reverse? : boolean;
    alignItems? : FlexAlignType;
    justifyContent? : 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
}