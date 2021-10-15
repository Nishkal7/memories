import * as Constants from '../utils/Constants';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  postDetailContainer: {
    display: 'flex',
      backgroundColor: Constants.APP_BACKGROUND_COLOR,
  },
  imageContainer: {},
  imageView: {
    height: 350,
  },
  postContentContainer: {
    backgroundColor: Constants.APP_BACKGROUND_COLOR,
    marginTop: -15,
    paddingTop: 20,
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
  },
  postContentTitle: {
    display: 'flex',
    justifyContent: 'center',
    paddingHorizontal: 20,
    marginBottom: 7,
  },
  postContentTitleText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Constants.APP_THEME_COLOR,
  },
  postContentDate:{
    fontSize: 14,
    color: Constants.APP_THEME_COLOR,
  },
  postContentMessageContainer: {
    marginHorizontal: 20,
    marginBottom: 20,
  },
  postContentMessageText: {
    fontSize: 14,
    color: Constants.APP_THEME_COLOR,
  },
  tagsContainer: {
    height: 50,
    display: 'flex',
    alignItems: 'center',
    paddingLeft: 20,
    marginBottom: 3,
  },
  tags: {
    marginRight: 20,
    padding: 5,
    borderRadius: 20,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#DED9E5',
  },
  tagsText : {
    fontSize: 14,
    color:Constants.APP_THEME_COLOR,
  }
});

export default styles;
