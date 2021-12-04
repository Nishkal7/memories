import {StyleSheet} from 'react-native';
import * as Constants from '../utils/Constants';

const styles = StyleSheet.create({
  mainContainer: {
    display: 'flex',
    height: '100%',
    width: '100%',
    backgroundColor: Constants.APP_BACKGROUND_COLOR, // Back ground color
    // backgroundColor:"red"
  },
  headerContainer: {
    height: '10%',
    // backgroundColor: 'red',
    justifyContent:"center",
    alignItems:"center"

  },
  headerText: {
    fontWeight:"bold",
    fontSize:23,
    color:Constants.APP_THEME_COLOR
  },
  inputViewContainer: {
    height: '15%',
    marginHorizontal: 15,
    justifyContent: 'center',
    marginBottom: "5%",
  },
  inputViewUploadContainer: {
    height: '5%',
    marginHorizontal: 15,
    justifyContent: 'center',
    marginVertical: "5%",
  },
  boxContainer: {
    height: 50,
    borderColor: Constants.APP_THEME_COLOR,
    borderWidth: 1,
    borderRadius: 50/2,
    paddingLeft:5,
    color: Constants.APP_THEME_COLOR,
  },
  largeInputViewContainer: {
    height: '20%',
    marginHorizontal: 15,
    justifyContent: 'center',
    marginBottom: "5%",
  },
  largeBoxContainer:{
    height: "60%",
    borderColor: Constants.APP_THEME_COLOR,
    borderWidth: 1,
    textAlignVertical: "top",
    borderRadius: 80/2,
    paddingLeft:12,
    color: Constants.APP_THEME_COLOR,
  },
  bodyContainer: {
    flex: 1,
    // backgroundColor: 'blue',
  },
  inputText: {
    color: Constants.APP_THEME_COLOR,
    marginBottom: 10,
  },
  button: {
    height: 35,
    width: '70%',
    borderRadius: 20,
    backgroundColor: Constants.APP_THEME_COLOR,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
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
    color: Constants.APP_BACKGROUND_COLOR,
    fontFamily: 'serif',
    fontSize: 17,
  },
});

export default styles;
