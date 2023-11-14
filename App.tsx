import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';

import StackNav from './routes/StackNav';


const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <StackNav/>
    </NavigationContainer>
  );
};

export default App;
