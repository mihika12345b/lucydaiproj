// MilestonesScreen.tsx
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Modal, TextInput } from 'react-native';

// Define your styles here
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  // Add additional styles as needed
});

const MilestonesScreen = () => {
  const [searchText, setSearchText] = useState('');
  const [selectedProject, setSelectedProject] = useState(null);
  const [graphModalVisible, setGraphModalVisible] = useState(false);

  // Sample projects data - replace with your actual data
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

  // Filter projects based on search text
  const displayedProjects = projects.filter((project) =>
    project.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Milestones</Text>
      
      {/* Search bar */}
      <View>
        <TextInput
          placeholder="Search"
          value={searchText}
          onChangeText={setSearchText}
        />
      </View>

      {/* Projects List */}
      <FlatList
        data={displayedProjects}
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

      {/* Project Details Modal */}
      {selectedProject && (
        <Modal
          visible={graphModalVisible}
          onRequestClose={() => setGraphModalVisible(false)}
        >
          <View>
            <Text>Project Details</Text>
            <Text>{selectedProject.name}</Text>
            {/* Add more project details and charts here */}
            <TouchableOpacity onPress={() => setGraphModalVisible(false)}>
              <Text>Close</Text>
            </TouchableOpacity>
          </View>
        </Modal>
      )}
    </View>
  );
};

export default MilestonesScreen;
