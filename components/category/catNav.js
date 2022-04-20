import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

const catNav = props => {
    return (
        <View style={styles.container}>
                <TouchableOpacity style={{ borderColor: props.flag === "clickBug" ? "green" : "", borderBottomWidth: props.flag === "clickBug" ? 2 : 0 }} onPress={props.onPressBug}>
                    <View style={styles.nav}>
                        <Text>Burger</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={{ borderColor: props.flag === "clickPiz" ? "green" : "", borderBottomWidth: props.flag === "clickPiz" ? 2 : 0 }} onPress={props.onPressPiz}>
                    <View style={styles.nav}>
                        <Text>Pizza</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={{ borderColor: props.flag === "clickSand" ? "green" : "", borderBottomWidth: props.flag === "clickSand" ? 2 : 0 }} onPress={props.onPressSand}>
                    <View style={styles.nav}>
                        <Text>Sandwich</Text>
                    </View>
                </TouchableOpacity>
        </View>
    )
}

export default catNav;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginLeft: 30,
    },
    menu: {
    },
    nav: {
        justifyContent:'center',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 10,
        height: 50
    }
})