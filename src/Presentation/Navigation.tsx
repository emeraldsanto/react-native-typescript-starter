import { NavigationContainer } from '@react-navigation/native';
import { Theme as NavigationTheme } from '@react-navigation/native/lib/typescript/src/types';
import { createStackNavigator } from '@react-navigation/stack';
import React, { FunctionComponent } from 'react';
import { useTheme } from '../Architecture/Contexts/ThemeContext/ThemeContext';
import { Welcome } from './modules/Welcome/Welcome';

const Stack = createStackNavigator();

export const Navigation : FunctionComponent = () => {  
    const { theme } = useTheme();

    const getNavigationTheme = () : NavigationTheme => {
        return {
            dark : theme.dark,
            colors : {
                primary : theme.colors.primary,
                background : theme.colors.background,
                card : theme.colors.surface,
                border : theme.colors.onBackground,
                text : theme.colors.onSurface
            }
        }
    }

    return (
        <NavigationContainer theme={getNavigationTheme()}>
            <Stack.Navigator screenOptions={{ title : "Starter" }}>
                <Stack.Screen name='Welcome' component={Welcome} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}