import React, { Component } from 'react'
import { ImageBackground, View, StatusBar } from 'react-native';

import _TextInput from '../../../components/TextInput';
import _Button from '../../../components/Button';

import styles from '../../../assets/styles/styles';
import { appImages } from '../../../assets/images/images';
import * as colors from '../../../assets/styles/colors';

export default class Login extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            username: '',
            password: ''
        }
    }

    submitForm = () => {

    }
    

    render() {
        let { username, password } = this.state;

        return (
            <ImageBackground style={styles.view} imageStyle={styles.backImageStyle} resizeMode='cover' source={appImages.login}>
                <StatusBar barStyle="default" translucent={false} backgroundColor={colors.primaryColor} animated={true} />
                <View style={styles.inputView}>
                    <_TextInput
                        iconLib='Simple'
                        icon='user'
                        ref={(el) => this.usernameInput = el}
                        onChangeText={(username) => { this.setState({ username }) }}
                        text={username}
                        placeholder='Enter username'
                        placeholderTextColor='#999'
                        underlineColorAndroid='transparent'
                        returnKeyType='next'
                        onSubmitEditing={() => { this.passwordInput.focusInput() }}
                    />

                    <_TextInput
                        iconLib='Simple'
                        icon='lock'
                        ref={(el) => this.passwordInput = el}
                        onChangeText={(password) => { this.setState({ password }) }}
                        text={password}
                        placeholder='Enter password'
                        placeholderTextColor='#999'
                        underlineColorAndroid='transparent'
                        returnKeyType='next'
                        onSubmitEditing={() => { this.submitForm() }}
                    />

                    <_Button onPress={this.submitForm} text='Submit' />

                </View>
            </ImageBackground>
        )
    }
}
