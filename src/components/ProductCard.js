import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const ProductCard = ({ product, addToCart }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{product.name}</Text>
      <Text style={styles.price}>${product.price}</Text>
      <Button title="Add to Cart" onPress={() => addToCart(product)} />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 15,
    margin: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 16,
    color: '#888',
    marginVertical: 10,
  },
});

export default ProductCard;
