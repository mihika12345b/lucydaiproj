// LoginScreen.tsx
import React from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';

const LoginScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>LUCYD</Text>
      <Text style={styles.loginTitle}>Login</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Email"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true}
        />
        <Button
          title="Sign In"
          onPress={() => {
            // Handle sign-in logic here

            // Navigate to the landing page
            navigation.navigate('DrawerNav', { screen: 'LandingPage' });
          }}
        />
        <View style={styles.linksContainer}>
          <TouchableOpacity>
            <Text style={styles.linkText}>Forgot Password</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.linkText}>Create New Account</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 30,
  },
  loginTitle: {
    fontSize: 20,
    marginTop: 10,
  },
  inputContainer: {
    marginTop: 20,
    width: '80%',
  },
  input: {
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    padding: 10,
  },
  linksContainer: {
    marginTop: 10,
    alignItems: 'center',
  },
  linkText: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
});

export default LoginScreen;
