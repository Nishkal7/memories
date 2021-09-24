import React from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
} from 'react-native';
import styles from './styles';

const Signup = () => {
  return (
    <View style={styles.container}>
      <View style={styles.inputViewContainer}>
        <Text style={styles.inputText}>First Name</Text>
        <TextInput type="text" style={styles.boxContainer} />
      </View>
      <View style={styles.inputViewContainer}>
        <Text style={styles.inputText}>Last Name</Text>
        <TextInput style={styles.boxContainer} />
      </View>
      <View style={styles.inputViewContainer}>
        <Text style={styles.inputText}>Email</Text>
        <TextInput style={styles.boxContainer} />
      </View>
      <View style={styles.inputViewContainer}>
        <Text style={styles.inputText}>Password</Text>
        <TextInput secureTextEntry={true} style={styles.boxContainer} />
      </View>
      <View style={styles.inputViewContainer}>
        <Text style={styles.inputText}>Repeat Password</Text>
        <TextInput secureTextEntry={true} style={styles.boxContainer} />
      </View>
      <View style={styles.inputViewContainer}>
        <TouchableOpacity activeOpacity={0.8} style={styles.button1}>
          <Text style={styles.buttonText}>Create an Account</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Signup;
