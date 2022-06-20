import type { ViewProps, ViewStyle } from 'react-native';
import { View } from 'react-native';

export type FlexProps = ViewProps &
  Pick<
    ViewStyle,
    | 'alignItems'
    | 'flex'
    | 'flexBasis'
    | 'flexDirection'
    | 'flexGrow'
    | 'flexShrink'
    | 'flexWrap'
    | 'justifyContent'
  >;

export function Flex({
  flex,
  flexBasis,
  flexDirection,
  flexGrow,
  flexShrink,
  flexWrap,
  style,
  ...rest
}: FlexProps) {
  return (
    <View
      {...rest}
      style={[
        {
          flex,
          flexBasis,
          flexDirection,
          flexGrow,
          flexShrink,
          flexWrap,
        },
        style,
      ]}
    />
  );
}

export function Row(props: Omit<FlexProps, 'flexDirection'>) {
  return <Flex {...props} flexDirection="row" />;
}

export function Column(props: Omit<FlexProps, 'flexDirection'>) {
  return <Flex {...props} flexDirection="column" />;
}
