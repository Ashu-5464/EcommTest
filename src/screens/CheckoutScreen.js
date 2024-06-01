import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import Checkout from '../components/Checkout';
import { CartContext } from '../context/CartContext';

const CheckoutScreen = () => {
  const { cart } = useContext(CartContext);

  const handleCheckout = () => {
    alert('Checkout successful');
  };

  return (
    <View style={styles.container}>
      <Checkout cart={cart} onCheckout={handleCheckout} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default CheckoutScreen;
