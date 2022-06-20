import type {
  NativeStackNavigationOptions,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import type { Screen, ScreenParameters } from '../navigation/types';
import { useNavigation as useReactNavigation } from '@react-navigation/native';
import { useEffect } from 'react';

export function useNavigation<T extends Screen>(
  options?: NativeStackNavigationOptions,
) {
  const navigation =
    useReactNavigation<NativeStackNavigationProp<ScreenParameters, T>>();

  useEffect(() => {
    if (options) {
      navigation.setOptions(options);
    }
  }, [options, navigation]);

  return navigation;
}
