import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import styles from './styles';
import MemoryLaneLogo from '../Public/Images/MemoryLaneLogo.png';
import * as Animatable from 'react-native-animatable';
const Login = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Animatable.Image animation="bounceIn" duration={2000} style={styles.logoImage} source={MemoryLaneLogo} />
      </View>
      <View style={styles.sloganContainer}>
        <Text style={styles.sloganText}>
          {'Enjoy your trip down memory lane!'}
        </Text>
      </View>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.button1}
          onPress={() => navigation.navigate('Signup')}>
          <Animatable.Text animation="fadeInUp" duration={1000} style={styles.buttonText}>Create an Account</Animatable.Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.button2}
          onPress={() => {
            navigation.navigate('Signin');
          }}>
          <Animatable.Text animation="fadeInUp" duration={1000} style={styles.buttonText}>Login</Animatable.Text>
        </TouchableOpacity>
      </View>
      <View style={styles.footerContainer}>
        <Text style={styles.footerText}>
          {
            'By Creating an Account you agree to our Terms & Conditions and Privacy Policy.'
          }
        </Text>
      </View>
      <View style={styles.lastFooterContainer}>
        <Text style={styles.lastFooterText}>{'Created by Nishkal'}</Text>
      </View>
    </View>
  );
};

export default Login;
