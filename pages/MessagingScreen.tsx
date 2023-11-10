import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  Modal,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Keyboard,
} from 'react-native';

const dummyData = [
  {
    id: 1,
    name: 'John Doe',
    lastMessage: 'Hey there!',
    timestamp: '2 hours ago',
    profileImage: 'https://picsum.photos/200/200',
    messages: [
      {
        id: 'm1',
        text: 'Hey I had a question about the project?',
        timestamp: '2 hours ago',
        sender: {id: 'contactUserId'},
      },
      {
        id: 'm2',
        text: 'What is your question',
        timestamp: '1 hour ago',
        sender: {id: 'currentUserId'},
      },
      {
        id: 'm3',
        text: 'I was wondering if the pipelining schematic has been approved to start implementing?',
        timestamp: '1 hour ago',
        sender: {id: 'contactUserId'},
      },
    ],
  },
  {
    id: 2,
    name: 'Alice Johnson',
    lastMessage: 'Hi, how are you doing?',
    timestamp: '3 hours ago',
    profileImage: 'https://picsum.photos/200/201',
    messages: [
      {
        id: 'm1',
        text: 'Hi, how are you doing?',
        timestamp: '3 hours ago',
        sender: {id: 'contactUserId'},
      },
      {
        id: 'm2',
        text: "I'm good, thanks!",
        timestamp: '2 hours ago',
        sender: {id: 'currentUserId'},
      },
      {
        id: 'm3',
        text: "What's new with you?",
        timestamp: '2 hours ago',
        sender: {id: 'contactUserId'},
      },
    ],
  },
  {
    id: 3,
    name: 'Bob Smith',
    lastMessage: 'What are you up to?',
    timestamp: '4 hours ago',
    profileImage: 'https://picsum.photos/200/202',
    messages: [
      {
        id: 'm1',
        text: 'What are you up to?',
        timestamp: '4 hours ago',
        sender: {id: 'contactUserId'},
      },
      {
        id: 'm2',
        text: 'Just working on some projects.',
        timestamp: '3 hours ago',
        sender: {id: 'currentUserId'},
      },
      {
        id: 'm3',
        text: 'Sounds interesting! Tell me more.',
        timestamp: '2 hours ago',
        sender: {id: 'contactUserId'},
      },
    ],
  },
  {
    id: 4,
    name: 'Emma Wilson',
    lastMessage: 'Hello!',
    timestamp: '5 hours ago',
    profileImage: 'https://picsum.photos/200/203',
    messages: [
      {
        id: 'm1',
        text: 'Hello!',
        timestamp: '5 hours ago',
        sender: {id: 'contactUserId'},
      },
      {
        id: 'm2',
        text: 'Hi there!',
        timestamp: '4 hours ago',
        sender: {id: 'currentUserId'},
      },
    ],
  },
  {
    id: 5,
    name: 'Michael Brown',
    lastMessage: 'Hey, long time no see!',
    timestamp: '6 hours ago',
    profileImage: 'https://picsum.photos/200/204',
    messages: [
      {
        id: 'm1',
        text: 'Hey, long time no see!',
        timestamp: '6 hours ago',
        sender: {id: 'contactUserId'},
      },
      {
        id: 'm2',
        text: 'It has been a while!',
        timestamp: '5 hours ago',
        sender: {id: 'currentUserId'},
      },
    ],
  },
  {
    id: 6,
    name: 'Olivia Davis',
    lastMessage: "How's everything going?",
    timestamp: '7 hours ago',
    profileImage: 'https://picsum.photos/200/205',
    messages: [
      {
        id: 'm1',
        text: "How's everything going?",
        timestamp: '7 hours ago',
        sender: {id: 'contactUserId'},
      },
      {
        id: 'm2',
        text: 'I am doing well, thanks!',
        timestamp: '6 hours ago',
        sender: {id: 'currentUserId'},
      },
    ],
  },
  {
    id: 7,
    name: 'William Clark',
    lastMessage: "What's up?",
    timestamp: '8 hours ago',
    profileImage: 'https://picsum.photos/200/206',
    messages: [
      {
        id: 'm1',
        text: "What's up?",
        timestamp: '8 hours ago',
        sender: {id: 'contactUserId'},
      },
      {
        id: 'm2',
        text: 'Not much, just relaxing.',
        timestamp: '7 hours ago',
        sender: {id: 'currentUserId'},
      },
    ],
  },
  {
    id: 8,
    name: 'Sophia Lee',
    lastMessage: 'Good morning!',
    timestamp: '9 hours ago',
    profileImage: 'https://picsum.photos/200/207',
    messages: [
      {
        id: 'm1',
        text: 'Good morning!',
        timestamp: '9 hours ago',
        sender: {id: 'contactUserId'},
      },
      {
        id: 'm2',
        text: 'Morning!',
        timestamp: '8 hours ago',
        sender: {id: 'currentUserId'},
      },
    ],
  },
  {
    id: 9,
    name: 'James White',
    lastMessage: "How's your day going?",
    timestamp: '10 hours ago',
    profileImage: 'https://picsum.photos/200/208',
    messages: [
      {
        id: 'm1',
        text: "How's your day going?",
        timestamp: '10 hours ago',
        sender: {id: 'contactUserId'},
      },
      {
        id: 'm2',
        text: 'It is going well, thanks!',
        timestamp: '9 hours ago',
        sender: {id: 'currentUserId'},
      },
    ],
  },
  {
    id: 10,
    name: 'Charlotte Anderson',
    lastMessage: 'Nice to meet you!',
    timestamp: '11 hours ago',
    profileImage: 'https://picsum.photos/200/209',
    messages: [
      {
        id: 'm1',
        text: 'Nice to meet you!',
        timestamp: '11 hours ago',
        sender: {id: 'contactUserId'},
      },
      {
        id: 'm2',
        text: 'Likewise!',
        timestamp: '10 hours ago',
        sender: {id: 'currentUserId'},
      },
    ],
  },
  // Add more dummy conversations here...
];

const MessagingScreen = () => {
  const [searchText, setSearchText] = useState('');
  const [selectedChat, setSelectedChat] = useState(null);
  const [messageText, setMessageText] = useState('');

  const openChatModal = chat => {
    setSelectedChat(chat);
  };

  const closeChatModal = () => {
    setSelectedChat(null);
  };

  const currentUser = {id: 'currentUserId'}; // Replace 'currentUserId' with the actual ID of the current user

  const sendMessage = () => {
    // In a real app, here you'd send the message to the backend
    setMessageText('');
  };

  const simulateResponse = () => {
    if (messageText.trim() === '') {
      // Don't simulate a response for empty messages
      return;
    }
    const newMessage = {
      id: `m${selectedChat.messages.length + 1}`,
      text: messageText,
      timestamp: 'a few seconds ago',
      sender: {
        id:
          selectedChat.id === currentUser.id ? currentUser.id : 'currentUserId',
      },
    };
    // Find the selected chat in the dummyData array
    const updatedChat = dummyData.find(chat => chat.id === selectedChat.id);
    // Add the new message to the selected chat's messages
    updatedChat.messages.push(newMessage);
    // Clear the message input
    setMessageText('');
    // Close the keyboard
    Keyboard.dismiss();
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchBar}
        placeholder="Search..."
        value={searchText}
        onChangeText={text => setSearchText(text)}
      />

      <FlatList
        data={dummyData}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <TouchableOpacity onPress={() => openChatModal(item)}>
            <View style={styles.conversation}>
              <Image
                source={{uri: item.profileImage}}
                style={styles.profileImage}
              />
              <View style={styles.messageInfo}>
                <Text style={styles.contactName}>{item.name}</Text>
                <Text style={styles.lastMessage}>{item.lastMessage}</Text>
              </View>
              <Text style={styles.timestamp}>{item.timestamp}</Text>
            </View>
          </TouchableOpacity>
        )}
      />

      <Modal
        visible={selectedChat !== null}
        animationType="slide"
        onRequestClose={closeChatModal}
        transparent={true}>
        <KeyboardAvoidingView
          style={styles.flexGrow}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 0}>
          <View style={styles.chatContainer}>
            <View style={styles.chatHeader}>
              <Image
                source={{uri: selectedChat?.profileImage}}
                style={styles.chatHeaderImage}
              />
              <Text style={styles.chatHeaderTitle}>{selectedChat?.name}</Text>
              <TouchableOpacity onPress={closeChatModal}>
                <Text style={styles.closeButton}>Close</Text>
              </TouchableOpacity>
            </View>

            <ScrollView style={styles.chatMessages}>
              {selectedChat?.messages.map(message => (
                <View
                  key={message.id}
                  style={[
                    styles.messageBubble,
                    message.sender.id === currentUser.id
                      ? styles.sentMessage
                      : styles.receivedMessage,
                  ]}>
                  <Text style={styles.messageText}>{message.text}</Text>
                  <Text style={styles.messageTimestamp}>
                    {message.timestamp}
                  </Text>
                </View>
              ))}
            </ScrollView>

            <View style={styles.messageInputContainer}>
              <TextInput
                style={styles.messageInput}
                placeholder="Type a message..."
                value={messageText}
                onChangeText={text => setMessageText(text)}
                onSubmitEditing={simulateResponse}
              />
              <TouchableOpacity onPress={simulateResponse}>
                <Text style={styles.sendButton}>Send</Text>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAvoidingView>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  searchBar: {
    height: 50,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  conversation: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 16,
  },
  messageInfo: {
    flex: 1,
  },
  contactName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  lastMessage: {
    fontSize: 14,
    color: '#666',
  },
  timestamp: {
    fontSize: 12,
    color: '#999',
  },
  flexGrow: {
    flex: 1,
  },
  chatContainer: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: 'white',
  },
  chatHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
    padding: 16,
  },
  chatHeaderImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 16,
  },
  chatHeaderTitle: {
    flex: 1,
    fontSize: 18,
    fontWeight: 'bold',
  },
  closeButton: {
    fontSize: 16,
    color: '#999',
  },
  chatMessages: {
    flex: 1,
    padding: 16,
  },
  messageBubble: {
    padding: 10,
    borderRadius: 20,
    marginTop: 8,
  },
  sentMessage: {
    alignSelf: 'flex-end',
    backgroundColor: '#007bff',
  },
  receivedMessage: {
    alignSelf: 'flex-start',
    backgroundColor: '#e0e0e0',
  },
  messageText: {
    fontSize: 16,
    color: 'white', // Text color for sent messages
  },
  messageTimestamp: {
    fontSize: 12,
    alignSelf: 'flex-end',
    color: '#999',
    marginTop: 4,
  },
  messageInputContainer: {
    flexDirection: 'row',
    padding: 16,
    borderTopWidth: 1,
    borderBottomWidth: 10,
    borderTopColor: '#e0e0e0',
    alignItems: 'center',
  },
  messageInput: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 16,
    marginRight: 8,
  },
  sendButton: {
    fontSize: 16,
    color: '#007bff',
  },
});

export default MessagingScreen;
