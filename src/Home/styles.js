import * as Constants from '../utils/Constants';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    // height: '100%',
    // width: '100%',
    backgroundColor: Constants.APP_BACKGROUND_COLOR,
  },
  listContainer: {
    display: 'flex',
  },
  itemContainer: {
    display: 'flex',
    padding: 5,
    marginBottom: 5,
    borderColor: Constants.APP_THEME_COLOR,
    borderStyle: 'solid',
    borderWidth: 0.3,
    borderRadius: 20,
    // elevation:1,
    margin: 5,
  },
  cardImageContainer: {
    display: 'flex',
    height: 250,
    marginBottom: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: '100%',
    width: '100%',
  },
  imageStyles: {
    borderRadius: 20,
  },
  imageChild: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.3)',
    borderRadius: 20,
  },
  overlayTextContainer: {
    marginLeft: 20,
    marginTop: 30,
  },
  overlayName: {
    color: 'white',
    fontSize: 20,
  },
  overlayDate: {
    color: 'white',
    fontSize: 13,
    marginLeft: 1,
  },
  cardContentContainer: {
    // backgroundColor: 'blue',
    height: 200,
  },
});
export default styles;
