import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Welcome from './modules/Welcome/Welcome';

const stack = createStackNavigator({
    Welcome : Welcome
}, {
    defaultNavigationOptions : {
        headerShown : false
    }
});

export const Navigation = createAppContainer(stack);