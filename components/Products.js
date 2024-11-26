import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { addToCart } from "./redux/action";
import { useDispatch } from 'react-redux';

const Products = ({ item }) => {
  const dispatch = useDispatch()
  const handleAddToCart = (product) => {
    console.warn('Added to Cart:', product.name);
    dispatch(addToCart(item))
    
  };

  return (
    <View
      style={{
        padding: 15,
        backgroundColor: '#f5f5f5',
      }}
    >
      <View
        style={{
          padding: 20,
          marginBottom: 15,
          borderRadius: 10,
          backgroundColor: '#fff',
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.1,
          shadowRadius: 5,
          elevation: 3,
        }}
      >
        <Image
          source={{ uri: item.image }}
          style={{
            width: '100%',
            height: 150,
            borderRadius: 10,
            marginBottom: 15,
          }}
          resizeMode="cover"
        />
        <Text
          style={{
            fontSize: 18,
            fontWeight: '700',
            marginBottom: 10,
            color: '#333',
          }}
        >
          {item.name}
        </Text>
        <Text
          style={{
            fontSize: 14,
            color: '#555',
            marginBottom: 5,
          }}
        >
          Color: {item.color}
        </Text>
        <Text
          style={{
            fontSize: 14,
            color: '#555',
            marginBottom: 15,
          }}
        >
          Price: ₹{item.price}
        </Text>
        {/* Add to Cart Button */}
        <TouchableOpacity
          onPress={() => handleAddToCart(item)}
          style={{
            backgroundColor: '#007BFF',
            paddingVertical: 12,
            paddingHorizontal: 20,
            borderRadius: 8,
            alignItems: 'center',
            justifyContent: 'center',
            shadowColor: '#007BFF',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.3,
            shadowRadius: 4,
            elevation: 5,
          }}
          activeOpacity={0.8}
        >
          <Text
            style={{
              color: '#fff',
              fontSize: 16,
              fontWeight: '600',
            }}
          >
            Add to Cart
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Products;
