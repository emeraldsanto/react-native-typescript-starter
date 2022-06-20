import type { RouteProp } from '@react-navigation/native';
import {
  useNavigation as useReactNavigation,
  useRoute as useReactRoute,
} from '@react-navigation/native';
import type {
  NativeStackNavigationOptions,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import type { Screen, ScreenParameters } from 'app/navigation/types';
import { useEffect } from 'react';

export function useNavigationOptions<T extends Screen>(
  navigation: NativeStackNavigationProp<ScreenParameters, T>,
  options?: NativeStackNavigationOptions,
) {
  useEffect(() => {
    if (options) {
      navigation.setOptions(options);
    }
  }, [options, navigation]);
}

export function useNavigation<T extends Screen>(
  options?: NativeStackNavigationOptions,
) {
  const navigation =
    useReactNavigation<NativeStackNavigationProp<ScreenParameters, T>>();

  useNavigationOptions(navigation, options);

  return navigation;
}

export function useRoute<T extends Screen>() {
  return useReactRoute<RouteProp<ScreenParameters, T>>();
}
