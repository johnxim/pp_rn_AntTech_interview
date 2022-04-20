import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CartScreen from '../screens/CartScreen';
import CategoryScreen from '../screens/CategoryScreen'

const Stack = createNativeStackNavigator();

const MealsNavigator = () => {
    return (
        <Stack.Navigator initialRouteName='Category' >
            <Stack.Screen name="Category" component={CategoryScreen} />
            <Stack.Screen name="Cart" component={CartScreen} />
        </Stack.Navigator>
    );
}

export default function MainNavigator() {
    return (
        <NavigationContainer>
            <MealsNavigator />
        </NavigationContainer>
    );
}
