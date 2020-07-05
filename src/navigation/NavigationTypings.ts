import { RouteProp } from '@react-navigation/native';
import { StackNavigationOptions, StackNavigationProp } from '@react-navigation/stack';
import { Route } from 'models/constants/Route';
import { FC, ReactNode } from 'react';
import { modalStyleInterpolator } from './Interpolators';

/**
 * Determines which params can be passed to which screens
 */
export type StackArguments = {
    [Route.WELCOME]: {},
    [Route.MODAL]: {
        builder: () => ReactNode,
        onClose?: () => void;
    }
}

/**
 * Navigation options for the root stack
 */
export const ROOT_STACK_OPTIONS: StackNavigationOptions = {
    title: "Starter",
    cardOverlayEnabled: true,
    cardStyleInterpolator: modalStyleInterpolator,
    cardStyle: { backgroundColor: 'transparent' }
}

/**
 * Navigation options for the modal screen
 */
export const MODAL_SCREEN_OPTIONS: StackNavigationOptions = {
    headerShown: false
}

/**
 * Abstraction over the different navigation props
 */
export interface NavigationScreenProps<TName extends keyof StackArguments> {
    navigation: StackNavigationProp<StackArguments, TName>;
    route: RouteProp<StackArguments, TName>;
}

/**
 * Abstraction over React.FC which only allows known routes
 */
export type NavigationScreen<TName extends keyof StackArguments> = FC<NavigationScreenProps<TName>>;