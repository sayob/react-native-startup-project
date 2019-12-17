import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import * as colors from '../../assets/styles/colors';

class _ListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <View style={styles.cardView}>
                <View style={styles.innerView}>
                    <View style={{ flexDirection: 'row'}}>
                        <Image source={this.props.image} style={styles.imageStyle} width={70} height={70}/>
                        <View style={styles.textView}>
                            <Text style={styles.textTitle}>{this.props.text}</Text>
                            <Text ellipsizeMode='tail' numberOfLines={2} style={styles.textDescription}>{this.props.description}</Text>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

export default _ListItem;


const styles = StyleSheet.create({
    innerView: { 
        flexDirection: 'row', 
        paddingVertical: 10, 
        borderBottomColor: '#F7F7F7', 
        borderBottomWidth: 1, 
        width: '100%', 
        justifyContent: 'space-between'
    },

    imageStyle: {
        alignSelf: 'center', 
        borderRadius: 35
    },

    cardView: {
        flexDirection: 'row',
        backgroundColor: 'white',
        padding: 10
    },

    textTitle: {
        marginLeft: 10,
        paddingVertical: 2,
        color: colors.black,
        fontSize: 14,
    },

    textDescription: {
        marginLeft: 10,
        color: colors.grey,
        fontSize: 12,
    },
    
    textView: { 
        flexDirection: 'column', 
        marginLeft: 12,
        justifyContent: 'center',
        width: '80%'
    },

});