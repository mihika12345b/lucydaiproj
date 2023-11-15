import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import LoginScreen from '../pages/LoginScreen';
import DrawerNav from './DrawerNav';
import ProgressDetails from '../pages/ProgressDetails'; // Import your ProgressDetails screen component

const Stack = createStackNavigator();

const StackNav = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="DrawerNav"
        component={DrawerNav}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ProgressDetails"
        component={ProgressDetails}
        // Add any options you need for this screen
      />
    </Stack.Navigator>
  );
};

export default StackNav;
