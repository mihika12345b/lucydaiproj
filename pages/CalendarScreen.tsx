import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  Modal,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {Calendar} from 'react-native-calendars';


const CalendarScreen = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [isAddEventModalVisible, setIsAddEventModalVisible] = useState(false);
  const [isAddTaskModalVisible, setIsAddTaskModalVisible] = useState(false);
  const [newEventTitle, setNewEventTitle] = useState('');
  const [newEventDescription, setNewEventDescription] = useState('');
  const [newEventTime, setNewEventTime] = useState('');
  const [newTaskTitle, setNewTaskTitle] = useState('');
  const [newTaskDescription, setNewTaskDescription] = useState('');
  const [newTaskTime, setNewTaskTime] = useState('');
  const [isPlusButtonExpanded, setIsPlusButtonExpanded] = useState(false);

  const markedDates = {
    '2023-11-01': {marked: true, dotColor: 'blue'},
    '2023-11-15': {marked: true, dotColor: 'red'},
  };

  // Sample events data (dummy data)
  const eventsData = {
    '2023-11-01': [
      {
        title: 'Foundation Safety Inspection',
        description:
          'Checks for properly prepared, leveled, and anchored foundation',
        time: '09:00 AM',
      },
      {
        title: 'Shipment of Cantilever Beams',
        description: 'Cantilever Beam delivery barring delay',
        time: '02:30 PM',
      },
    ],
  };

  // Sample tasks data (dummy data)
  const tasksData = {
    '2023-11-01': [
      {title: 'Task 1', description: 'Description of Task 1', time: '10:00 AM'},
    ],
  };

  const onDayPress = day => {
    setSelectedDate(day.dateString);
  };

  const addEvent = () => {
    if (selectedDate && newEventTitle) {
      const newEvent = {
        title: newEventTitle,
        description: newEventDescription,
        time: newEventTime,
      };
      eventsData[selectedDate] = [
        ...(eventsData[selectedDate] || []),
        newEvent,
      ];
      setIsAddEventModalVisible(false);
      // Reset input fields
      setNewEventTitle('');
      setNewEventDescription('');
      setNewEventTime('');
    }
  };

  const addTask = () => {
    if (selectedDate && newTaskTitle) {
      const newTask = {
        title: newTaskTitle,
        description: newTaskDescription,
        time: newTaskTime,
      };
      tasksData[selectedDate] = [...(tasksData[selectedDate] || []), newTask];
      setIsAddTaskModalVisible(false);
      // Reset input fields
      setNewTaskTitle('');
      setNewTaskDescription('');
      setNewTaskTime('');
    }
  };

  const togglePlusButton = () => {
    setIsPlusButtonExpanded(!isPlusButtonExpanded);
  };

  return (
    <View style={styles.container}>
      <Calendar markedDates={markedDates} onDayPress={onDayPress} />

      {selectedDate && (
        <ScrollView style={styles.scrollContainer}>
          <View style={styles.eventsContainer}>
            <View style={styles.headerBubble}>
              <Text style={styles.eventsHeader}>
                Events for {selectedDate}:
              </Text>
            </View>
            {eventsData[selectedDate] &&
              eventsData[selectedDate].map((event, index) => (
                <View key={index} style={styles.eventItem}>
                  <Text style={styles.eventTitle}>{event.title}</Text>
                  <Text>Time: {event.time}</Text>
                  <Text>{event.description}</Text>
                </View>
              ))}
          </View>

          <View style={styles.tasksContainer}>
            <View style={styles.headerBubble}>
              <Text style={styles.eventsHeader}>Tasks for {selectedDate}:</Text>
            </View>
            {tasksData[selectedDate] &&
              tasksData[selectedDate].map((task, index) => (
                <View key={index} style={styles.eventItem}>
                  <Text style={styles.eventTitle}>{task.title}</Text>
                  <Text>Time: {task.time}</Text>
                  <Text>{task.description}</Text>
                </View>
              ))}
          </View>
        </ScrollView>
      )}

      <Modal visible={isAddEventModalVisible}>
        <View style={styles.modalContainer}>
          <Text style={styles.eventsHeader}>Add Event</Text>
          <TextInput
            placeholder="Event Title"
            value={newEventTitle}
            onChangeText={text => setNewEventTitle(text)}
          />
          <TextInput
            placeholder="Event Description"
            value={newEventDescription}
            onChangeText={text => setNewEventDescription(text)}
          />
          <TextInput
            placeholder="Event Time (e.g., 09:00 AM)"
            value={newEventTime}
            onChangeText={text => setNewEventTime(text)}
          />
          <Button title="Save" onPress={addEvent} />
          <Button
            title="Cancel"
            onPress={() => setIsAddEventModalVisible(false)}
          />
        </View>
      </Modal>

      <Modal visible={isAddTaskModalVisible}>
        <View style={styles.modalContainer}>
          <Text style={styles.eventsHeader}>Add Task</Text>
          <TextInput
            placeholder="Task Title"
            value={newTaskTitle}
            onChangeText={text => setNewTaskTitle(text)}
          />
          <TextInput
            placeholder="Task Description"
            value={newTaskDescription}
            onChangeText={text => setNewTaskDescription(text)}
          />
          <TextInput
            placeholder="Task Time (e.g., 10:00 AM)"
            value={newTaskTime}
            onChangeText={text => setNewTaskTime(text)}
          />
          <Button title="Save" onPress={addTask} />
          <Button
            title="Cancel"
            onPress={() => setIsAddTaskModalVisible(false)}
          />
        </View>
      </Modal>

      <TouchableOpacity style={styles.plusButton} onPress={togglePlusButton}>
        <Text style={styles.plusButtonText}>
          {isPlusButtonExpanded ? 'X' : '+'}
        </Text>
      </TouchableOpacity>

      {isPlusButtonExpanded && (
        <View style={styles.plusOptions}>
          <TouchableOpacity onPress={() => setIsAddEventModalVisible(true)}>
            <Text style={styles.plusOptionText}>Add Event</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setIsAddTaskModalVisible(true)}>
            <Text style={styles.plusOptionText}>Add Task</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    flex: 1,
  },
  eventsContainer: {
    margin: 16,
  },
  tasksContainer: {
    margin: 16,
  },
  headerBubble: {
    backgroundColor: '#fa7a19', // Updated color
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
  eventsHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  eventItem: {
    marginVertical: 8,
  },
  eventTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  plusButton: {
    position: 'absolute',
    bottom: 16,
    right: 16,
    backgroundColor: '#fa7a19', // Updated color
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  plusButtonText: {
    fontSize: 24,
    color: 'white',
  },
  plusOptions: {
    position: 'absolute',
    bottom: 86,
    right: 16,
    backgroundColor: 'white',
    width: 120,
    borderRadius: 10,
    elevation: 5,
  },
  plusOptionText: {
    padding: 10,
  },
});

export default CalendarScreen;
