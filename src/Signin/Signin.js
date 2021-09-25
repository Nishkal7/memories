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

const Signin = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.inputViewContainer}>
        <Text style={styles.inputText}>Email</Text>
        <TextInput style={styles.boxContainer} />
      </View>
      <View style={styles.inputViewContainer}>
        <Text style={styles.inputText}>Password</Text>
        <TextInput secureTextEntry={true} style={styles.boxContainer} />
      </View>
      <View style={styles.inputViewContainer}>
        <TouchableOpacity activeOpacity={0.8} style={styles.button1}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.inputViewContainer2}>
        <TouchableOpacity activeOpacity={0.8} style={styles.button1}
         onPress={() => navigation.navigate('Signup')}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Signin;
