import type {
  NavigatorScreenParams,
  ParamListBase,
  RouteProp,
} from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { ComponentType } from 'react';
import type { RootScreenParameters } from './navigators/root-stack';

export enum Screen {
  Home = 'home-screen',
  Details = 'details-screen',
}

export enum Stack {
  Root = 'root-stack',
}

export type NavigationScreen<T extends string & keyof ScreenParameters> =
  ComponentType<{
    navigation: NativeStackNavigationProp<ScreenParameters, T>;
    route: RouteProp<ScreenParameters, T>;
  }>;

export interface ScreenParameters extends ParamListBase, RootScreenParameters {
  [Stack.Root]?: NavigatorScreenParams<RootScreenParameters>;
}
