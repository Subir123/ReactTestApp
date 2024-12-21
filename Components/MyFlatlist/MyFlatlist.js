import { StatusBar, StyleSheet, Text, View, Dimensions } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native'
import Cart from '../Cart'

const MyFlatlist = ({ data, productArray, onAddToCart }) => {
    const addToCart = list => {
        onAddToCart(list)
    };

    return (
        <View style={styles.container}>
            <FlatList
                data={data}
                keyExtractor={(item) => item.id.toString()}
                numColumns={2}
                renderItem={({ item }) => <Cart product={item} productArray={productArray} handelAddToCart={addToCart} />}
                ListFooterComponent={<View style={{ marginBottom: 100 }}></View>}
                ListHeaderComponent={<View style={{ marginTop: 10 }}></View>}
            />
        </View>
    )
}

export default MyFlatlist

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // padding: 10,
    }
})
