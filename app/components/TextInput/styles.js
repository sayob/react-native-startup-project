import { StyleSheet, Platform } from 'react-native'
import { SMALL_DEVICE_H, SMALL_DEVICE_W, inputBorderError } from '../../lib/globals';
import * as COLORS from '../../assets/styles/colors';

const style = StyleSheet.create({
    wrapperStyle: {
        width: '100%',
        padding: 20,
        paddingTop: 10,
        paddingBottom: 0,
        marginBottom: 7,
        height: 70
    },
    labelWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    labelStyle: {
        color: COLORS.text,
        fontSize: 12,
        backgroundColor: 'transparent',
        marginBottom: 5,
        width: '49%'
    },
    labelError: {
        color: inputBorderError,
        fontSize: 10,
        backgroundColor: 'transparent',
        marginBottom: 4,
        paddingRight: 0,
        textAlign: 'right',
        minHeight: 18
    },
    iconStyle: {
        height: 30,
        width: 30,
        paddingLeft: 8,
        fontSize: 17,
        color: COLORS.pink,
        justifyContent: 'center',
        alignItems: 'center'
    },
    inputStyle: {
        backgroundColor: 'transparent',
        flex: 1,
        height: '100%',
        // ...Platform.select({
        //     android: {
        //         height: (SMALL_DEVICE_H ? 40 : 55),
        //     },
        //     ios: {
        //         height: (SMALL_DEVICE_H ? 30 : 40),
        //     }
        // }),
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
    },
    textInputStyle: {
        width: '100%',
        height: 50,
        padding: 10,
        paddingLeft: 0,
        marginLeft: 10,
        backgroundColor: 'transparent',
        color: COLORS.text,
        left: 0,
        paddingBottom: 0,
        marginBottom: 15,
        paddingRight: 15,
        ...Platform.select({
            android: {
                fontSize: 15,
            },
            ios: {
                fontSize: 17,
            }
        }),
    },
    borderStyle: {
        borderBottomWidth: 1,
        borderBottomColor: COLORS.lightGrey
    },
    validatedStyle: {
        backgroundColor: 'transparent',
        height: SMALL_DEVICE_H ? 17 : 25,
        width: SMALL_DEVICE_W ? 17 : 25,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center'
    },
    validatePositioning: {
        position: 'absolute',
        right: 0,
        bottom: 3
    },

    rightIconPosition: {
        height: SMALL_DEVICE_H ? 20 : 30,
        width: SMALL_DEVICE_W ? 20 : 40,
        backgroundColor: 'transparent'
    },
    checkSign: {
        fontSize: 15,
        backgroundColor: 'transparent',
        color:'#004b00'
    },
    errorBar: {
        height: 2,
        position: 'absolute',
        width: '100%',
        backgroundColor: inputBorderError,
        bottom: -1
    }
});

export default style;
