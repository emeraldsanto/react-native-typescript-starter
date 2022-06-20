import { NavigationContainer } from '@react-navigation/native';
import { RootStackNavigator } from './navigation/navigators/root-stack';

export function App() {
  return (
    <NavigationContainer>
      <RootStackNavigator />
    </NavigationContainer>
  );
}
