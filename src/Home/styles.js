import * as Constants from '../utils/Constants';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    height: '100%',
    width: '100%',
    backgroundColor: Constants.APP_BACKGROUND_COLOR,
  },
  listContainer: {
    display: 'flex',
  },
  itemContainer: {
    display: 'flex',
    height: 300,
    marginBottom: 3,
    justifyContent:"center",
    alignItems: 'center',
  },
  image: {
    height: '90%',
    width: '96%',
  },
});
export default styles;
