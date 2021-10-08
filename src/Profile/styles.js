import {StyleSheet} from 'react-native';
import * as Constants from '../utils/Constants';

const styles = StyleSheet.create({
  profileContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: Constants.APP_BACKGROUND_COLOR,
  },
  profileImageContainer: {
    height: 230,
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  profileInfoContainer: {
    height: 250,
    marginBottom: 10,
    justifyContent:"space-evenly",
  },
  profileImage: {
    width: 200,
    height: 200,
    borderRadius: 200 / 2,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: Constants.ALERT_CONFIRM
  },
  singleInfoContainer: {
    height: '15%',
    display: 'flex',
    flexDirection: 'row',
    paddingLeft: 20,
    alignItems: 'center',
  },
  leftText: {
    color: Constants.APP_THEME_COLOR,
    fontFamily: 'serif',
    fontSize: 17,
    fontWeight: 'bold',
    marginRight: 16,
  },
  rightText: {
    width: '70%',
    color: Constants.APP_THEME_COLOR,
    fontFamily: 'serif',
    fontSize: 17,
  },
  profileEditContainer: {
    height: 35,
    width: '50%',
    borderRadius: 20,
    backgroundColor: Constants.APP_THEME_COLOR,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginBottom:50
  },
  profileLogoutContainer: {
    height: 35,
    width: '50%',
    borderRadius: 20,
    backgroundColor: Constants.APP_THEME_COLOR,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  leftText1:{
    color: Constants.APP_THEME_COLOR,
    fontFamily: 'serif',
    fontSize: 17,
    fontWeight: 'bold',
    marginRight: 20,
  },
  leftText2:{
    color: Constants.APP_THEME_COLOR,
    fontFamily: 'serif',
    fontSize: 17,
    fontWeight: 'bold',
    marginRight: 66,
  },
  buttonText: {
    color: Constants.APP_BACKGROUND_COLOR,
    fontFamily: 'serif',
    fontSize: 17,
  },
});

export default styles;
