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
import Loader from '../utils/Loader';
import {signin} from '../actions/login';
import {useSelector, useDispatch} from 'react-redux';
import * as Constants from '../utils/Constants';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Signin = ({navigation}) => {
  const dispatch = useDispatch();
  const stateData = useSelector(state => state);
  const initialState = {
    email: '',
    password: '',
  };

  const [formData, setFormData] = useState(initialState);
  const [errorMessage, setErrorMessage] = useState('');
  const [toggleAlert, setToggleAlert] = useState(false);
  const [loading, setLoading] = useState(false);
  const [hidePassword, setHidePassword] = useState(true);

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
      setLoading(true)
      dispatch(signin(1));
    }
  };

  return (
    <View style={styles.container}>
      <Loader activeStatus={loading}/>
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
