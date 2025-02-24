import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import {Text, View} from 'react-native';

const LibraryStack = createNativeStackNavigator();

type LibraryStackParams = {
  LibraryListScreen: undefined;
  LibraryDetailScreen: undefined;
};

export const useLibraryStackNavigation = <
  RouteName extends keyof LibraryStackParams,
>() =>
  useNavigation<NativeStackNavigationProp<LibraryStackParams, RouteName>>();

export const useLibraryStackRoute = <
  RouteName extends keyof LibraryStackParams,
>() => useRoute<RouteProp<LibraryStackParams, RouteName>>();

export const LibraryStackNavigator = () => {
  return (
    <LibraryStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <LibraryStack.Screen
        name="LibraryListScreen"
        component={LibraryListScreen}
      />
      <LibraryStack.Screen
        name="LibraryDetailScreen"
        component={LibraryDetailScreen}
      />
    </LibraryStack.Navigator>
  );
};

export default LibraryStackNavigator;

const LibraryListScreen = () => {
  return (
    <View>
      <Text>LibraryListScreen</Text>
    </View>
  );
};

const LibraryDetailScreen = () => {
  return (
    <View>
      <Text>LibraryDetailScreen</Text>
    </View>
  );
};
