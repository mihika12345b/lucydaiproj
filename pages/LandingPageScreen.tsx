import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {
  LineChart,
  ProgressChart,
} from 'react-native-chart-kit';

const LandingPageScreen = ({ navigation }) => {
  // State
  const [isPanelOpen, setIsPanelOpen] = useState(false);

  // Event Handlers
  const togglePanel = () => {
    setIsPanelOpen(!isPanelOpen);
  };

  const navigateTo = (screenName) => {
    navigation.navigate(screenName);
    setIsPanelOpen(false);
  };

  // Chart Configuration
  const chartConfigure = {
    backgroundColor: '#e26a00',
    backgroundGradientFrom: '#fb8c00',
    backgroundGradientTo: '#0F0B56',
    decimalPlaces: 2,
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
  };

  // Rendering
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
          {['Projects', 'Calendar', 'Milestones', 'Messaging', 'Reports', 'Sign Out'].map((item, index) => (
            <TouchableOpacity key={index} onPress={() => navigateTo(item)}>
              <Text style={styles.panelItem}>{item}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}

      <View>
        <Text>Productivity Chart</Text>
        <LineChart
          data={{
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            datasets: [
              {
                data: Array.from({ length: 12 }, () => Math.random() * 100),
              },
            ],
          }}
          width={Dimensions.get('window').width}
          height={220}
          yAxisLabel=""
          yAxisSuffix="%"
          yAxisInterval={1}
          chartConfig={chartConfigure}
          bezier
          style={styles.chart}
        />

        <ProgressChart
          data={{
            labels: ['Active', 'Completed', 'Ended'],
            data: [0.4, 0.6, 0.8],
          }}
          width={Dimensions.get('window').width}
          height={220}
          strokeWidth={16}
          radius={32}
          chartConfig={chartConfigure}
          hideLegend={false}
          style={styles.chart}
        />
      </View>
    </View>
  );
};

// Styles
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
  chart: {
    marginVertical: 8,
    borderRadius: 16,
  },
});

export default LandingPageScreen;
