import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const Header = ({ onSearch }) => {
  return (
    <View style={styles.header}>
      <TextInput
        style={styles.searchBar}
        placeholder="Search products..."
        onChangeText={onSearch}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 60,
    backgroundColor: '#f8f8f8',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  searchBar: {
    height: 40,
    backgroundColor: '#fff',
    borderRadius: 5,
    paddingHorizontal: 10,
  },
});

export default Header;
