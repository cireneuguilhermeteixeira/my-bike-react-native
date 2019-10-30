import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import Login from '~/pages/login/login';
import Home from '~/pages/home/home';
import Register from '~/pages/register/index';

const mainNavigation = createSwitchNavigator(
  {
    Login: {screen: Login},
    Home: {screen: Home},
    Register: {screen: Register},
  },
  {
    backBehavior: 'history',
  },
);

const Routes = createAppContainer(mainNavigation);

export default Routes;
