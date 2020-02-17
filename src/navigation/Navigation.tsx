import { NavigationContainer } from '@react-navigation/native';
import { Theme as NavigationTheme } from '@react-navigation/native/lib/typescript/src/types';
import { createStackNavigator } from '@react-navigation/stack';
import React, { FC, ReactNode } from 'react';
import { useTheme } from '../components/ThemeContext/ThemeContext';
import { ModalScreen } from '../screens/modal/Modal';
import { WelcomeScreen } from '../screens/welcome/Welcome';
import { modalStyleInterpolator } from './Interpolators';

export type StackArguments = {
    Welcome : {},
    Modal : {
        builder : () => ReactNode,
        onClose? : () => void;
    }
}

const Stack = createStackNavigator<StackArguments>();

export const Navigation : FC = () => {  
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
            <Stack.Navigator screenOptions={{ title : "Starter", cardOverlayEnabled : true, cardStyle : { backgroundColor : 'transparent' }, cardStyleInterpolator : modalStyleInterpolator }} mode='modal'>
                <Stack.Screen name='Welcome' component={WelcomeScreen} />
                <Stack.Screen name="Modal" component={ModalScreen} options={{ headerShown : false }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}