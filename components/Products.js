import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, Image } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeToCart } from './redux/action';

const Products = ({ data }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart);
  const [added, setAdded] = useState(false);

  const handleAddToCart = (data) => {
    dispatch(addToCart(data));
  };

  const handleRemoveToCart = (data) => {
    dispatch(removeToCart(data.name));
  };

  useEffect(() => {
    let result = cartItems.filter((element) => {
      return element.name === data.name;
    });
    setAdded(result.length > 0);
  }, [cartItems, data.name]);

  return (
    <View style={styles.productCard}>
      <View style={styles.productDetailsContainer}>
        <Text style={styles.productName} numberOfLines={2}>
          {data.name}
        </Text>
        
        <Text style={styles.productDescription} numberOfLines={2}>
          {data.description}
        </Text>
        
        <View style={styles.productInfoRow}>
          <Text style={styles.productLabel}>Color:</Text>
          <Text style={styles.productDetails}>{data.color}</Text>
        </View>
        
        <View style={styles.productInfoRow}>
          <Text style={styles.productLabel}>Price:</Text>
          <Text style={styles.productPrice}>₹{data.price.toLocaleString()}</Text>
        </View>

        <TouchableOpacity
          onPress={() => added ? handleRemoveToCart(data) : handleAddToCart(data)}
          style={[
            styles.addButton, 
            { backgroundColor: added ? '#dc3545' : '#007bff' }
          ]}
        >
          <Text style={styles.addButtonText}>
            {added ? 'Remove Cart' : 'Add Cart'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  productCard: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 5,
    marginBottom: 15,
    overflow: 'hidden',
    alignSelf:"center"
  },
  imageContainer: {
    width: '40%',
  },
  productImage: {
    width: '100%',
    height: 230,
  },
  productDetailsContainer: {
    width: '60%',
    padding: 15,
    justifyContent: 'center',
    alignItems:"center",
  },
  productName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  productDescription: {
    fontSize: 14,
    color: '#666',
    marginBottom: 10,
  },
  productInfoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  productLabel: {
    fontSize: 16,
    color: '#666',
    marginRight: 10,
    fontWeight: '500',
  },
  productDetails: {
    fontSize: 16,
    color: '#333',
  },
  productPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#28a745',
  },
  addButton: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginTop: 10,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Products;