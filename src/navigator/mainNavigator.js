import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import SignIn526195072Navigator from '../features/SignIn526195072/navigator';
import SignUp127195071Navigator from '../features/SignUp127195071/navigator';
import SignUp228195070Navigator from '../features/SignUp228195070/navigator';
import UserProfile31195067Navigator from '../features/UserProfile31195067/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
SignIn526195072: { screen: SignIn526195072Navigator },
SignUp127195071: { screen: SignUp127195071Navigator },
SignUp228195070: { screen: SignUp228195070Navigator },
UserProfile31195067: { screen: UserProfile31195067Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
