import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from '../pages/LoginScreen';
import DrawerNav from './DrawerNav'

const Stack = createStackNavigator();

const StackNav = () => {
  return (
    <Stack.Navigator initialRouteName='Login'>
      <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }}/>
      <Stack.Screen 
      name="DrawerNav" 
      component={DrawerNav} 
      options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export default StackNav;