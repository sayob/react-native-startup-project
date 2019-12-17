import React from 'react'
import { createStackNavigator, createAppContainer } from 'react-navigation';

import Home from '../screens/home';
import Login from '../screens/login';
import Menu from '../screens/menu';

const AppRoot = createStackNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            header: null,
        }
    },

    Login: {
        screen: ({ navigation }) => <Login navigation={navigation} />,
        navigationOptions: {
            header: null,
        }
    },

    Menu: {
        screen: ({ navigation }) => <Menu navigation={navigation} />,
        navigationOptions: {
            headerTitle: 'Welcome',
        }
    },
    
}, {
        initialRouteName: 'Home',
    }
);
const AppNav = createAppContainer(AppRoot);

export default AppNav;
