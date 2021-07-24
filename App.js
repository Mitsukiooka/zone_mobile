import React from 'react';
import { StyleSheet, View } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import LoginScreen from './src/screens/LogInScreen.jsx';
import MainScreen from './src/screens/MainScreen.jsx';

export default function App() {
  const MainNavigator = createAppContainer(
    createSwitchNavigator({
      login: { screen: LoginScreen },
      main: { screen: MainScreen }
    })        
  )

  return (
    <View style={styles.container}>
      <MainNavigator />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});