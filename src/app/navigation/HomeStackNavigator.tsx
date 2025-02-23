import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import {createNativeStackNavigator, NativeStackNavigationProp} from '@react-navigation/native-stack';
import {Text, View} from 'react-native';

const HomeStack = createNativeStackNavigator();

type HomeStackParams = {
  HomeScreen: undefined;
  SettingsScreen: undefined;
  LoginScreen: undefined;
};

export const useHomeStackNavigation = <
  RouteName extends keyof HomeStackParams,
>() => useNavigation<NativeStackNavigationProp<HomeStackParams, RouteName>>();

export const useHomeStackRoute = <RouteName extends keyof HomeStackParams>() =>
  useRoute<RouteProp<HomeStackParams, RouteName>>();

export const HomeStackNavigator = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="HomeScreen" component={HomeScreen} />
      <HomeStack.Screen name="SettingsScreen" component={SettingsScreen} />
      <HomeStack.Screen name="LoginScreen" component={LoginScreen} />
    </HomeStack.Navigator>
  );
};

export default HomeStackNavigator;

const HomeScreen = () => {
  return (
    <View>
      <Text>HomeScreen</Text>
    </View>
  );
};

const SettingsScreen = () => {
  return (
    <View>
      <Text>SettingsScreen</Text>
    </View>
  );
};

const LoginScreen = () => {
  return (
    <View>
      <Text>LoginScreen</Text>
    </View>
  );
};
