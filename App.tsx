import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from './pages/LoginScreen';
import LandingPageScreen from './pages/LandingPageScreen';
import LandingPagePieChart from './pages/LandingPagePieChart';
import ProjectsScreen from './pages/ProjectsScreen';
import NotificationsScreen from './pages/NotificationsScreen'; // Import the Notifications screen
import MilestonesScreen from './pages/MilestonesScreen'; // Import the Milestones screen
import ReportsScreen from './pages/ReportsScreen'; // Import the Reports screen

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="LandingPage" component={LandingPageScreen} />
        <Stack.Screen name="Projects" component={ProjectsScreen} />
        <Stack.Screen name="Notifications" component={NotificationsScreen} />
        <Stack.Screen name="Milestones" component={MilestonesScreen} />
        <Stack.Screen name="Reports" component={ReportsScreen} />
        <Stack.Screen name="LandingPagePieChart" component={LandingPagePieChart} />
        {/* Define other screens if needed */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
