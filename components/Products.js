import {View, Text, StyleSheet, ScrollView} from 'react-native';
import React from 'react';

const Products = ({data}) => {
  return (
    <ScrollView contentContainerStyle={styles.productList}>
      {data.map(item => (
        <View key={item.id} style={styles.productItem}>
          <Text style={styles.productName}>{item.name}</Text>
          <Text>Color: {item.color}</Text>
          <Text>Price: ₹{item.price}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  productList: {
    padding: 10,
  },
  productItem: {
    padding: 15,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    marginBottom: 10,
    backgroundColor: '#f9f9f9',
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
});

export default Products;
