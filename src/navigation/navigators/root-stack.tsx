import type { ParamListBase } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Screen } from 'app/navigation/types';
import { Details } from 'app/screens/details';
import { Home } from 'app/screens/home';

export interface RootScreenParameters extends ParamListBase {
  [Screen.Home]: undefined;
  [Screen.Details]: { id: number };
}

const Root = createNativeStackNavigator<RootScreenParameters>();

export function RootStackNavigator() {
  return (
    <Root.Navigator>
      <Root.Screen component={Home} name={Screen.Home} />

      <Root.Group screenOptions={{ presentation: 'modal' }}>
        <Root.Screen component={Details} name={Screen.Details} />
      </Root.Group>
    </Root.Navigator>
  );
}
