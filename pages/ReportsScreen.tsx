// ReportsScreen.tsx
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const ReportsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Reports</Text>
      {/* Add your reports content here */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default ReportsScreen;
