import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import LoginScreen from './screens/LoginScreen';
import ProductListingScreen from './screens/ProductListingScreen';
import CartScreen from './screens/CartScreen';
import CheckoutScreen from './screens/CheckoutScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Products"
          component={ProductListingScreen}
        />
        <Stack.Screen
          name="Cart"
          component={CartScreen}
        />
        <Stack.Screen
          name="Checkout"
          component={CheckoutScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
