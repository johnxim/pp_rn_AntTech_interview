import { FlatList, StyleSheet, Text, View, Image, ImageBackground, TouchableOpacity } from 'react-native'
import React from 'react'

const listItem = (props) => {
    // console.log("Resdata/n/n/n/n//n/n/n/n/", props.data[0].id);
    const meals = props.data[0].item;
    const ItemRender = (itemData) => {
        // console.log(itemData.item.item);
        if (itemData.item.image === '') {
            itemData.item.image = 'https://upload.wikimedia.org/wikibooks/vi/thumb/7/78/Dui_ga_nuong_hosin_sauce_1.jpg/1200px-Dui_ga_nuong_hosin_sauce_1.jpg?20130307010222'
        }
        return (
            <TouchableOpacity style={styles.item} onPress={props.PressAddToCart.bind(this, itemData.item)}>
                <View style={styles.img1}>
                    <Image source={{ uri: itemData.item.image }} style={styles.image1} />
                </View>
                <View style={styles.img2}>
                    <ImageBackground source={{ uri: itemData.item.image }} style={styles.image2} imageStyle={{ opacity: 0.4 }} >
                    <View style={styles.info}>
                        <View>
                            <Text style={styles.name}>{itemData.item.name}</Text>
                        </View>
                        <View>
                            <Text style={styles.price}>${itemData.item.price}</Text>
                        </View>
                    </View>
                    </ImageBackground>
                </View>
            </TouchableOpacity>
        )
    }
    return (
        <View style={styles.container}>
            <FlatList data={meals} renderItem={ItemRender} keyExtractor={(item, index) => item.id} />
            {/* FlatList */}
            {/* <ItemRender />
            <ItemRender />
            <ItemRender /> */}

        </View>
    )
}

export default listItem

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
    },
    item: {
        height: 100,
        width: "100%",
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: "green",
        borderRadius: 10,
        overflow: 'hidden',
        marginVertical: 5
    },
    img1: {
        width: "25%",
        height: "100%"
    },
    img2: {
        width: "75%",
        height: "100%",

    },
    image1: {
        height: "100%",
        width: "100%"
    },
    image2: {
        height: "100%",
        width: "100%",
        opacity: 100
    },
    info: {
        justifyContent: 'center',
        alignItems: 'center',
        height: "100%"
    },
    name: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    price: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'yellow'
    }
})