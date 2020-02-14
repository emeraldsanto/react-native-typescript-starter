import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { StackArguments } from './Navigation';

export interface NavigationScreenProps<TName extends keyof StackArguments> {
    navigation : StackNavigationProp<StackArguments, TName>;
    route : RouteProp<StackArguments, TName>;
}