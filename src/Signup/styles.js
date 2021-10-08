import {StyleSheet} from 'react-native';
import * as Constants from '../utils/Constants';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    height: '100%',
    width: '100%',
    backgroundColor: Constants.APP_BACKGROUND_COLOR, // Back ground color
  },
  inputViewContainer: {
    height: '15%',
    marginHorizontal: 15,
    justifyContent: 'center',
    marginBottom: 4,
  },
  passwordViewContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  boxContainerPassword: {
    height: 40,
    borderBottomColor: Constants.APP_THEME_COLOR,
    borderBottomWidth: 1,
    color: Constants.APP_THEME_COLOR,
    width: '100%',
    paddingRight: '12%',
  },
  eyeIcon: {
    position: 'absolute',
    marginLeft: '90%',
  },
  boxContainer: {
    height: 40,
    borderBottomColor: Constants.APP_THEME_COLOR,
    borderBottomWidth: 1,
    color: Constants.APP_THEME_COLOR,
  },
  button1: {
    height: 35,
    width: '90%',
    borderRadius: 20,
    backgroundColor: Constants.APP_THEME_COLOR,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  buttonText: {
    color: '#eeebe8',
    fontFamily: 'serif',
    fontSize: 17,
  },
  inputText: {
    color: Constants.APP_THEME_COLOR,
  },
});

export default styles;
