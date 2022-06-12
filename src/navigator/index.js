import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import 'react-native-gesture-handler';

import {HomeScreen} from './route';
import DetailScreen from '../screen/Detail';
import TrackOrderScreen from '../screen/TrackOrder';

const AppNavigation = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        headerShown: null,
      },
    },
    Detail:{
        screen:DetailScreen,
        navigationOptions:{
            headerShown:null,
        },
    },
    TrackOrder:{
        screen:TrackOrderScreen,
        navigationOptions:{
            headerShown:null,
        },
    },
  },
  {
    navigationOptions: {
      gestureEnabled: false,
      headerVisible: false,
    },
    headerMode: 'screen',
  },
);

export default createAppContainer(AppNavigation);
