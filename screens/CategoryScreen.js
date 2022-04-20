import { StyleSheet, Text, View, ActivityIndicator, Button } from 'react-native'
import React, { useState, useEffect, useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux';

import CatNav from '../components/category/catNav';
import Cart from '../components/category/cart'
import ListItem from '../components/category/listItem';
import * as mealsActions from '../store/actions/meals'
import * as cartActions from '../store/actions/cart'

const CategoryScreen = (props) => {

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState();
    const [flag, setFlag] = useState('clickBug');
    const meals = useSelector(state => state.meals.mealss);
    const dispatch = useDispatch();

  const cartTotalAmount = useSelector(state => state.cart.totalAmount);
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

    const loadMeals = useCallback(async () => {
        setError(null);
        try {
            await dispatch(mealsActions.getMeals());
        } catch (err) {
            setError(err.message);
        }
    }, [dispatch, setIsLoading, setError]);

    useEffect(() => {
        setIsLoading(true);
        loadMeals().then(() => {
            setIsLoading(false);
        });
    }, [dispatch, loadMeals]);

    // console.log("Resdata-------------------------------------\n", meals);
    let mealsDisplay = []
    if (flag === 'clickBug') {
        mealsDisplay = meals.filter(cat => cat.name === 'Burgers')
    } else if (flag === 'clickPiz') {
        mealsDisplay = meals.filter(cat => cat.name === 'Pizza')
    } else if (flag === 'clickSand') {
        mealsDisplay = meals.filter(cat => cat.name === 'Sandwich')
    }
    // console.log("Resdata-------------------------------------\n", mealsDisplay);

    if (error) {
        return (
            <View>
                <Text>Error</Text>
                <Button
                    title="Try again"
                    onPress={loadMeals}
                />
            </View>
        );
    }

    if (isLoading) {
        return (
            <View style={styles.centered}>
                <ActivityIndicator size="large" />
            </View>
        );
    }

    if (!isLoading && mealsDisplay.length === 0) {
        return (
            <View style={styles.centered}>
                <Text>Meals trống</Text>
            </View>
        );
    }

    return (
        <View style={styles.ctn}>
            <View style={styles.nav}>
                <CatNav
                    onPressBug={() => {
                        setFlag("clickBug");
                    }}
                    onPressPiz={() => {
                        setFlag("clickPiz");
                    }}
                    onPressSand={() => {
                        setFlag("clickSand");
                    }}
                    flag={flag} />
            </View>
            <View style={styles.list}>
                <ListItem
                    data={mealsDisplay}
                    PressAddToCart={(item) => {
                        // console.log("hell", s);
                        dispatch(cartActions.addToCart(item));
                    }}
                />
            </View>
            <View style={styles.cart}>
                <Cart navigation={props.navigation} totalItem={cartItems.length} cartTotalAmount={cartTotalAmount} />
            </View>
        </View>
    )
}

export default CategoryScreen

const styles = StyleSheet.create({
    nav: {
        height: "7%"
    },
    ctn: {
        flex: 1,
        flexDirection: 'column',
        // width: "100%",
        // height: "100%"
    },
    list: {
        marginTop: 10,
        borderTopWidth: 1,
        borderTopColor: "brown",
        paddingBottom: 15,
        height: "82%",
        width: "90%",
        flexDirection: 'row',
        // justifyContent: 'center',
        alignSelf: 'center',
    },
    cart: {
        height: "7%",
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginBottom: "4%"
    }
})