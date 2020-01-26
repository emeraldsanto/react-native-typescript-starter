import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Welcome from './modules/Welcome/Welcome';

const stack = createStackNavigator({
    Welcome : Welcome
}, {
    defaultNavigationOptions : {
        title : "Starter"
    }
});

export const Navigation = createAppContainer(stack);