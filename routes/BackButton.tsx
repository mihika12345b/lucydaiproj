import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { useNavigation, StackActions } from '@react-navigation/native';

const BackButton = () => {
  const navigation = useNavigation();

  const goBackTwice = () => {
    navigation.dispatch(StackActions.pop(2));
  };

  return (
    <TouchableOpacity onPress={goBackTwice}>
      <Text>LogOut (this is a log out button, i'll add it to the drawer once i make a custom drawer.</Text>
    </TouchableOpacity>
  );
};

export default BackButton;
