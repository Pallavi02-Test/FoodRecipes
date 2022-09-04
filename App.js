/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { SafeAreaView, StatusBar, View, LogBox } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigator } from './src/Navigations/stackNavigator';
import SplashScreen from './src/Components/splashScreen';
import { SafeAreaProvider } from 'react-native-safe-area-context';

LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();//Ignore all log notifications






const App = () => {
  return (
    <SafeAreaProvider>
      <StatusBar translucent backgroundColor='transparent'
        barStyle={"light-content"}
      />
      <SplashScreen></SplashScreen>
    </SafeAreaProvider>
  );
};



export default App;
