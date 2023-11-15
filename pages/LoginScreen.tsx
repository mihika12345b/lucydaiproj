// LoginScreen.tsx
import React from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

const LoginScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>LUCYD</Text>
      <Text style={styles.loginTitle}>Login</Text>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder="Email" />
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
            navigation.navigate('DrawerNav', {screen: 'LandingPage'});
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
    backgroundColor: '#f5f5f5', // Use a light background
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#333', // Dark color for contrast
    marginBottom: 20,
  },
  loginTitle: {
    fontSize: 24,
    fontWeight: '500',
    color: '#444',
    marginBottom: 30,
  },
  inputContainer: {
    width: '80%',
  },
  input: {
    borderColor: '#888', // Subtle border color
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 15,
    padding: 15,
    backgroundColor: 'white', // White background for the inputs
  },
  button: {
    backgroundColor: '#007bff', // Primary button color
    borderRadius: 10,
    padding: 15,
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  linksContainer: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-around', // Space out links
    width: '100%',
  },
  linkText: {
    color: '#007bff', // Use the primary color for links
    textDecorationLine: 'underline',
  },
});

// Usage for Button (Replace the default Button component)
<TouchableOpacity
  style={styles.button}
  onPress={() => {
    // Handle sign-in logic here
    navigation.navigate('DrawerNav', {screen: 'LandingPage'});
  }}>
  <Text style={styles.buttonText}>Sign In</Text>
</TouchableOpacity>;

export default LoginScreen;
