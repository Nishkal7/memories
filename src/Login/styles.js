import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  sloganText: {
    color: '#754847', //Main Text Color
    fontFamily: 'serif',
    fontSize: 17,
  },
  container: {
    display: 'flex',
    height: '100%',
    width: '100%',
    backgroundColor: '#eeebe8', // Back ground color
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
    backgroundColor: '#754752',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  buttonText: {
      color : '#eeebe8',
      fontFamily:"serif",
      fontSize:17
  },
  button2: {
    height: '20%',
    width: '90%',
    borderRadius:20,
    backgroundColor: '#754752',
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
    color : '#754847',
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
    color : '#754847',
  }
});

export default styles;
