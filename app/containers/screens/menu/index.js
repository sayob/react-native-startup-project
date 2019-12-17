import React, { Component } from 'react'
import { Text, View, Image, ScrollView } from 'react-native';

import _TouchItem from '../../../components/TouchItem';

import { appImages } from '../../../assets/images/images';
import styles from '../../../assets/styles/styles';

export default class Menu extends Component {

    render() {
        return (
            <View style={[styles.view, styles.coloredBackground]}>
                <ScrollView alwaysBounceVertical={false} style={{flex: 1}}>
                    <View style={{paddingHorizontal: 10}} >
                        {
                            Kittens.map((item, index) => {
                                return(
                                    <_TouchItem key={index} onPress={() => this.props.navigation.navigate(item.route)}>
                                        <View style={styles.containerStyle}>
                                            <View style={styles.innerContainer}>
                                                <View style={styles.imageContainer}>
                                                    <Image style={styles.image} resizeMode='cover' height={175} width={'100%'} source={item.image}/>
                                                </View>
                                                <Text style={styles.text}>{item.text}</Text>
                                            </View>
                                        </View>
                                    </_TouchItem>
                                )
                            })
                        }
                    </View>    
                </ScrollView>
            </View>
        )
    }
}

const Kittens = [
    {
        text: 'Menu Item 1',
        image: appImages.kitten1
    },
    {
        text: 'Menu Item 2',
        image: appImages.kitten2
    },
    {
        text: 'Menu Item 3',
        image: appImages.kitten3
    },
    {
        text: 'Menu Item 4',
        image: appImages.kitten4
    }
]
