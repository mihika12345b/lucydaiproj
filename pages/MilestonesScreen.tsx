// MilestonesScreen.tsx
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import BackButton from '../routes/BackButton';


const MilestonesScreen = () => {
  return (
    <View style={styles.container}>
      <BackButton />
      <Text style={styles.title}>Milestones</Text>
      {/* Add your milestones content here */}
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

export default MilestonesScreen;
