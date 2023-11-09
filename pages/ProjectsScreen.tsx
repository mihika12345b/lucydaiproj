import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity, Modal, Pressable, Image, StyleSheet } from 'react-native';
import styles from '../styles';

import BackButton from '../routes/BackButton';

const searchIcon = require('../assets/icons/search.png');
const filterIcon = require('../assets/icons/filter.png');


const projects = [
  { name: 'Abbot Kinney', percentCompletion: 25 },
  { name: 'Ashton Drive', percentCompletion: 50 },
  { name: 'Baxter Rowland Heights', percentCompletion: 30 },
  { name: 'Beverly Studios', percentCompletion: 100 },
  { name: 'Davey Chellie', percentCompletion: 100 },
  { name: 'Fawlx Walker', percentCompletion: 35 },
  { name: 'Grove and Parks', percentCompletion: 10 },
  { name: 'Hudson Yard Apartments', percentCompletion: 4 },
];

const ProjectsScreen = () => {
  const [searchText, setSearchText] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [filterType, setFilterType] = useState('all');

  const filteredProjects = projects.filter((project) =>
    project.name.toLowerCase().includes(searchText.toLowerCase())
  );

  const handleFilterPress = () => {
    setModalVisible(!modalVisible);
  };

  const handleFilterOptionPress = (filterType: string) => {
    setFilterType(filterType);
    setModalVisible(false);
  };

  const getPercentColor = (percent: number) => {
    if (percent <= 25) {
      return styles.percentRed;
    } else if (percent <= 75) {
      return styles.percentOrange;
    } else {
      return styles.percentGreen;
    }
  };

  let displayedProjects = filteredProjects;
  if (filterType === 'complete') {
    displayedProjects = projects.filter((project) => project.percentCompletion === 100);
  } else if (filterType === 'low') {
    displayedProjects = projects.filter((project) => project.percentCompletion <= 25);
  } else if (filterType === 'medium') {
    displayedProjects = projects.filter(
      (project) => project.percentCompletion > 25 && project.percentCompletion <= 75
    );
  } else if (filterType === 'high') {
    displayedProjects = projects.filter((project) => project.percentCompletion > 75);
  }

  return (
    <View style={styles.container}>
      <BackButton/>
      <View style={styles.searchBarContainer}>
        <Image source={searchIcon} style={{ width: 25, height: 25 }} />
        <TextInput
          style={styles.searchBar}
          placeholder="Search"
          value={searchText}
          onChangeText={setSearchText}
        />
      </View>
      <View style={styles.topBar}>
        <Text style={styles.heading}>ALL PROJECTS</Text>
        <TouchableOpacity style={styles.filterIconContainer} onPress={handleFilterPress}>
          <Image source={filterIcon} style={{ width: 25, height: 25 }} />
        </TouchableOpacity>
      </View>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Pressable onPress={() => handleFilterOptionPress('all')}>
              <Text style={styles.modalOption}>All</Text>
            </Pressable>
            <Pressable onPress={() => handleFilterOptionPress('complete')}>
              <Text style={styles.modalOption}>Complete</Text>
            </Pressable>
            <Pressable onPress={() => handleFilterOptionPress('low')}>
              <Text style={styles.modalOption}>Low</Text>
            </Pressable>
            <Pressable onPress={() => handleFilterOptionPress('medium')}>
              <Text style={styles.modalOption}>Medium</Text>
            </Pressable>
            <Pressable onPress={() => handleFilterOptionPress('high')}>
              <Text style={styles.modalOption}>High</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <FlatList
        data={displayedProjects.sort((a, b) => a.name.localeCompare(b.name))}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <View style={styles.projectItem}>
            <View style={styles.projectContainer}>
              <Text style={styles.projectName}>{item.name}</Text>
            </View>
            <Text style={[styles.percentCompletion, getPercentColor(item.percentCompletion)]}>
              {item.percentCompletion}% complete
            </Text>
            <View style={styles.separator} />
          </View>
        )}
      />
    </View>
  );
};

export default ProjectsScreen;
