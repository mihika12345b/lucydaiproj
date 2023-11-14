import React, { useState } from 'react';
import { View, Text, Button, TouchableOpacity, Modal, Alert } from 'react-native';
import Slider from '@react-native-community/slider';
import styles from '../styles';

const ProgressDetails = () => {
  const [tasks, setTasks] = useState([
    { name: 'Task 1', progress: 0, status: 'Waiting' },
    { name: 'Task 2', progress: 0, status: 'Waiting' },
    { name: 'Task 3', progress: 0, status: 'Waiting' },
  ]);

  const [selectedTask, setSelectedTask] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleBegin = (task) => {
    const updatedTasks = tasks.map((t) =>
      t.name === task.name ? { ...t, status: new Date().toLocaleTimeString() } : t
    );
    // Update the task list with the start time
    // You can perform any other required action here as well
    console.log('Task started:', task.name);
    setTasks(updatedTasks);
    setSelectedTask({ ...task, status: new Date().toLocaleTimeString() });
  };

  const handleInProgress = (task) => {
    setModalVisible(true);
    setSelectedTask(task);
  };

  const handleComplete = (task) => {
    const updatedTasks = tasks.map((t) =>
      t.name === task.name ? { ...t, progress: 100, status: new Date().toLocaleTimeString() } : t
    );
    // Update the task list with the completed task
    // You can perform any other required action here as well
    console.log('Task completed:', task.name);
    setTasks(updatedTasks);
  };

  const handleSliderChange = (value) => {
    setProgress(value);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>My Tasks</Text>
      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <Button title="Begin" onPress={() => handleBegin(selectedTask)} />
        </View>
        <View style={styles.button}>
          <Button title="In Progress" onPress={() => handleInProgress(selectedTask)} />
        </View>
        <View style={styles.button}>
          <Button title="Complete" onPress={() => handleComplete(selectedTask)} />
        </View>
      </View>

      {tasks.map((task, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => setSelectedTask(task)}
          style={[styles.taskContainer, { backgroundColor: task.status !== 'Waiting' ? '#F5F5F5' : 'lightgray' }]}
        >
          <View>
            <Text style={{ fontSize: 24 }}>{task.name}</Text>
          </View>
          <View style={{ alignItems: 'flex-end' }}>
            <Text>Progress: {task.progress}%</Text>
            <Text>Last Update: {task.status}</Text>
          </View>
        </TouchableOpacity>
      ))}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.inProgressContainer}>
          <View style={styles.inProgressBack}>
            <Text style={styles.inProgressPercentage}>Select Progress Percentage</Text>
            <Slider
              style={styles.slider}
              minimumValue={0}
              maximumValue={100}
              step={1}
              value={progress}
              onValueChange={handleSliderChange}
            />
            <Button
              title="Set Progress"
              onPress={() => {
                setModalVisible(false);
                const updatedTasks = tasks.map((t) =>
                  t.name === selectedTask.name
                    ? { ...t, progress: progress, status: new Date().toLocaleTimeString() }
                    : t
                );
                // Update the task list with the progress
                // You can perform any other required action here as well
                console.log('Progress updated:', selectedTask.name, 'to', progress, '%');
                setTasks(updatedTasks);
              }}
            />
          </View>
        </View>
      </Modal>
    </View>
    );
  };
  
  export default ProgressDetails;
  