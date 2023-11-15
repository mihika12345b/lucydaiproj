import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Modal,
  FlatList,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import {
  VictoryPie,
  VictoryChart,
  VictoryLine,
  VictoryAxis,
} from 'victory-native';
import styles from '../styles'; // Assuming you have a styles file

const projects = [
  {name: 'Abbot Kinney', percentCompletion: 25},
  {name: 'Ashton Drive', percentCompletion: 50},
  {name: 'Baxter Rowland Heights', percentCompletion: 30},
  {
    name: 'Beverly Studios',
    percentCompletion: 100,
    chartData: [
      {date: '9-20', completion: 24},
      {date: '9-27', completion: 40},
      {date: '10-4', completion: 51},
      {date: '10-11', completion: 87},
      {date: '10-18', completion: 100},
    ],
  },
  {
    name: 'Davey Chellie',
    percentCompletion: 100,
    chartData: [
      {date: '9-20', completion: 41},
      {date: '9-27', completion: 47},
      {date: '10-4', completion: 65},
      {date: '10-11', completion: 76},
      {date: '10-18', completion: 100},
    ],
  },
  {name: 'Fawlx Walker', percentCompletion: 35},
  {name: 'Grove and Parks', percentCompletion: 10},
  {name: 'Hudson Yard Apartments', percentCompletion: 4},
];

const CustomLineChart = ({data}) => {
  if (!data) {
    return null; // or render a loading state or default chart
  }

  // Convert date to a usable format for VictoryLine
  const processedData = data.map((item, index) => ({
    x: index,
    y: item.completion,
  }));

  return (
    <VictoryChart>
      <VictoryLine
        data={processedData}
        style={{
          data: {stroke: '#8884d8'},
        }}
      />
      <VictoryAxis
      // Customize this axis to suit your data format and preferences
      />
      <VictoryAxis
        dependentAxis
        // Customize this axis to suit your data format and preferences
      />
    </VictoryChart>
  );
};

const MilestonesChart = ({completionPercentage}) => {
  const data = [
    {x: 1, y: completionPercentage},
    {x: 2, y: 100 - completionPercentage},
  ];

  return (
    <VictoryPie
      data={data}
      innerRadius={100}
      colorScale={['#4daf4a', '#ccc']}
      labelRadius={50}
      style={{labels: {fill: 'white', fontSize: 14}}}
    />
  );
};

const MilestonesScreen = () => {
  const [searchText, setSearchText] = useState('');
  const [selectedProject, setSelectedProject] = useState(null);
  const [graphModalVisible, setGraphModalVisible] = useState(false);

  const filteredProjects = projects.filter(project =>
    project.name.toLowerCase().includes(searchText.toLowerCase()),
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
        keyExtractor={item => item.name}
        renderItem={({item}) => (
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
          onRequestClose={() => setGraphModalVisible(false)}>
          <View>
            <Text>Project Details</Text>
            <Text>{selectedProject.name}</Text>
            {/* Add more project details and charts here */}
            {/* Assuming selectedProject has a 'chartData' field for line chart */}
            <CustomLineChart data={selectedProject.chartData || []} />
            {/* Assuming selectedProject has a 'percentCompletion' field for pie chart */}
            <MilestonesChart
              completionPercentage={selectedProject.percentCompletion}
            />
          </View>
        </Modal>
      )}
    </View>
  );
};

export default MilestonesScreen;
