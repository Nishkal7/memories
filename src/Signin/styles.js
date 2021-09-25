import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    height: '100%',
    width: '100%',
    backgroundColor: '#eeebe8', // Back ground color
  },
  inputViewContainer : {
    height: '15%',
    marginHorizontal:15,
    justifyContent:"center",
    marginBottom:4
  },
  inputViewContainer2 : {
    // height: '15%',
    marginHorizontal:15,
    justifyContent:"center",
    marginBottom:4
  },
  boxContainer: {
    height: 40,
    borderBottomColor:"#754752",
    borderBottomWidth: 1,
    color:"#754752",
  },
  button1: {
    height: 35,
    width: '90%',
    backgroundColor: '#754752',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf:"center"
  },
  buttonText: {
    color : '#eeebe8',
    fontFamily:"serif",
    fontSize:17
},
inputText : {
    color : '#754752',
}
});

export default styles;
