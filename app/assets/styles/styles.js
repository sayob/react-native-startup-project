import { StyleSheet } from 'react-native';
import * as colors from './colors';

const style = StyleSheet.create({
	view: {
		flex: 1
  },

  coloredBackground: {
    backgroundColor: '#C5C5C5'
  },

  button: {
    borderRadius: 3,
    alignSelf: 'center',
    width: '90%',
    marginTop: 20,
    paddingVertical: 10,
    marginBottom: 20
  },
    
  buttonText: {
    fontSize: 16,
    textAlign: 'center',
    width: '100%',
    paddingVertical: 10,
	},
    
  bottomView: {
    justifyContent: 'flex-end',
    flex: 1
  },

  inputView: {
    justifyContent: 'center',
    padding: 10,
    flex: 1
  },

  backImageStyle: {
    opacity: 0.2
  },

  containerStyle: {
    backgroundColor: colors.white,
    margin: 8,
    borderRadius: 8,
  },
  innerContainer:{
    flexDirection: 'column',
  },
  imageContainer:{
    width: '100%',
    height: 175
  },
  text: {
    padding: 13,
    fontSize: 15,
  },
  image: {
    borderTopRightRadius: 3,
    borderTopLeftRadius: 3,
    flex: 1
  }, 
});

export default style;
