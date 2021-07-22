import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LogInScreen from './src/screens/LogInScreen';
import MainScreen from './src/screens/MainScreen';

export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
      initialRouteName='Login'
      >
        <Stack.Screen name='Login' component={LogInScreen}/>
        <Stack.Screen name='Main' component={MainScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
