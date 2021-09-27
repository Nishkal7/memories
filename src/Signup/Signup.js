import React, {useState} from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
  Alert,
} from 'react-native';
import styles from './styles';

const Signup = () => {
  const initialState = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    repeatPassword: '',
  };
  // clean spaces, if anything empty throw alert error, passwords both should match, email regex

  const [formData, setFormData] = useState(initialState);

  const cleanData = data => {
    let transformedData = {
      firstName: data.firstName.trim(),
      lastName: data.lastName.trim(),
      email: data.email.trim(),
      password: data.password,
      repeatPassword: data.repeatPassword,
    };
    validateData(transformedData);
  };

  const validateData = (data) => {
    // if(!data.firstName.length > 0)
  }

  const alertHandler = message => {
    Alert.alert('Error', 'message');
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputViewContainer}>
        <Text style={styles.inputText}>First Name</Text>
        <TextInput
          name="First Name"
          type="text"
          style={styles.boxContainer}
          value={formData.firstName}
          onChangeText={value => {
            setFormData({...formData, firstName: value});
          }}
        />
      </View>
      <View style={styles.inputViewContainer}>
        <Text style={styles.inputText}>Last Name</Text>
        <TextInput
          name="Last Name"
          type="text"
          style={styles.boxContainer}
          value={formData.lastName}
          onChangeText={value => {
            setFormData({...formData, lastName: value});
          }}
        />
      </View>
      <View style={styles.inputViewContainer}>
        <Text style={styles.inputText}>Email</Text>
        <TextInput
          name="Email"
          type="text"
          style={styles.boxContainer}
          value={formData.email}
          onChangeText={value => {
            setFormData({...formData, email: value});
          }}
        />
      </View>
      <View style={styles.inputViewContainer}>
        <Text style={styles.inputText}>Password</Text>
        <TextInput
          secureTextEntry={true}
          name="Password"
          type="text"
          style={styles.boxContainer}
          value={formData.password}
          onChangeText={value => {
            setFormData({...formData, password: value});
          }}
        />
      </View>
      <View style={styles.inputViewContainer}>
        <Text style={styles.inputText}>Repeat Password</Text>
        <TextInput
          secureTextEntry={true}
          name="Repeat Password"
          type="text"
          style={styles.boxContainer}
          value={formData.repeatPassword}
          onChangeText={value => {
            setFormData({...formData, repeatPassword: value});
          }}
        />
      </View>
      <View style={styles.inputViewContainer}>
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.button1}
          onPress={() => {
            console.log('FORM DATA CHECK', formData);
            cleanData(formData);
          }}>
          <Text style={styles.buttonText}>Create an Account</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Signup;
