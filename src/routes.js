import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Login from '~/pages/login/login';
import Tabs from '~/pages/tabs/tabs';

const Routes = createAppContainer(createSwitchNavigator(
    { 
        Login:{screen:Login},
        Tabs: {screen: Tabs},
     }
    ));

export default Routes;
