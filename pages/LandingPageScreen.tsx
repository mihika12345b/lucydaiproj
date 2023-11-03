// LandingPageScreen.tsx
import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from 'react-native-chart-kit';
import {Rect} from 'react-native-svg';

const LandingPageScreen = ({navigation}) => {
  const [isPanelOpen, setIsPanelOpen] = useState(false);

  const togglePanel = () => {
    setIsPanelOpen(!isPanelOpen);
  };

  const navigateTo = screenName => {
    navigation.navigate(screenName);
    setIsPanelOpen(false);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.notificationButton}
        onPress={() => navigateTo('Notifications')}>
        <Text style={styles.notificationButtonText}>Notifications</Text>
      </TouchableOpacity>

      <Text style={styles.title}>LUCYD</Text>
      <Text style={styles.pageTitle}>Welcome to the Landing Page</Text>

      <TouchableOpacity style={styles.panelToggle} onPress={togglePanel}>
        <Text style={styles.toggleText}>☰</Text>
      </TouchableOpacity>
      {isPanelOpen && (
        <View style={styles.panel}>
          <TouchableOpacity onPress={() => navigateTo('Projects')}>
            <Text style={styles.panelItem}>Projects</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigateTo('Calendar')}>
            <Text style={styles.panelItem}>Calendar</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigateTo('Milestones')}>
            <Text style={styles.panelItem}>Milestones</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigateTo('Reports')}>
            <Text style={styles.panelItem}>Reports</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigateTo('Login')}>
            <Text style={styles.panelItem}>Sign Out</Text>
          </TouchableOpacity>
        </View>
      )}
      {/* Add content for the landing page here */}
      <View>
        <Text>Productivity Chart</Text>
        <LineChart
          data={{
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            datasets: [
              {
                data: [
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                ],
              },
            ],
          }}
          width={Dimensions.get('window').width} // from react-native
          height={220}
          yAxisLabel=""
          yAxisSuffix="%"
          yAxisInterval={1} // optional, defaults to 1
          chartConfig={{
            backgroundColor: '#e26a00',
            backgroundGradientFrom: '#fb8c00',
            backgroundGradientTo: '#0F0B56',
            decimalPlaces: 2, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 16,
            },
            propsForDots: {
              r: '6',
              strokeWidth: '2',
              stroke: '#ffa726',
            },
          }}
          bezier
          style={{
            marginVertical: 8,
            borderRadius: 16,
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  notificationButton: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  notificationButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'blue',
    textDecorationLine: 'underline',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 30,
  },
  pageTitle: {
    fontSize: 20,
    marginTop: 10,
  },
  panelToggle: {
    position: 'absolute',
    top: 10,
    left: 10,
  },
  toggleText: {
    fontSize: 20,
  },
  panel: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 200,
    height: '100%',
    backgroundColor: 'white',
    padding: 20,
    zIndex: 1,
  },
  panelItem: {
    fontSize: 18,
    marginBottom: 10,
  },
});

export default LandingPageScreen;