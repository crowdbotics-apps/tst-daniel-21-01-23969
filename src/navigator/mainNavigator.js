import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Settings20195078Navigator from '../features/Settings20195078/navigator';
import SignIn122195076Navigator from '../features/SignIn122195076/navigator';
import SignIn223195075Navigator from '../features/SignIn223195075/navigator';
import SignIn425195073Navigator from '../features/SignIn425195073/navigator';
import SignIn526195072Navigator from '../features/SignIn526195072/navigator';
import SignUp127195071Navigator from '../features/SignUp127195071/navigator';
import SignUp228195070Navigator from '../features/SignUp228195070/navigator';
import UserProfile31195067Navigator from '../features/UserProfile31195067/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Settings20195078: { screen: Settings20195078Navigator },
SignIn122195076: { screen: SignIn122195076Navigator },
SignIn223195075: { screen: SignIn223195075Navigator },
SignIn425195073: { screen: SignIn425195073Navigator },
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
