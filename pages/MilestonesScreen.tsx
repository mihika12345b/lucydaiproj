import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, Modal, StyleSheet, SafeAreaView } from 'react-native';
import { LineChart, YAxis, Grid, XAxis, PieChart } from 'react-native-svg-charts';
import * as shape from 'd3-shape';

// Define your styles here (adapt from your friend's styles or define new ones)
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  // ... other styles
});

const projects = [
  { name: 'Abbot Kinney', percentCompletion: 25 },
  { name: 'Ashton Drive', percentCompletion: 50 },
  { name: 'Baxter Rowland Heights', percentCompletion: 30 },
  { name: 'Beverly Studios', 
    percentCompletion: 100 ,
    chartData: [
      { date: '9-20', completion: 24 },
      { date: '9-27', completion: 40 },
      { date: '10-4', completion: 51 },
      { date: '10-11', completion: 87 },
      { date: '10-18', completion: 100 },
    ], 
  },
  { name: 'Davey Chellie', 
    percentCompletion: 100 ,
    chartData: [
      { date: '9-20', completion: 41 },
      { date: '9-27', completion: 47 },
      { date: '10-4', completion: 65 },
      { date: '10-11', completion: 76 },
      { date: '10-18', completion: 100 },
    ], 
  },
  { name: 'Fawlx Walker', percentCompletion: 35 },
  { name: 'Grove and Parks', percentCompletion: 10 },
  { name: 'Hudson Yard Apartments', percentCompletion: 4 },
];

const CustomLineChart = ({ data }) => {
  const contentInset = { top: 20, bottom: 20 };
  const xAxisLabels = ['Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov']; // Modify as needed

  return (
    <View style={{ height: 200, flexDirection: 'row', paddingVertical: 20 }}>
      <YAxis
        data={data}
        contentInset={contentInset}
        svg={{ fontSize: 10, fill: 'grey' }}
      />
      <LineChart
        style={{ flex: 1, marginLeft: 16 }}
        data={data}
        svg={{ stroke: 'rgb(134, 65, 244)' }}
        contentInset={contentInset}
      >
        <Grid />
      </LineChart>
      <XAxis
        style={{ marginHorizontal: -10 }}
        data={data}
        formatLabel={(value, index) => xAxisLabels[index]}
        contentInset={{ left: 10, right: 10 }}
        svg={{ fontSize: 10, fill: 'grey' }}
      />
    </View>
  );
};

const MilestonesChart = ({ completionPercentage }) => {
  const data = [
    {
      key: 1,
      value: completionPercentage,
      svg: { fill: '#2c9131' },
    },
    {
      key: 2,
      value: 100 - completionPercentage,
      svg: { fill: '#dedcdc' },
    },
  ];

  return (
    <PieChart
      style={{ height: 200 }}
      data={data}
      innerRadius="50%"
      outerRadius="100%"
    />
  );
};

const MilestonesScreen = () => {
  const [searchText, setSearchText] = useState('');
  const [selectedProject, setSelectedProject] = useState(null);
  const [graphModalVisible, setGraphModalVisible] = useState(false);

  const filteredProjects = projects.filter((project) =>
    project.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Search"
        value={searchText}
        onChangeText={setSearchText}
      />

      <FlatList
        data={filteredProjects}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => setSelectedProject(item)}>
            <View>
              <Text>{item.name}</Text>
              <Text>{item.percentCompletion}% complete</Text>
            </View>
          </TouchableOpacity>
        )}
      />

      {selectedProject && (
        <Modal
          visible={graphModalVisible}
          onRequestClose={() => setGraphModalVisible(false)}
        >
          <View>
            <Text>Project Details</Text>
            <Text>{selectedProject.name}</Text>
            {/* Add more project details and charts here */}
            {/* Assuming selectedProject has a 'chartData' field for line chart */}
            <CustomLineChart data={selectedProject.chartData || []} />
            {/* Assuming selectedProject has a 'percentCompletion' field for pie chart */}
            <MilestonesChart completionPercentage={selectedProject.percentCompletion} />
          </View>
        </Modal>
      )}
    </View>
  );
};

export default MilestonesScreen;