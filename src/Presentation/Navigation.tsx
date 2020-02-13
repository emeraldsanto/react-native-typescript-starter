import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { FunctionComponent } from 'react';
import { Welcome } from './modules/Welcome/Welcome';

const Stack = createStackNavigator();

export const Navigation : FunctionComponent = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator headerMode='none'>
                <Stack.Screen name='Welcome' component={Welcome} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}