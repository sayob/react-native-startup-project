import { StyleSheet } from 'react-native';
import * as colors from './colors';

const style = StyleSheet.create({
	view: {
		flex: 1
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
  }
});

export default style;
