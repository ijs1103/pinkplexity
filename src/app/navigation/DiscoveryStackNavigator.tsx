import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import {createNativeStackNavigator, NativeStackNavigationProp} from '@react-navigation/native-stack';
import {Text, View} from 'react-native';

const DiscoveryStack = createNativeStackNavigator();

type DiscoveryStackParams = {
  DiscoveryListScreen: undefined;
  DiscoveryDetailScreen: undefined;
};

export const useDiscoveryStackNavigation = <
  RouteName extends keyof DiscoveryStackParams,
>() => useNavigation<NativeStackNavigationProp<DiscoveryStackParams, RouteName>>();

export const useDiscoveryStackRoute = <RouteName extends keyof DiscoveryStackParams>() =>
  useRoute<RouteProp<DiscoveryStackParams, RouteName>>();

export const DiscoveryStackNavigator = () => {
  return (
    <DiscoveryStack.Navigator>
      <DiscoveryStack.Screen name="DiscoveryListScreen" component={DiscoveryListScreen} />
      <DiscoveryStack.Screen name="DiscoveryDetailScreen" component={DiscoveryDetailScreen} />
    </DiscoveryStack.Navigator>
  );
};

export default DiscoveryStackNavigator;

const DiscoveryListScreen = () => {
  return (
    <View>
      <Text>DiscoveryListScreen</Text>
    </View>
  );
};

const DiscoveryDetailScreen = () => {
  return (
    <View>
      <Text>DiscoveryDetailScreen</Text>
    </View>
  );
};
