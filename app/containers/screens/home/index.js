import React, { Component } from 'react'
import { StatusBar, View, ImageBackground } from 'react-native';

import _Button from '../../../components/Button';

import { appImages } from '../../../assets/images/images';
import styles from '../../../assets/styles/styles';
import * as colors from '../../../assets/styles/colors';

export default class Home extends Component {
    navigate = () => {
        this.props.navigation.navigate('Login')
    }

    render() {
        return (
            <ImageBackground style={styles.view} resizeMode='cover' source={appImages.home}>
                <StatusBar barStyle="default" translucent={false} backgroundColor={colors.black} animated={true} />
                <View style={styles.bottomView}>
                    <_Button onPress={this.navigate} text='Continue' />
                </View>
            </ImageBackground>
        )
    }
}
