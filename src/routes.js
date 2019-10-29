import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Login from '~/pages/login/login';
import Home from '~/pages/home/home';

const Routes = createAppContainer(createSwitchNavigator(
    { 
        Login:{screen:Login},
        Home: {screen: Home},
     }
    ));

export default Routes;
