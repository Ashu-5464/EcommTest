import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

const FilterSort = ({ onFilterSort }) => {
  return (
    <View style={styles.container}>
      <Button title="Sort by Price" onPress={() => onFilterSort('price')} />
      <Button title="Filter by Category" onPress={() => onFilterSort('category')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#f8f8f8',
  },
});

export default FilterSort;
