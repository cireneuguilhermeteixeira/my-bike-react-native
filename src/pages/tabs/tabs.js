import React, {Component} from 'react';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import Perfil from '~/pages/perfil/perfil';
import Routes from '~/pages/routes/routes';
import Events from '~/pages/events/events';
import Settings from '~/pages/settings/settings';
import Emergency from '~/pages/emergency/emergency';

const Tabs = createBottomTabNavigator({
    
    Perfil: {
        screen: Perfil,
        navigationOptions:{
            tabBarLabel:'Perfil',
            tabBarIcon: ({tintColor})=>(
                <Icon name="ios-person" color={tintColor} size={24}/>
                )
        }
    },
    Routes: {
        screen: Routes,
        navigationOptions:{
            tabBarLabel:'Trajetos',
            tabBarIcon: ({tintColor})=>(
                <Icon name="ios-bicycle" color={tintColor} size={24}/>
                )
        }
    },
    Events: {
        screen: Events,
        navigationOptions:{
            tabBarLabel:'Eventos',
            tabBarIcon: ({tintColor})=>(
                <Icon name="ios-trophy" color={tintColor} size={24}/>
                )
        }
    },
  
    Settings: {
        screen: Settings,
        navigationOptions:{
            tabBarLabel:'Configurações',
            tabBarIcon: ({tintColor})=>(
                <Icon name="ios-settings" color={tintColor} size={24}/>
                )
        }
    },
    Emergency: {
        screen: Emergency,
        navigationOptions:{
            tabBarLabel:'Emergência',
            tabBarIcon: ({tintColor})=>(
                <Icon name="ios-heart-half" color={tintColor} size={24}/>
                )
        }
    },

},

{

    initialRouteName: 'Perfil',
    order:['Perfil','Routes','Events','Settings','Emergency'],
    navigationOptions:{
        tabBarVisible: true
    },
    tabBarOptions:{
        activeTintColor: '#347474',

    }

})

export default Tabs;