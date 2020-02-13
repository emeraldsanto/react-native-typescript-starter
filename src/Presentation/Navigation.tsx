import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { PureComponent } from 'react';
import Welcome from './modules/Welcome/Welcome';

const Stack = createStackNavigator();

export class Navigation extends PureComponent {

    render() {
        return (
            <NavigationContainer>
                <Stack.Navigator headerMode='none'>
                    <Stack.Screen name='Welcome' component={Welcome} />
                </Stack.Navigator>
            </NavigationContainer>
        );
    }
}