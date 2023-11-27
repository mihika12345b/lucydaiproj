import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

// Updated imports based on your new page names
import SignUpScreen from '../pages/SignUpScreen';
import LoginScreen from '../pages/LoginScreen';
import LandingPage from '../pages/LandingPageScreen';
import DrawerNav from './DrawerNav';
import ProgressDetails from '../pages/ProgressDetails'; // Assuming this is still relevant

const Stack = createStackNavigator();

const StackNav = () => {
  return (
    <Stack.Navigator initialRouteName="SignUpScreen">
      <Stack.Screen
        name="SignUpScreen"
        component={SignUpScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="LandingPage"
        component={LandingPage}
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
        options={{headerShown: true}}
        // Add any options you need for this screen
      />
    </Stack.Navigator>
  );
};

export default StackNav;
