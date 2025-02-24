import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import {Text, View} from 'react-native';

const SpaceStack = createNativeStackNavigator();

type SpaceStackParams = {
  BookMarkListScreen: undefined;
  BookMarkDetailScreen: undefined;
};

export const useSpaceStackNavigation = <
  RouteName extends keyof SpaceStackParams,
>() => useNavigation<NativeStackNavigationProp<SpaceStackParams, RouteName>>();

export const useSpaceStackRoute = <
  RouteName extends keyof SpaceStackParams,
>() => useRoute<RouteProp<SpaceStackParams, RouteName>>();

export const SpaceStackNavigator = () => {
  return (
    <SpaceStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <SpaceStack.Screen
        name="BookMarkListScreen"
        component={BookMarkListScreen}
      />
      <SpaceStack.Screen
        name="BookMarkDetailScreen"
        component={BookMarkDetailScreen}
      />
    </SpaceStack.Navigator>
  );
};

export default SpaceStackNavigator;

const BookMarkListScreen = () => {
  return (
    <View>
      <Text>BookMarkListScreen</Text>
    </View>
  );
};

const BookMarkDetailScreen = () => {
  return (
    <View>
      <Text>BookMarkDetailScreen</Text>
    </View>
  );
};
