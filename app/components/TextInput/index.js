import React from 'react';
import { View, Text, TextInput, Animated } from 'react-native';

import IconFon from 'react-native-vector-icons/FontAwesome5';
import IconOct from 'react-native-vector-icons/Octicons';
import IconMat from 'react-native-vector-icons/MaterialIcons';
import IconCom from 'react-native-vector-icons/MaterialCommunityIcons';
import IconFea from 'react-native-vector-icons/Feather';
import IconSim from 'react-native-vector-icons/SimpleLineIcons';

import style from './styles'

class _TextInput extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            wrapperStyle: this.props.wrapperStyle || style.wrapperStyle,
            text: null,
            icon: this.props.icon || null,
            iconLib: this.props.iconLib,
            iconStyle: this.props.iconStyle || style.iconStyle,
            inputStyle: this.props.inputStyle || style.inputStyle,
            maxLength: this.props.maxLength || 40,
        };

        this.initialState = this.state;
        this.onChangeText = this.onChangeText.bind(this);
    }

    iconComp() {
        if (this.state.icon !== null) {
            switch (this.state.iconLib) {
                case 'MaterialCommunityIcons':
                    return <IconCom name={this.state.icon} style={this.state.iconStyle} />;
                    break;
                case 'Feather':
                    return <IconFea name={this.state.icon} style={this.state.iconStyle} />;
                    break;
                case 'Simple':
                    return <IconSim name={this.state.icon} style={this.state.iconStyle} />;
                    break;
                default:
                    return <View />;
                    break;
            }
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

    render() {
        return (
            <View style={[this.state.wrapperStyle, this.props.wrapperStyle]} key={this.state.resetKey}>
                <Animated.View style={[this.props.noBorder ? null : style.borderStyle, { borderBottomColor: this.state.interpolatedColorAnimation }, this.state.inputStyle]}>
                    {this.iconComp()}
                    <Animated.View style={{ width: this.state.inputWidth }}>
                        <TextInput
                            ref={(ti) => { this.textInput = ti; }}
                            style={[style.textInputStyle, this.props.textStyle]}
                            value={this.props.text}
                            onChangeText={this.onChangeText.bind(this)}
                            underlineColorAndroid='transparent'
                            {...this.props}
                        />
                    </Animated.View>
                </Animated.View>
            </View>
        )
    }
}

export default _TextInput;
