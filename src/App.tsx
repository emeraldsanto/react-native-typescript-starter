import { NavigationContainer } from '@react-navigation/native';
import { RootStackNavigator } from 'app/navigation/navigators/root-stack';

export function App() {
  return (
    <NavigationContainer>
      <RootStackNavigator />
    </NavigationContainer>
  );
}
