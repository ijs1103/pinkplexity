import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  getFocusedRouteNameFromRoute,
} from '@react-navigation/native';
import HomeStackNavigator from './HomeStackNavigator';
import DiscoveryStackNavigator from './DiscoveryStackNavigator';
import SpaceStackNavigator from './SpaceStackNavigator';
import LibraryStackNavigator from './LibraryStackNavigator';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

const hideTabBarScreens = ['LoginScreen'];

const RootNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarActiveTintColor: '#f368e0',
        tabBarInactiveTintColor: '#c8d6e5',
        tabBarStyle: (route => {
          const routeName = getFocusedRouteNameFromRoute(route) ?? '';
          const baseStyle = {
            backgroundColor: 'transparent',
            elevation: 0, // Android
            shadowOpacity: 0, // iOS
            borderTopWidth: 0,
            position: 'absolute' as const,
            bottom: 0,
            left: 0,
            right: 0,
          };
          if (hideTabBarScreens.includes(routeName)) {
            return {display: 'none', ...baseStyle};
          }
          return {display: 'flex', ...baseStyle};
        })(route),
      })}>
      <Tab.Screen
        name="Home"
        component={HomeStackNavigator}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="magnify" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Discovery"
        component={DiscoveryStackNavigator}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="web" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Space"
        component={SpaceStackNavigator}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="bookmark-multiple-outline"
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Library"
        component={LibraryStackNavigator}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="bookshelf"
              size={size}
              color={color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default RootNavigation;
