import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native'
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Entypo } from '@expo/vector-icons';

import * as cartActions from '../store/actions/cart'

const CartScreen = (props) => {

  const dispatch = useDispatch();

  const cartTotalAmount = useSelector(state => state.cart.totalAmount);
  const quantityt = useSelector(state => state.cart.quantityt);
  const cartItems = useSelector(state => {
    const transformedCartItems = [];
    for (const key in state.cart.items) {
      // console.log("state.cart.items..................................................\n\n\n\n",state.cart.items);
      transformedCartItems.push({
        prodId: key,
        prodName: state.cart.items[key].prodName,
        prodPrice: state.cart.items[key].prodPrice,
        quantity: state.cart.items[key].quantity,
        sum: state.cart.items[key].sum
      });
    }
    return transformedCartItems
  });

  // console.log(cartItems);

  useEffect(() => {
    props.navigation.setOptions({
      headerTitle: "Back",
    })
  }, []);


  // console.log(props);
  const ItemTitle = (pr) => {
    return (
      <View style={{ ...styles.cart, ...pr.style }}>
        <View style={styles.info}>
          <View style={styles.tt}>
            <Text style={styles.title}>{pr.item1}</Text>
          </View>
          <View style={styles.tt}>
            <Text style={styles.title}>{pr.item2}</Text>
          </View>
          <View style={styles.tt}>
            <Text style={styles.title}>{pr.item3}</Text>
          </View>
        </View>
      </View>
    )
  }

  const CartItem = (pr) => {
    return (
      <View style={styles.cart1}>
        <View style={styles.info}>
          <View style={styles.tt}>
            <Text style={styles.titleinfo}>{pr.item1}</Text>
          </View>
          <View style={styles.tt}>
            <Entypo name="minus" style={styles.icon} size={25} color={"red"} onPress={pr.minusPress} />
            <Text style={styles.titleinfo}>{pr.item2}</Text>
            <Entypo name="plus" style={styles.icon} size={25} color={"green"} onPress={pr.plusPress} />
          </View>
          <View style={styles.tt}>
            <Text style={styles.titleinfo}>${pr.item3}</Text>
          </View>
        </View>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <ItemTitle style={{ borderBottomWidth: 1, borderColor: "black" }} item1="Items" item2="Quantity" item3="Price" />
      <FlatList data={cartItems} renderItem={itemData => (
        <CartItem
          item1={itemData.item.prodName}
          item2={itemData.item.quantity}
          item3={itemData.item.prodPrice}
          minusPress={() => {
            // console.log("-", itemData.item.prodId);
            const mealInfo = {
              prodId: itemData.item.prodId,
              prodPrice: itemData.item.prodPrice  
            }
            dispatch(cartActions.minusItem(mealInfo));
          }}
          plusPress={() => {
            // console.log("+", itemData.item.prodId);
            const mealInfo = {
              prodId: itemData.item.prodId,
              prodPrice: itemData.item.prodPrice  
            }
            dispatch(cartActions.plusItem(mealInfo));
          }} />
      )} keyExtractor={(item, index) => index} />
      <ItemTitle style={{ borderTopWidth: 1, borderColor: "black" }} item1="Total" item2={quantityt} item3={'$' + cartTotalAmount} />
    </View>
  )
}

const styles = StyleSheet.create({
  icon: {
    marginHorizontal: 10,
  },
  cartItem: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  titleinfo: {
    fontSize: 18,
    textAlign: 'center'
  },
  container: {
    // flex: 1,
    marginTop: 10,
    flexDirection: 'column'
  },
  cart: {
    width: "90%",
    alignSelf: 'center',
  },
  cart1: {
    width: "90%",
    alignSelf: 'center',
    paddingVertical: 5
  },
  info: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  title: {
    fontWeight: 'bold',
    fontSize: 25,
    textAlign: 'center'
  },
  tt: {
    width: "33.33333%",
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default CartScreen