import type { ParamListBase } from '@react-navigation/native';

export enum Screen {
  Home = 'home-screen',
  Details = 'details-screen',
}

export enum Stack {
  Root = 'root-stack',
}

export interface ScreenParameters extends ParamListBase {
  [Stack.Root]: undefined;
  [Screen.Home]: undefined;
  [Screen.Details]: { id: string };
}
