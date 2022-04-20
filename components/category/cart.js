import { StyleSheet, Text, TouchableOpacity, View, icon } from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons';


const cart = (props) => {
    return (
        <TouchableOpacity style={styles.ctn} onPress={() => {
            props.navigation.navigate('Cart', {
                he: "dfd"
            })
            // console.log("hello", props);
        }}>
            <View style={styles.cart}>
                <Text>
                    <FontAwesome name="cart-arrow-down" size={24} color="black" />  
                      ({props.totalItem} item): ${props.cartTotalAmount}

                </Text>
            </View>
        </TouchableOpacity>
    )
}

export default cart

const styles = StyleSheet.create({
    ctn: {
        flex: 1,
        // flexDirection: 'row',
        width: "75%",
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: "red",
        borderWidth: 1,
        borderColor: "green",
        borderRadius: 10
    },
    cart: {

    }
})