import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  getFocusedRouteNameFromRoute,
  NavigationContainer,
} from '@react-navigation/native';
import HomeStackNavigator from './HomeStackNavigator';
import DiscoveryStackNavigator from './DiscoveryStackNavigator';
import SpaceStackNavigator from './SpaceStackNavigator';
import LibraryStackNavigator from './LibraryStackNavigator';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const Tab = createBottomTabNavigator();

const hideTabBarScreens = ['LoginScreen'];

const RootNavigation = () => {
  return (
    <Tab.Navigator
    screenOptions={({route}) => ({
      headerShown: false,
      tabBarStyle: (route => {
        const routeName = getFocusedRouteNameFromRoute(route) ?? '';
        if (hideTabBarScreens.includes(routeName)) {
          return {display: 'none'};
        }
        return {display: 'flex'};
      })(route),
    })}>
    <Tab.Screen name="Home" component={HomeStackNavigator} />
    <Tab.Screen name="Discovery" component={DiscoveryStackNavigator} />
    <Tab.Screen name="Space" component={SpaceStackNavigator} />
    <Tab.Screen name="Library" component={LibraryStackNavigator} />
  </Tab.Navigator>
  );
};

export default RootNavigation;
