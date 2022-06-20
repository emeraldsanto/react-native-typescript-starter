import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Details } from '../../screens/details';
import { Home } from '../../screens/home';
import { Screen } from '../types';

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
