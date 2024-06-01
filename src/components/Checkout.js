import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Checkout = ({ cart, onCheckout }) => {
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <View style={styles.container}>
      <Text style={styles.total}>Total: ${total.toFixed(2)}</Text>
      <Button title="Checkout" onPress={onCheckout} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#fff',
  },
  total: {
    fontSize: 18,
    marginBottom: 10,
  },
});

export default Checkout;
