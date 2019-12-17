import React from 'react';
import { View, Text, TextInput, Animated, Keyboard, TouchableOpacity, Easing } from 'react-native';
import { inputBorder, inputBorderError, inputBorderOk, inputWidth, isEmpty } from '../../lib/globals';

import IconFon from 'react-native-vector-icons/FontAwesome5';
import IconOct from 'react-native-vector-icons/Octicons';
import IconMat from 'react-native-vector-icons/MaterialIcons';
import IconCom from 'react-native-vector-icons/MaterialCommunityIcons';
import IconFea from 'react-native-vector-icons/Feather';
import IconSim from 'react-native-vector-icons/SimpleLineIcons';

import style from './styles'

class TextInput extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            wrapperStyle: this.props.wrapperStyle || style.wrapperStyle,
            label: this.props.label,
            text: null,
            userError: this.props.userError,
            labelStyle: this.props.labelStyle || style.labelStyle,
            labelErrorStyle: [style.labelError, this.props.labelErrorStyle],
            style: this.props.style,
            placeholder: this.props.placeholder,
            placeholderTextColor: this.props.placeholderTextColor,
            icon: this.props.icon || null,
            righticon: this.props.rightIcon || null,
            iconLib: this.props.iconLib,
            iconStyle: this.props.iconStyle || style.iconStyle,
            inputStyle: this.props.inputStyle || style.inputStyle,
            keyboardType: this.props.keyboardType,
            secureTextEntry: this.props.secureTextEntry,
            onFocus: this.props.onFocus,
            onChangeText: this.props.onChangeText,
            onEndEditing: this.props.onEndEditing,
            maxLength: this.props.maxLength || 40,
            autoCorrect: this.props.autoCorrect || false,
            autoCapitalize: this.props.autoCapitalize || 'none',
            returnKeyType: this.props.returnKeyType,
            onSubmitEditing: this.props.onSubmitEditing,
            onLayout: this.props.onLayout,
            error: false,
            validatedStyle: this.props.validatedStyle || style.validatedStyle,
            validationMode: this.props.validationMode,
            validateFn: this.props.validateFn,
            deepRef: this.props.deepRef,
            borderAnim: new Animated.Value(0),
            checkOpacity: new Animated.Value(0),
            inputWidth: new Animated.Value(this.props.inputWidth ? this.props.inputWidth : inputWidth),
            errorAnim: new Animated.Value(0),
            // setProp: this.props.setProp,
            // propName: this.props.propName,
            interpolatedColorAnimation: inputBorder,
            isFirstFill: true,
            validatePositioningStyle: this.props.validatePositioningStyle || style.validatePositioning,
            resetKey: null,
            customInputValidation: this.props.customInputValidation || null,
            errorBarAnimation: new Animated.Value(0),
            selectionColor: this.props.selectionColor
        };

        this.initialState = this.state;
        this.onChangeText = this.onChangeText.bind(this);
        this.check = this.check.bind(this);
        this.setInterpolatedBorderColor = this.setInterpolatedBorderColor.bind(this);
    }

    componentWillReceiveProps(new_props) {
        if (this.state.isFirstFill && !this.textInput.isFocused() && !isEmpty(new_props.text)) {
            if (new_props.validationMode !== 'mail') {
                //this.check();
            }
            this.setState({
                isFirstFill: false
            });
        }

        this.setState({
            iconStyle: new_props.iconStyle || style.iconStyle,
            righticon: new_props.rightIcon || null,
        })
    }

    iconComp() {
        if (this.state.icon !== null) {
            switch (this.state.iconLib) {
                case 'MaterialIcons':
                    return <IconMat name={this.state.icon} style={this.state.iconStyle} />;
                    break;
                case 'MaterialCommunityIcons':
                    return <IconCom name={this.state.icon} style={this.state.iconStyle} />;
                    break;
                case 'Feather':
                    return <IconFea name={this.state.icon} style={this.state.iconStyle} />;
                    break;
                case 'Simple':
                    return <IconSim name={this.state.icon} style={this.state.iconStyle} />;
                    break;
                case 'FontAwesome5':
                    return <IconFon name={this.state.icon} style={this.state.iconStyle} />;
                    break;
                case 'Octicons':
                    return <IconOct name={this.state.icon} style={this.state.iconStyle} />;
                    break;
                default:
                    return <View />;
                    break;
            }
        }
    }

    rightIcon() {
        if (this.state.righticon !== null) {
            switch (this.state.iconLib) {
                case 'MaterialIcons':
                    return <IconMat name={this.props.rightIcon} style={this.state.iconStyle} />;
                    break;
                case 'MaterialCommunityIcons':
                    return <IconCom name={this.props.rightIcon} style={this.state.iconStyle} />;
                    break;
                case 'Fontello':
                    return <IconTello name={this.props.rightIcon} style={this.state.iconStyle} />;
                    break;
                case 'Feather':
                    return <IconFea name={this.props.rightIcon} style={this.state.iconStyle} />;
                    break;
                default:
                    return <View />;
                    break;
            }
        }
    }

    triggerError(error) {
        if (!error) {
            Animated.parallel([
                Animated.timing(this.state.checkOpacity, {
                    toValue: 1,
                    duration: 300,
                }),
                Animated.timing(this.state.inputWidth, {
                    toValue: (this.props.inputWidth) ? (this.props.inputWidth) : (inputWidth - 30),
                    duration: 300
                }),
                Animated.timing(this.state.borderAnim, {
                    toValue: 0,
                    duration: 300
                }),
                Animated.timing(this.state.errorAnim, {
                    toValue: 0,
                    duration: 300
                })
            ]).start();

            // this.state.setProp(this.props.propName, this.props.text);
            this.state.onChangeText(this.props.text);
        } else {
            Animated.parallel([
                Animated.timing(this.state.checkOpacity, {
                    toValue: 0,
                    duration: 300,
                }),
                Animated.timing(this.state.inputWidth, {
                    toValue: (this.props.inputWidth) ? this.props.inputWidth : inputWidth,
                    duration: 300
                }),
                Animated.timing(this.state.borderAnim, {
                    toValue: 100,
                    duration: 300
                }),
                Animated.timing(this.state.errorAnim, {
                    toValue: 1,
                    duration: 300
                })
            ]).start();
            // this.state.setProp(this.props.propName, '');
            // this.state.onChangeText('');
        }
    }

    onChangeText(t) {
        if (this.state.onChangeText) {
            this.state.onChangeText(t);
        } else {
            this.setState({
                text: t
            });
        }
        if(!this.props.disableOnBlur) this.check();
    }

    checkValidation = () => {
        let errorCount = this.validate(true);

        this.check()

        return errorCount
    }

    isPasswordValid = (password) => {
        let minMaxLength = /^[\s\S]{8,100}$/,
            upper = /[A-Z]/,
            lower = /[a-z]/,
            number = /[0-9]/;
        var count = 0;

        var regularExpression = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,100}$/;

        if (!regularExpression.test(password)) { count++; }
        if (!upper.test(password)) { count++; }
        return count==0 ? true : false;
    }

    validate = (silent) => {
        var errorCounter = 0;
        if (this.state.validationMode !== undefined) {
            let validationModeArr = this.state.validationMode.split('|');
            validationModeArr.map((validationType) => {
                if (this.validationSwitch(validationType)) {
                    errorCounter++;
                }
            })
        } else {
            if (this.validationSwitch('')) {
                errorCounter++;
            }
        }

        if (!silent) {
            this.setInterpolatedBorderColor(errorCounter > 0);
            errorCounter > 0 ? this.triggerError(true) : this.triggerError(false);
        } else {
            return errorCounter;
        }
    }

    validationSwitch = (validationType) => {
        switch (validationType) {
            case 'len4':
                if (this.props.text.length !== 4) {
                    this.setState({
                        error: true,
                        userError: this.buildError('4 digits required')
                    });
                    return true;
                }
                break;
            case 'len5':
                if (this.props.text.length !== 5) {
                    this.setState({
                        error: true,
                        userError: this.buildError('5 digits required')
                    });
                    return true;
                }
                break;
            case 'len6':
                if (this.props.text.length !== 6) {
                    this.setState({
                        error: true,
                        userError: this.buildError('6 digits required')
                    });
                    return true;
                }
                break;
            case 'len10':
                if (this.props.text.length !== 10) {
                    this.setState({
                        error: true,
                        userError: this.buildError('10 digits required')
                    });
                    return true;
                }
                break;
            case 'len12':
                if (this.props.text.length !== 12) {
                    this.setState({
                        error: true,
                        userError: this.buildError('12 digits required')
                    });
                    return true;
                }
                break;
            case 'len13':
                if (this.props.text.length !== 13) {
                    this.setState({
                        error: true,
                        userError: this.buildError('13 digits required')
                    });
                    return true;
                }
                break;
            case 'len16':
                if (this.props.text.length !== 16) {
                    this.setState({
                        error: true,
                        userError: this.buildError('16 digits required')
                    });
                    return true;
                }
                break;
            case 'username':
                var username = /^([0-9]+[a-zA-Z]+|[a-zA-Z]+[0-9]+)[0-9a-zA-Z]*$/;
                if (!username.test(this.props.text)) {
                    this.setState({
                        error: true,
                        userError: this.buildError('Username must be alphanumeric')
                    });
                    return true;
                }
                break;
            case 'number':
                var number = /^(\s*-?\d+(\.\d+)?)(\s*,\s*-?\d+(\.\d+)?)*$/;
                if (!number.test(this.props.text) && this.props.text != '') {
                    this.setState({
                        error: true,
                        userError: this.buildError('Not a number')
                    });
                    return true;
                }
                break;
            case 'money':
                var number = /^(.?\s*-?\d+(\.\d+)?)(\s*,\s*-?\d+(\.\d+)?)*$/;
                if (!number.test(this.props.text) && this.props.text != '') {
                    this.setState({
                        error: true,
                        userError: this.buildError('Not a money amount')
                    });
                    return true;
                }
                break;
            case 'mail':
                var mail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                if (!mail.test(this.props.text)) {
                    this.setState({
                        error: true,
                        userError: this.buildError('Valid mail required')
                    });
                    return true;
                }
                break;
            case 'phone':
                var phone = /^(\+?)(\d+){10,13}/;
                if (!phone.test(this.props.text) && this.props.text != '') {
                    this.setState({
                        error: true,
                        userError: this.buildError('Not a valid phone number')
                    });
                    return true;
                }
                break;
            case 'opt':
                this.setState({ error: false });
                return false;
                break;
            case 'req':
                if (this.props.text.length === 0) {
                    this.setState({
                        error: true,
                        userError: this.buildError('Cannot be empty')
                    });
                    return true;
                }
                return false;
                break;
            case 'password':
                var response = this.isPasswordValid(this.props.text);
                if (!response) {
                    this.setState({
                        error: true,
                        userError: this.buildError('Password must contain capital letter, small letters, digits and symbol')
                    });
                    return true;
                }
                return false;
                break;
            case 'custom':
                var response = this.props.customInputValidation(this.props.text);
                if (response.state) {
                    this.setState({
                        error: true,
                        userError: this.buildError(response.message)
                    });
                    return true;
                }
                return false;
                break;

            default:
                if (this.props.text.length === 0) {
                    this.setState({
                        error: true,
                        userError: this.buildError('Cannot be empty')
                    });
                    return true;
                }

                this.setState({
                    error: false,
                    userError: ''
                });
                return false;
                break;
        }
    }

    buildError = (error) => {
        return this.state.userError != '' ? this.state.userError + ' & ' + error : error;
    }

    getBorderColor(is_error) {
        //SET THESE COLORS IN GLOBALS
        return is_error ? inputBorderError : inputBorderOk
    }

    setInterpolatedBorderColor(is_error) {
        let value = is_error ? 1 : 0;
        Animated.timing(this.state.errorBarAnimation, {
            toValue: value,
            duration: 350,
            easing: Easing.inOut(Easing.quad)
        }).start();

        // this.setState({
        //     interpolatedColorAnimation: this.state.borderAnim.interpolate({
        //         inputRange: [0, 100],
        //         outputRange: [inputBorderOk, this.getBorderColor(is_error)]
        //     })
        // });
    }

    reset() {
        this.textInput.clear()
        this.setState(this.initialState)
        Animated.parallel([
            Animated.timing(this.state.checkOpacity, {
                toValue: 0,
                duration: 300,
            })
        ]).start();
    }

    onBlur() {
        if(!this.props.disableOnBlur) this.check();
        if (this.props.onBlur) this.props.onBlur();
    }

    check() {
        if (this.props.noCheck) {
            return;
        }
        this.setState({
            error: false,
            userError: '',
        }, () => {
            if (this.state.validateFn) {
                // this.state.setProp(this.props.propName, this.props.text);
                this.state.onChangeText(this.props.text);
                setTimeout(() => {
                    let userError = this.state.validateFn();
                    if (userError == "success") {
                        this.validate();
                    } else {
                        this.setState({
                            userError: userError,
                            error: true
                        }, () => {
                            this.triggerError(true);
                            // this.state.setProp(this.props.propName, '');
                            this.state.onChangeText('');
                            this.setInterpolatedBorderColor(true);
                        })
                    }
                }, 200)
            }
            else {
                this.props.checkBlurred ? '' : this.validate()
            }
        });
    }

    renderRightIcon() {
        if (this.props.rightIcon) {
            return (
                <View style={[style.rightIconPosition, { opacity: (this.state.righticon) ? 1 : 0 }]}>
                    <TouchableOpacity style={{ flex: 1 }} onPress={this.props.onClickRightIcon}>
                        <Text style={{ textAlign: 'right', justifyContent: 'center', right:10}}>
                            {this.rightIcon()}
                        </Text>
                    </TouchableOpacity>
                </View>
            )
        }
    }

    renderCheckSign() {
        if (!this.props.noCheck) {
            return (
                <Animated.View style={[this.state.validatePositioningStyle, { opacity: this.state.checkOpacity }]}>
                    <TouchableOpacity onPress={this.state.onFocus}>
                        <View style={this.state.validatedStyle}>
                            <IconCom style={style.checkSign} name='check' />
                        </View>
                    </TouchableOpacity>
                </Animated.View>
            )
        }else if (this.props.checkBlurred) {
            return (
                <View>
                    
                </View>
            )
        }
    }

    focusInput = () => {
        this.textInput.focus();
    }

    render() {
        return (
            <View style={[this.state.wrapperStyle, this.props.wrapperStyle]} key={this.state.resetKey}>
                <View style={style.labelWrapper}>
                    <Text style={this.state.labelStyle}>{this.state.label}</Text>
                </View>
                <Animated.View style={[this.props.noBorder ? null : style.borderStyle, { borderBottomColor: this.state.interpolatedColorAnimation }, this.state.inputStyle]}>
                    {this.iconComp()}
                    <Animated.View style={[{ opacity: this.state.errorAnim, position: 'absolute', right: 0, bottom: -5, }]}>
                        <Text style={this.state.labelErrorStyle}>{this.state.userError}</Text>
                    </Animated.View>
                    <Animated.View style={[style.errorBar, { opacity: this.state.errorBarAnimation, transform: [{ scale: this.state.errorBarAnimation }] }]}></Animated.View>
                    <Animated.View style={{ width: this.state.inputWidth }}>
                        <TextInput
                            ref={(ti) => { this.textInput = ti; }}
                            style={[style.textInputStyle, this.props.textStyle]}
                            value={this.props.text}
                            multiline={this.props.multiline}
                            numberOfLines={this.props.numberOfLines}
                            placeholder={this.props.placeholder}
                            placeholderTextColor={this.state.placeholderTextColor}
                            keyboardType={this.state.keyboardType}
                            secureTextEntry={this.props.secureTextEntry}
                            editable={this.props.editable}
                            onFocus={this.state.onFocus}
                            onBlur={this.onBlur.bind(this)}
                            onEndEditing={this.state.onEndEditing}
                            onChangeText={this.onChangeText.bind(this)}
                            maxLength={this.state.maxLength}
                            autoCorrect={this.state.autoCorrect}
                            autoCapitalize={this.state.autoCapitalize}
                            deepRef={this.state.deepRef}
                            underlineColorAndroid='transparent'
                            spellCheck={false}
                            onSubmitEditing={this.props.onSubmitEditing ? this.props.onSubmitEditing : Keyboard.dismiss}
                            returnKeyType={this.props.returnKeyType}
                            selectionColor={this.props.selectionColor}
                        />
                    </Animated.View>
                    {this.renderRightIcon()}
                    {this.renderCheckSign()}
                </Animated.View>
            </View>
        )
    }
}

export default Input;
