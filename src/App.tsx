import { NavigationContainer } from '@react-navigation/native';
import { RootStackNavigator } from 'app/navigation/navigators/root-stack';
import { NativeSWRConfig } from 'swr-native';

export function App() {
  return (
    <NativeSWRConfig>
      <NavigationContainer>
        <RootStackNavigator />
      </NavigationContainer>
    </NativeSWRConfig>
  );
}
