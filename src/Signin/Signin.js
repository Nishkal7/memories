import React, {useState} from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
} from 'react-native';
import styles from './styles';
import AlertModal from '../utils/AlertModal';

const Signin = ({navigation}) => {
  const initialState = {
    email: '',
    password: '',
  };

  const [formData, setFormData] = useState(initialState);
  const [errorMessage, setErrorMessage] = useState('');
  const [toggleAlert, setToggleAlert] = useState(false);

  const cleanData = data => {
    let transformedData = {
      email: data.email.trim(),
      password: data.password,
    };
    validateData(transformedData);
  };

  const validateEmail = email => {
    let re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const validateData = data => {
    if (!data.email.length > 0 || !data.password.length > 0) {
      setErrorMessage('Please enter all the fields');
      setToggleAlert(true);
    } else if (!validateEmail(data.email)) {
      setErrorMessage('Please enter Valid Email');
      setToggleAlert(true);
    } else {
      setErrorMessage('');
      setToggleAlert(false);
    }
  };

  return (
    <View style={styles.container}>
      <AlertModal
        message={errorMessage}
        activeStatus={toggleAlert}
        closeModal={() => {
          setToggleAlert(false);
        }}
      />
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
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.button1}
          onPress={() => {
            cleanData(formData);
          }}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.inputViewContainer2}>
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.button1}
          onPress={() => navigation.navigate('Signup')}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Signin;
