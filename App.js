/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { SafeAreaView, StatusBar, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigator } from './src/Navigations/stackNavigator';

import WelcomeScreen from './src/Screens/WelcomScreen';




const App = () => {
  return (
    <NavigationContainer>
      <StatusBar translucent backgroundColor='transparent'
        barStyle={"light-content"}
      />
      <StackNavigator />
    </NavigationContainer>
  );
};



export default App;
