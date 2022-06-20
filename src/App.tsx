import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { RootStackNavigator } from './navigation/navigators/root-stack';

export function App() {
  return (
    <NavigationContainer>
      <RootStackNavigator />
    </NavigationContainer>
  );
}
