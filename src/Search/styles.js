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
    borderWidth: 1,
    borderColor:Constants.ALERT_CONFIRM,
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
    marginBottom: 10,
  },
  buttonText: {
    color: '#eeebe8',
    fontFamily: 'serif',
    fontSize: 17,
  },
  recommendationPostsContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  emptyMessageContainer: {
    flex: 1,
    height: 400,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyMessage: {
    color: Constants.APP_THEME_COLOR,
    fontSize: 15,
  },
  imageRecContainer: {
    marginLeft: 15,
    marginVertical: 10,
  },
  imageRecView: {
    height: 165,
    width: 165,
  },
  postContentRecText: {
    marginLeft: 20,
    fontSize: 14,
    fontWeight: 'bold',
    color: Constants.APP_THEME_COLOR,
  },
});

export default styles;
