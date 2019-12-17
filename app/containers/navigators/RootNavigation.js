import React from 'react';
import { Platform, View } from 'react-native'
import { createStackNavigator, createAppContainer } from 'react-navigation';
import * as colors from '../../assets/styles/colors';

import Home from '../screens/home';
import Login from '../screens/login';
import Menu from '../screens/menu';
import List from '../screens/list';

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
            title: 'Dashboard',
            headerLeft: null
        }
    },

    List: {
        screen: ({ navigation }) => <List navigation={navigation} />,
        navigationOptions: {
            title: 'List',
            headerRight: <View />
        }
    },
    
}, {
        initialRouteName: 'Home',
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: colors.primaryColor,
                color: colors.white,
                elevation: 0,
                shadowOpacity: 0,
                shadowColor: 'transparent',
                shadowRadius: 0,
                borderBottomWidth: 0,
                height: 70
            },
            headerTitleStyle: {
                textAlign: 'center',
                color: colors.white,
                padding: 10,
                fontSize: 22,
                alignSelf: 'center',
                flex: 1,
                marginTop: Platform.OS === 'ios' ? 5 : 10,
            },
            headerTintColor: colors.white
        },
        headerTransitionPreset: 'center'
    }
);
const AppNav = createAppContainer(AppRoot);

export default AppNav;
