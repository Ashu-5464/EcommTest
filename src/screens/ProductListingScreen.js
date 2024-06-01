import React, { useContext, useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import ProductList from '../components/ProductList';
import FilterSort from '../components/FilterSort';
import { CartContext } from '../context/CartContext';
import { getProducts } from '../services/api';

const ProductListingScreen = ({ navigation }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    const fetchProducts = async () => {
      const products = await getProducts();
      setProducts(products);
      setFilteredProducts(products);
    };

    fetchProducts();
  }, []);

  const handleFilterSort = (type) => {
    let sortedProducts = [...products];

    if (type === 'price') {
      sortedProducts.sort((a, b) => a.price - b.price);
    } else if (type === 'category') {
      sortedProducts = sortedProducts.filter(product => product.category === 'CategoryName');
    }

    setFilteredProducts(sortedProducts);
  };

  return (
    <View style={styles.container}>
      <FilterSort onFilterSort={handleFilterSort} />
      <ProductList products={filteredProducts} addToCart={addToCart} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default ProductListingScreen;
