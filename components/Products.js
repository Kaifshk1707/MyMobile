import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {useDispatch} from "react-redux";
import {addToCart} from "./redux/action";
const Products = ({data}) => {
  const dispatch = useDispatch();
  const handleAddToCart = (data)=>{
    console.log("Data Successful",data);
    dispatch(addToCart(data)); // Dispatching the action
  }
  return (
    <View style={styles.productItem}>
      <Text style={styles.productName}>{data.name}</Text>
      <Text>Color: {data.color}</Text>
      <Text>Price: ₹{data.price}</Text>
      <TouchableOpacity onPress={handleAddToCart} style={styles.button}>
        <Text style={styles.buttonText}>Add to Cart</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
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
  button: {
    marginTop: 10,
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default Products;
