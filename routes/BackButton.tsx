import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {useNavigation, StackActions} from '@react-navigation/native';

const BackButton = () => {
  const navigation = useNavigation();

  const goBackTwice = () => {
    navigation.dispatch(StackActions.pop(2));
  };

  return (
    <TouchableOpacity onPress={goBackTwice}>
      <Text>LogOut</Text>
    </TouchableOpacity>
  );
};

export default BackButton;
