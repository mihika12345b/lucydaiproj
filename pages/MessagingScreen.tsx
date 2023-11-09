// MessagingScreen.tsx
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import BackButton from '../routes/BackButton';

const MessagingScreen = () => {
  return (
    <View style={styles.container}>
      <BackButton />
      <Text style={styles.title}>Messaging</Text>
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

export default MessagingScreen;
