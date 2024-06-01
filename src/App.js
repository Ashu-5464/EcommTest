
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AuthContextProvider from './context/AuthContext';
import CartContextProvider from './context/CartContext';
import LoginScreen from './screens/LoginScreen';
import ProductListingScreen from './screens/ProductListingScreen';
import CartScreen from './screens/CartScreen';
import CheckoutScreen from './screens/CheckoutScreen';
import Header from './components/Header';

const Stack = createStackNavigator();

export default function App() {
  return (
    <AuthContextProvider>
      <CartContextProvider>
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
              options={{
                header: () => <Header />
              }}
            />
            <Stack.Screen
              name="Cart"
              component={CartScreen}
              options={{ headerTitle: 'Cart' }}
            />
            <Stack.Screen
              name="Checkout"
              component={CheckoutScreen}
              options={{ headerTitle: 'Checkout' }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </CartContextProvider>
    </AuthContextProvider>
  );
}
