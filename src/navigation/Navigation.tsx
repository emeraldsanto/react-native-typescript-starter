import { useTheme } from '@components/ThemeContext/ThemeContext';
import { NavigationContainer } from '@react-navigation/native';
import { Theme as NavigationTheme } from '@react-navigation/native/lib/typescript/src/types';
import { createStackNavigator } from '@react-navigation/stack';
import { ModalScreen } from '@screens/modal/ModalScreen';
import { WelcomeScreen } from '@screens/welcome/WelcomeScreen';
import { Route } from 'models/constants/Route';
import React, { FC, useMemo } from 'react';
import { MODAL_SCREEN_OPTIONS, ROOT_STACK_OPTIONS, StackArguments } from './NavigationTypings';

const Stack = createStackNavigator<StackArguments>();

export const Navigation : FC = () => {  
    const { theme } = useTheme();

    const navigationTheme: NavigationTheme = useMemo(() => {
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
    }, [theme]);

    return (
        <NavigationContainer theme={navigationTheme}>
            <Stack.Navigator mode="modal" screenOptions={ROOT_STACK_OPTIONS}>
                <Stack.Screen name={Route.WELCOME} component={WelcomeScreen} />
                <Stack.Screen name={Route.MODAL} component={ModalScreen} options={MODAL_SCREEN_OPTIONS} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}