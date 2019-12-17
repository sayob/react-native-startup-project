import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';

export default class TouchItem extends Component {
	render() {
		return (
            <TouchableOpacity {...this.props}>
                {this.props.children}
            </TouchableOpacity>
		)
	}
}