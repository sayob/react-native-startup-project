import { StyleSheet, Platform } from 'react-native'
import * as colors from '../../assets/styles/colors';

const style = StyleSheet.create({
    wrapperStyle: {
        width: '100%',
        padding: 20,
        paddingTop: 10,
        paddingBottom: 0,
        marginBottom: 12,
        height: 70
    },

    iconStyle: {
        height: 30,
        width: 30,
        paddingLeft: 8,
        fontSize: 17,
        color: colors.secondaryColor,
        justifyContent: 'center',
        alignItems: 'center'
    },

    inputStyle: {
        backgroundColor: 'transparent',
        flex: 1,
        height: '100%',
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
    },

    borderStyle: {
        borderWidth: 1,
        borderColor: '#DDDDDE',
    },

    textInputStyle: {
        width: '100%',
        height: 50,
        padding: 10,
        paddingLeft: 0,
        marginLeft: 10,
        backgroundColor: 'transparent',
        color: colors.text,
        left: 0,
        paddingBottom: 0,
        marginBottom: 15,
        paddingRight: 15,
        fontSize: 15,
    },
    
    
});

export default style;
