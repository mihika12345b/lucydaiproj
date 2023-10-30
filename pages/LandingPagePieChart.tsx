import React from 'react'
import { StyleSheet, ScrollView, Text, View } from 'react-native'
import { PieChart } from "react-native-gifted-charts";
import dummyData from "../dummyData/PieChartData.json"

const LandingPagePieChart = () => {
  const data = JSON.parse(JSON.stringify(dummyData))
  const pieData = [
  {value: Number(data.Completed), color: '#71F447', gradientCenterColor: '#006DFF'},
  {value: Number(data.Active), color: '#F6C241', gradientCenterColor: '#3BE9DE'},
  {value: Number(data.Ended), color: '#FA4D22', gradientCenterColor: '#8F80F3'},
];

const renderDot = (color: string) => {
  return (
    <View
      style={{
        height: 10,
        width: 10,
        borderRadius: 5,
        backgroundColor: color,
        marginRight: 10,
      }}
    />
  );
};

const renderLegendComponent = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginBottom: 10,
      }}>
      <View
        style={{
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          width: 120,
        }}>
        {renderDot('#71F447')}
        <Text style={{color: 'black'}}>Completed: {data.Completed}%</Text>
        {renderDot('#F6C241')}
        <Text style={{color: 'black'}}>Active: {data.Active}%</Text>
        {renderDot('#FA4D22')}
        <Text style={{color: 'black'}}>Ended: {data.Ended}%</Text>
      </View>
    </View>
  );
};

return (
  <View
    style={{
      paddingVertical: 100,
      backgroundColor: '#D3D3D3',
      flex: 1,
    }}>
    <View
      style={{
        margin: 20,
        padding: 16,
        borderRadius: 20,
        flexDirection: 'row',
        alignItems: 'center',
      }}>
      <View style={{padding: 20, alignItems: 'center', justifyContent: 'flex-start'}}>
        <PieChart
          data={pieData}
          donut
          showGradient
          focusOnPress
          radius={90}
          innerRadius={75}
          centerLabelComponent={() => {
            return (
              <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <Text
                  style={{fontSize: 22, color: 'black', fontWeight: 'bold'}}>
                  47%
                </Text>
                <Text style={{fontSize: 14, color: 'black'}}>Excellent</Text>
              </View>
            );
          }}
        />
      </View>
      {renderLegendComponent()}
    </View>
  </View>);
}

export default LandingPagePieChart;