// NotificationsScreen.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


const NotificationsScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.notification}>
        <Text style={styles.notificationTitle}>Begin Task</Text>
        <Text style={styles.notificationSubtitle}>G-101: Stake Lot</Text>
        <Text style={styles.notificationTimestamp}>12:34 pm</Text>
      </View>

      <View style={styles.notification}>
        <Text style={styles.notificationTitle}>Re-work Task</Text>
        <Text style={styles.notificationSubtitle}>G-102: Install Const Entrance</Text>
        <Text style={styles.notificationTimestamp}>12:34 pm</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  notification: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 16,
    marginBottom: 16,
  },
  notificationTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  notificationSubtitle: {
    fontSize: 16,
    marginTop: 8,
  },
  notificationTimestamp: {
    fontSize: 14,
    marginTop: 8,
    color: 'gray',
  },
});

export default NotificationsScreen;
