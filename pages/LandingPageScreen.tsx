import React from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, Image } from 'react-native';
import { LineChart, ProgressChart } from 'react-native-chart-kit';
import BackButton from '../routes/BackButton';

const screenWidth = Dimensions.get('window').width;

const profileIcon = require('../assets/icons/profile.png');
const calendarIcon = require('../assets/icons/calendar.png');
const messageIcon = require('../assets/icons/message.png');

const LandingPageScreen = ( {navigation} ) => {
  return (
    <View style={styles.container}>
      <BackButton />
      <Text style={styles.headerText}>Reports</Text>
      <View style={styles.lineChartContainer}>
        <Text style={styles.chartTitleLeft}>Productivity</Text>
        <LineChart
          data={{
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
            datasets: [{ data: [20, 45, 28, 80, 99, 43, 56, 77] }],
          }}
          width={screenWidth - 60} // subtracting margin from the total width
          height={220}
          chartConfig={{
            backgroundGradientFrom: '#ffffff',
            backgroundGradientTo: '#ffffff',
            decimalPlaces: 2,
            color: (opacity = 1) => `rgba(255, 165, 0, ${opacity})`, // orange color for the line chart
            labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            style: {
              borderRadius: 16,
            },
            propsForDots: {
              r: '3',
              strokeWidth: '2',
              stroke: '#ffa726',
            },
          }}
          bezier
          style={styles.chart}
        />
      </View>
      <View style={styles.progressChartContainer}>
        <Text style={styles.chartTitleLeft}>Task Progress</Text>
        <ProgressChart
          data={{
            labels: ['Active', 'Completed', 'Ended'], // optional
            data: [0.4, 0.6, 0.2],
            colors: ["rgba(255, 0, 0,0.5)", "rgba(238, 130, 238,0.6)", "rgba(106, 90, 205,0.5)",],
          }}
          width={screenWidth - 60} // subtracting margin from the total width
          height={200}
          strokeWidth={13}
          radius={32}
          chartConfig={{
            backgroundGradientFrom: '#f7f7f7',
            backgroundGradientTo: '#f7f7f7',
            decimalPlaces: 2,
            color: (opacity = 1) => `rgba(255, 165, 0, ${opacity})`, // white color for labels to ensure visibility
            labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`, // black color for labels
            propsForLabels: {
              fontSize: 8
            },
            style: {
              borderRadius: 16,
            },
          }}
          hideLegend={false}
          style={styles.chart}
        />
      </View>
      <View style={styles.iconBar}>
        <TouchableOpacity onPress={() => { navigation.navigate('DrawerNav', { screen: 'LandingPage' }); }}>
          <Image source={profileIcon} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { navigation.navigate('DrawerNav', { screen: 'Calendar' }); }}>
          <Image source={calendarIcon} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { navigation.navigate('DrawerNav', { screen: 'Messages' }); }}>
          <Image source={messageIcon} style={styles.icon} />
        </TouchableOpacity>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  headerText: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 20,
    textAlign: 'center',
  },
  lineChartContainer: {
    backgroundColor: '#ffffff',
    padding: 16,
    borderRadius: 16,
    marginHorizontal: 20,
    marginBottom: 20,
  },
  progressChartContainer: {
    padding: 16,
    borderRadius: 16,
    marginHorizontal: 20,
    marginBottom: 10,
  },
  chartTitleLeft: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'left',
  },
  chart: {
    marginVertical: 8,
    borderRadius: 16,
  },
  iconBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 50,
  },
  icon: {
    width: 30,
    height: 30,
  },
});

export default LandingPageScreen;
