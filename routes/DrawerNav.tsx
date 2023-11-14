import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

//import Ionicons from 'react-native-vector-icons/Ionicons';

import LandingPageScreen from '../pages/LandingPageScreen';
import ProjectsScreen from '../pages/Progress';
import MessagingScreen from '../pages/MessagingScreen';
import CalendarScreen from '../pages/CalendarScreen';
import MilestonesScreen from '../pages/MilestonesScreen';
import ReportsScreen from '../pages/ReportsScreen';
import NotificationsScreen from '../pages/NotificationsScreen';

import CustomHeader from './CustomHeader';


const Drawer = createDrawerNavigator();

function DrawerNav() {
  return (
    <Drawer.Navigator 
    screenOptions={{
      header: () => <CustomHeader />,
      drawerType: 'front',
    }}
    >
      <Drawer.Screen name="LandingPage" component={LandingPageScreen}/>
      <Drawer.Screen name="Projects" component={ProjectsScreen}/>
      <Drawer.Screen name="Messages" component={MessagingScreen}/>
      <Drawer.Screen name="Calendar" component={CalendarScreen}/>
      <Drawer.Screen name="Milestones" component={MilestonesScreen}/>
      <Drawer.Screen name="Reports" component={ReportsScreen}/>
      <Drawer.Screen name="Notifications" component={NotificationsScreen}/>
    </Drawer.Navigator>
  );
};

export default DrawerNav;