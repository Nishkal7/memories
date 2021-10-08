import {StyleSheet} from 'react-native';
import * as Constants from '../utils/Constants';

const styles = StyleSheet.create({
  sloganText: {
    color: Constants.APP_THEME_COLOR, //Main Text Color
    fontFamily: 'serif',
    fontSize: 17,
  },
  container: {
    display: 'flex',
    height: '100%',
    width: '100%',
    backgroundColor: Constants.APP_BACKGROUND_COLOR, // Back ground color
  },
  logoContainer: {
    height: '40%',
  },
  logoImage: {
    width: '100%',
    height: '100%',
  },
  sloganContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonsContainer: {
    height: '30%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  button1: {
    height: '20%',
    width: '90%',
    borderRadius:20,
    backgroundColor: Constants.APP_THEME_COLOR,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  buttonText: {
      color : Constants.APP_BACKGROUND_COLOR,
      fontFamily:"serif",
      fontSize:17
  },
  button2: {
    height: '20%',
    width: '90%',
    borderRadius:20,
    backgroundColor: Constants.APP_THEME_COLOR,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  footerContainer: {
    height: '15%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerText : {
    fontFamily: 'serif',
    fontSize: 17,
    color : Constants.APP_THEME_COLOR,
    margin:14,
  },
  lastFooterContainer: {
    height: '5%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  lastFooterText : {
    fontFamily: 'serif',
    fontSize: 17,
    color : Constants.APP_THEME_COLOR,
  }
});

export default styles;
