import React from 'react';
import { FlatList } from 'react-native';
import ProductCard from './ProductCard';

const ProductList = ({ products, addToCart }) => {
  return (
    <FlatList
      data={products}
      renderItem={({ item }) => <ProductCard product={item} addToCart={addToCart} />}
      keyExtractor={item => item.id.toString()}
    />
  );
};

export default ProductList;
