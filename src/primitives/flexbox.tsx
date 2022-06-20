import type { ReactNode } from 'react';
import type { ViewProps, ViewStyle } from 'react-native';
import { View } from 'react-native';

export interface FlexProps
  extends ViewProps,
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
    > {
  children?: ReactNode;
}

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
