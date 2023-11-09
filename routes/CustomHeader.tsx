import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons'; // I don't know how to install this

const CustomHeader = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.headerContainer}>
      {/* Left Button: Toggles the Drawer */}
      <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
        {/* <Icon name="menu" size={30} /> */}
        <Text style={{fontSize: 25, fontWeight: 'bold',}}>☰</Text>
      </TouchableOpacity>

      {/* Middle Title: "LUCYD" */}
      <Text style={styles.headerTitle}>L U C Y D</Text>

      {/* Right Button: Placeholder for future functionality */}
      <TouchableOpacity onPress={() => {/* Placeholder for future functionality */}}>
        <Icon name="ellipsis-vertical" size={30} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    height: 100,
    paddingTop: 50, // Increase the top padding to push content down
    paddingBottom: 10, // Adjust bottom padding as needed
    backgroundColor: 'white', // Set the background color to white
    borderBottomWidth: 1, // Add border to the bottom
    borderBottomColor: '#dedede', // Set border color, change as needed
    shadowColor: '#000', // Set shadow color
    shadowOffset: {
      width: 0,
      height: 2, // Shadow will be placed below the header
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    // You can add more styling to position or decorate your header
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    // You can add more styling to your title
  },
});

export default CustomHeader;
