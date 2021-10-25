import * as Constants from '../utils/Constants';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  searchDetailContainer: {
    display: 'flex',
    flex: 1,
    padding: 10,
    backgroundColor: Constants.APP_BACKGROUND_COLOR,
  },
  searchBoxContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  boxContainer: {
    height: 40,
    marginTop: 20,
    width: '90%',
    borderBottomColor: Constants.APP_THEME_COLOR,
    borderWidth: 1,
    borderRadius: 20 / 2,
    color: Constants.APP_THEME_COLOR,
  },
  button1: {
    height: 35,
    width: '80%',
    marginTop: 20,
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
});

export default styles;
