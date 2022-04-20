import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const item = () => {
  return (
    <View style={styles.container}>
        <View>
            <Image source={{ uri: props.image1 }} style={styles.image1} />
        </View>
        <View>
            <ImageBackground source={{uri: props.image2}} style={styles.image2} />
        </View>
    </View>
  )
}

export default item

const styles = StyleSheet.create({})