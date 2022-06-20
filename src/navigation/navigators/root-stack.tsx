import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Screen } from 'app/navigation/types';
import { Details } from 'app/screens/details';
import { Home } from 'app/screens/home';

const Root = createNativeStackNavigator();

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
