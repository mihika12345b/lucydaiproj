import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './pages/LoginScreen';
import LandingPageScreen from './pages/LandingPageScreen';
import ProjectsScreen from './pages/ProjectsScreen';
import NotificationsScreen from './pages/NotificationsScreen';
import MilestonesScreen from './pages/MilestonesScreen';
import ReportsScreen from './pages/ReportsScreen';
import CalendarScreen from './pages/CalendarScreen';
import MessagingScreen from './pages/MessagingScreen'; // Import the Messaging screen

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="LandingPage" component={LandingPageScreen} />
        <Stack.Screen name="Projects" component={ProjectsScreen} />
        <Stack.Screen name="Calendar" component={CalendarScreen} />
        <Stack.Screen name="Milestones" component={MilestonesScreen} />
        <Stack.Screen name="Reports" component={ReportsScreen} />
        <Stack.Screen name="Notifications" component={NotificationsScreen} />
        <Stack.Screen name="Messaging" component={MessagingScreen} />
        {/* Define other screens if needed */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;