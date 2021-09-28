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
import AwesomeAlert from 'react-native-awesome-alerts';
import styles from './styles';

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
    console.log('ALERT VALU&E', toggleAlert);
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
      setErrorMessage('Passwords does not match, Please check and try again');
      setToggleAlert(true);
    } else if (data.password.length < 7) {
      setErrorMessage('Password length should be atleast 7');
      setToggleAlert(true);
    } else {
      setErrorMessage('');
      setToggleAlert(false);
    }
  };

  const AlertHandler = ({message}) => {
    return (
      <AwesomeAlert
        show={toggleAlert}
        showProgress={false}
        title="Oops! Something went wrong!"
        message={message}
        closeOnTouchOutside={true}
        closeOnHardwareBackPress={true}
        onDismiss={() => {
          setToggleAlert(false);
        }}
        showCancelButton={false}
        showConfirmButton={true}
        cancelText="cancel"
        confirmText="Okay"
        confirmButtonColor="#9E7E85"
        onCancelPressed={() => {
          setToggleAlert(false);
        }}
        onConfirmPressed={() => {
          setToggleAlert(false);
        }}
      />
    );
  };

  return (
    <View style={styles.container}>
      <AlertHandler message={errorMessage} />
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
