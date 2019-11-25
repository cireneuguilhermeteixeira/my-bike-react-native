import React, { Component } from 'react';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon1 from 'react-native-vector-icons/AntDesign';

import Perfil from '~/pages/perfil/perfil';
import Routes from '~/pages/routes/routes';
import Events from '~/pages/events/events';
import Settings from '~/pages/settings/settings';
import Emergency from '~/pages/emergency/emergency';
import Friends from '~/pages/Friends';
import { createStackNavigator } from 'react-navigation-stack';
import {
    TouchableOpacity,
} from 'react-native';


const PerfilNavigation = createStackNavigator(
    {
        Perfil: {
            screen: Perfil,
            navigationOptions: () => ({
                headerShown: false,

            })

        },

        Friends: {
            screen: Friends,
            navigationOptions: ({ navigation }) => ({
                headerBackTitle: null,
                title: 'Amigos',
                headerTintColor: '#fff',
                headerStyle: { backgroundColor: '#35495e' },
                headerLeft: (
                    <TouchableOpacity
                        hitSlop={{ top: 20, bottom: 20, left: 50, right: 50 }}
                        onPress={() => navigation.goBack()}>
                        <Icon1
                            style={{ marginLeft: 15 }}
                            name="left"
                            size={25}
                            color="white"
                        />
                    </TouchableOpacity>
                ),
            })


        },
    },
    {
        backBehavior: 'history',
    },
);

const Tabs = createBottomTabNavigator({


    Friends: {
        screen: Friends,
        navigationOptions: {
            tabBarLabel: 'Amigos',
            tabBarIcon: ({ tintColor }) => (
                <Icon name="ios-people" color={tintColor} size={24} />
            )
        }
    },
    Events: {
        screen: Events,
        navigationOptions: {
            tabBarLabel: 'Eventos',
            tabBarIcon: ({ tintColor }) => (
                <Icon name="ios-trophy" color={tintColor} size={24} />
            )
        }
    },

    Settings: {
        screen: Settings,
        navigationOptions: {
            tabBarLabel: 'Configurações',
            tabBarIcon: ({ tintColor }) => (
                <Icon name="ios-settings" color={tintColor} size={24} />
            )
        }
    },
    Emergency: {
        screen: Emergency,
        navigationOptions: {
            tabBarLabel: 'Emergência',
            tabBarIcon: ({ tintColor }) => (
                <Icon name="ios-heart-half" color={tintColor} size={24} />
            )
        }
    },
    Perfil: {
        screen: PerfilNavigation,
        navigationOptions: {
            tabBarLabel: 'Perfil',
            tabBarIcon: ({ tintColor }) => (
                <Icon name="ios-person" color={tintColor} size={24} />
            )
        }
    },

},

    {

        initialRouteName: 'Perfil',
        order: ['Perfil', 'Events', 'Settings', 'Emergency', 'Friends',],
        navigationOptions: {
            tabBarVisible: true
        },
        tabBarOptions: {
            activeTintColor: '#347474',

        }

    })

export default Tabs;