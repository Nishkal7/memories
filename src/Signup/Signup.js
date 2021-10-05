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
import AlertModal from '../utils/AlertModal';
import * as Constants from '../utils/Constants';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Signup = () => {
  const initialState = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    repeatPassword: '',
  };

  const [formData, setFormData] = useState(initialState);
  const [errorMessage, setErrorMessage] = useState('');
  const [toggleAlert, setToggleAlert] = useState(false);
  const [hidePassword, setHidePassword] = useState(true);
  const [hidePassword1, setHidePassword1] = useState(true);
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

  const validateEmail = email => {
    let re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const validateData = data => {
    if (
      !data.firstName.length > 0 ||
      !data.lastName.length > 0 ||
      !data.email.length > 0 ||
      !data.password.length > 0 ||
      !data.repeatPassword.length > 0
    ) {
      setErrorMessage('Please enter all the fields');
      setToggleAlert(true);
    } else if (!validateEmail(data.email)) {
      setErrorMessage('Please enter Valid Email');
      setToggleAlert(true);
    } else if (data.password !== data.repeatPassword) {
      setErrorMessage('Passwords do not match, Please try again');
      setToggleAlert(true);
    } else if (data.password.length < 7) {
      setErrorMessage('Password length should be atleast 7');
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
        <View style={styles.passwordViewContainer}>
          <TextInput
            secureTextEntry={hidePassword}
            name="Password"
            type="text"
            style={styles.boxContainerPassword}
            value={formData.password}
            onChangeText={value => {
              setFormData({...formData, password: value});
            }}
          />
          <MaterialCommunityIcons
            name={!hidePassword ? 'eye' : 'eye-off'}
            color={Constants.APP_THEME_COLOR}
            style={styles.eyeIcon}
            size={23}
            onPress={() => setHidePassword(!hidePassword)}
          />
        </View>
      </View>
      <View style={styles.inputViewContainer}>
        <Text style={styles.inputText}>Repeat Password</Text>
        <View style={styles.passwordViewContainer}>
          <TextInput
            secureTextEntry={hidePassword1}
            name="Repeat Password"
            type="text"
            style={styles.boxContainerPassword}
            value={formData.repeatPassword}
            onChangeText={value => {
              setFormData({...formData, repeatPassword: value});
            }}
          />
          <MaterialCommunityIcons
            name={!hidePassword1 ? 'eye' : 'eye-off'}
            color={Constants.APP_THEME_COLOR}
            style={styles.eyeIcon}
            size={23}
            onPress={() => setHidePassword1(!hidePassword1)}
          />
        </View>
      </View>
      <View style={styles.inputViewContainer}>
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.button1}
          onPress={() => {
            cleanData(formData);
          }}>
          <Text style={styles.buttonText}>Create an Account</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Signup;
