import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Login from '~/pages/login/login';
import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  Platform,
  TouchableOpacity,
} from 'react-native';

import Tabs from '~/pages/tabs/tabs';
import Register from '~/pages/register/index';
import Icon from 'react-native-vector-icons/AntDesign';


const mainNavigation = createStackNavigator(
  {
    Login: {
      screen: Login,
      navigationOptions: () => ({
        headerShown: false,

      })


    },

    Tabs: {
      screen: Tabs,
      navigationOptions: () => ({
        headerShown: false,

      })
    },
    Register: {
      screen: Register,
      navigationOptions: ({ navigation }) => ({
        headerBackTitle: null,
        headerStyle: { backgroundColor: '#35495e' },
        headerLeft: (
          <TouchableOpacity
            hitSlop={{ top: 20, bottom: 20, left: 50, right: 50 }}
            onPress={() => navigation.goBack()}>
            <Icon
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



export default createAppContainer(mainNavigation);