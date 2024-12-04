import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from './redux/action';

const Products = ({ data }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state)=> state.cart);
  const [added,setAdded] = useState(false)

  const handleAddToCart = (data) => {
    dispatch(addToCart(data));
  };

  useEffect(()=>{
    if (cartItems && cartItems.length) {
      cartItems.forEach((item)=>{
         if (item.name === data.name) {
          setAdded(true)
         }
      })
    }
  },[cartItems])

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.productCard}>
        <Text style={styles.productName}>{data.name}</Text>
        <Text style={styles.productDetails}>Color: {data.color}</Text>
        <Text style={styles.productDetails}>Price: ₹{data.price}</Text>

    {added ? <TouchableOpacity
          onPress={() => handleAddToCart(data)}
          style={styles.addButton}
        >
          <Text style={styles.addButtonText}>Remove to Cart</Text>
        </TouchableOpacity>
        :
        <TouchableOpacity
          onPress={() => handleAddToCart(data)}
          style={styles.addButton}
        >
          <Text style={styles.addButtonText}>Add to Cart</Text>
        </TouchableOpacity>
        }

        
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    padding: '3%',
    backgroundColor: '#f5f5f5',
    flexGrow: 1,
    margin: '10%',
  },
  productCard: {
    padding: 20,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 4,
    marginBottom: 20,
  },
  productName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  productDetails: {
    fontSize: 16,
    color: '#555',
    marginBottom: 5,
  },
  addButton: {
    backgroundColor: '#007bff',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Products;
