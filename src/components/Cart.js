import React from 'react';
import { View, Text, Button, StyleSheet, FlatList } from 'react-native';

const Cart = ({ cart, removeFromCart }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={cart}
        renderItem={({ item }) => (
          <View style={styles.cartItem}>
            <Text>{item.name}</Text>
            <Button title="Remove" onPress={() => removeFromCart(item.id)} />
          </View>
        )}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#fff',
  },
  cartItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
});

export default Cart;
