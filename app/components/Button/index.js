import React, { Component } from 'react';
import { Text, StyleSheet, ActivityIndicator, Platform } from 'react-native';
import * as colors from '../../assets/styles/colors';
import _TouchItem from '../TouchItem';
import appStyles from '../../assets/styles/styles';

export default class _Button extends Component {
	constructor(props) {
		super(props);
		this.state = {
			
		};
	}

	render() {
		const color = this.props.whiteButton ? colors.white : colors.primaryColor;
		const font = this.props.whiteButton ? colors.primaryColor : colors.white;
	
		return (
			<_TouchItem
				onPress={() => { this.props.onPress() }}
                style={[ appStyles.button, { backgroundColor: color } ]}
            >
				<Text style={[appStyles.buttonText, { color: font }]}> {this.props.text} </Text>
			</_TouchItem>
		);
	}
}