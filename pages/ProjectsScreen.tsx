// ProjectsScreen.tsx
import React, {useState} from 'react';
import {View, Text, TextInput, FlatList, StyleSheet} from 'react-native';

const projectsData = [
  {id: '1', name: 'Project A', completion: '80%'},
  {id: '2', name: 'Project B', completion: '60%'},
  {id: '3', name: 'Project C', completion: '45%'},
  // Add more project data here
];

const ProjectsScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const filteredProjects = projectsData.filter(project =>
    project.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Projects</Text>
      <TextInput
        style={styles.searchBar}
        placeholder="Search Project"
        value={searchQuery}
        onChangeText={text => setSearchQuery(text)}
      />
      <FlatList
        data={filteredProjects}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <View style={styles.projectItem}>
            <Text style={styles.projectName}>{item.name}</Text>
            <Text style={styles.completion}>{item.completion}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  searchBar: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 10,
    marginTop: 10,
  },
  projectItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
    paddingVertical: 10,
  },
  projectName: {
    fontSize: 16,
  },
  completion: {
    fontSize: 16,
  },
});

export default ProjectsScreen;
