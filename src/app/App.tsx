import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {
  DefaultTheme as NavigationDefaultTheme,
  DarkTheme as NavigationDarkTheme,
} from '@react-navigation/native';
import {
  MD3LightTheme,
  MD3DarkTheme,
  adaptNavigationTheme,
  PaperProvider,
} from 'react-native-paper';
import useThemeStore from '../shared/lib/stores/useThemeStore';
import RootNavigation from './navigation/RootNavigation';

const {LightTheme, DarkTheme} = adaptNavigationTheme({
  reactNavigationLight: NavigationDefaultTheme,
  reactNavigationDark: NavigationDarkTheme,
});

const CombinedLightTheme = {
  ...MD3LightTheme,
  ...LightTheme,
  fonts: MD3LightTheme.fonts,
};

const CombinedDarkTheme = {
  ...MD3DarkTheme,
  ...DarkTheme,
  fonts: MD3DarkTheme.fonts,
};

const App = () => {
  const isDarkTheme = useThemeStore(state => state.isDarkTheme);
  const paperTheme = isDarkTheme ? CombinedDarkTheme : CombinedLightTheme;

  return (
    <SafeAreaProvider>
      <PaperProvider theme={paperTheme}>
        <NavigationContainer theme={paperTheme}>
          <RootNavigation />
        </NavigationContainer>
      </PaperProvider>
    </SafeAreaProvider>
  );
};

export default App;
