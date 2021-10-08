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
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  imageChild: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.3)',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  overlayTextContainer: {
    marginLeft: 10,
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
    borderBottomEndRadius: 20,
    borderBottomStartRadius: 20,
  },
  cardContentTitle:{
    display:"flex",
    justifyContent:"center",
    height:30,
    paddingHorizontal:10
  },
  cardContentTitleText:{
    fontSize: 18,
    fontWeight:"bold",
    color:"#585858"
  },
  cardContentDesc:{
    paddingTop:5,
    paddingBottom:10,
    display:"flex",
    justifyContent:"flex-start",
    paddingHorizontal:10
  },
  cardContentDescText:{
    fontSize: 14,
    color:"#696969"
  },
  cardContentIconsContainer:{
    // backgroundColor:"green",
    display:"flex",
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-between",
    height:50,
    borderBottomEndRadius: 20,
    borderBottomStartRadius: 20,
    paddingHorizontal:10
  },
  cardContentIconsLeftContainer:{
    display:"flex",
    flexDirection:"row",
    alignItems:"center"
  }
});
export default styles;
