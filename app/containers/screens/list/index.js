import React, { Component } from 'react'
import { 
    Text, 
    View,
    Image,
    FlatList
} from 'react-native';

import _ListItem from '../../../components/List';
import { appImages, avatars } from '../../../assets/images/images';

export default class List extends Component {

    renderList = (data) => {
        let item = data.item
        return(
            <_ListItem text={item.text} image={item.image} description={item.description}/>
        )
    }

    render(){
        return(
            <View style={{ flex: 1 }}>
                <FlatList 
                    ListEmptyComponent={() => (
                        <View style={styles.emptyView}>
                            <Image source={appImages.emptyImage}/>
                            <Text style={styles.emptyList}>{'List is empty'}</Text>
                        </View>
                    )}
                    alwaysBounceVertical={false}
                    style={{ flex: 1 }}
                    data={LISTDATA}
                    renderItem={this.renderList}
                    keyExtractor={(item, index) => index.toString()}
                />
            </View>
        )
    }
}

const LISTDATA = [
    {
        text: 'List Item 1',
        description: 'Lorem Ipsum Lorem Ipsum',
        image: avatars.one
    },
    {
        text: 'List Item 2',
        description: 'Lorem Ipsum Lorem Ipsum',
        image: avatars.two
    },
    {
        text: 'List Item 3',
        description: 'Lorem Ipsum Lorem Ipsum',
        image: avatars.three
    },
    {
        text: 'List Item 4',
        description: 'Lorem Ipsum Lorem Ipsum',
        image: avatars.four
    },
    {
        text: 'List Item 5',
        description: 'Lorem Ipsum Lorem Ipsum',
        image: avatars.five
    },
    {
        text: 'List Item 6',
        description: 'Lorem Ipsum Lorem Ipsum',
        image: avatars.six
    }
]