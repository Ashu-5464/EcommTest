import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import Cart from '../components/Cart';
import { CartContext } from '../context/CartContext';

const CartScreen = ({ navigation }) => {
  const { cart, removeFromCart } = useContext(CartContext);

  return (
    <View style={styles.container}>
      <Cart cart={cart} removeFromCart={removeFromCart} />
      <Button title="Checkout" onPress={() => navigation.navigate('Checkout')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default CartScreen;
