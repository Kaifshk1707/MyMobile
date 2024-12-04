import React from 'react';
import {ScrollView, Text, TouchableOpacity, View, StyleSheet} from 'react-native';
import Header from './Header';
import Products from './Products';

const ProductWrapper = ({navigation}) => {
  const products = [
    {
      id: 1,
      name: 'Motorola 40 neo',
      color: 'Black',
      price: 25000,
      image: 'https://via.placeholder.com/300x300?text=Motorola+40+neo',
      description: 'Mid-range smartphone with excellent performance',
    },
    {
      id: 2,
      name: 'Samsung Galaxy S21',
      color: 'White',
      price: 70000,
      image: 'https://via.placeholder.com/300x300?text=Samsung+Galaxy+S21',
      description: 'Flagship device with advanced camera system',
    },
    {
      id: 3,
      name: 'iPhone 13',
      color: 'Blue',
      price: 80000,
      image: 'https://via.placeholder.com/300x300?text=iPhone+13',
      description: 'Powerful iOS smartphone with A15 Bionic chip',
    },
    {
      id: 4,
      name: 'OnePlus 11',
      color: 'Green',
      price: 58000,
      image: 'https://via.placeholder.com/300x300?text=OnePlus+11',
      description: 'Flagship killer with top-notch performance',
    },
    {
      id: 5,
      name: 'Google Pixel 7',
      color: 'Black',
      price: 60000,
      image: 'https://via.placeholder.com/300x300?text=Google+Pixel+7',
      description: 'Best-in-class camera and pure Android experience',
    },
    {
      id: 6,
      name: 'iPhone 14 Pro',
      color: 'Deep Purple',
      price: 130000,
      image: 'https://via.placeholder.com/300x300?text=iPhone+14+Pro',
      description: 'Premium smartphone with Dynamic Island',
    },
    {
      id: 7,
      name: 'Samsung Galaxy S23 Ultra',
      color: 'Cream',
      price: 110000,
      image: 'https://via.placeholder.com/300x300?text=Samsung+S23+Ultra',
      description: 'Top-tier Android smartphone with S Pen',
    },
    {
      id: 8,
      name: 'Nothing Phone (2)',
      color: 'White',
      price: 55000,
      image: 'https://via.placeholder.com/300x300?text=Nothing+Phone+2',
      description: 'Unique design with transparent back and Glyph interface',
    }
  ];

  return (
    <View style={styles.container}>
      <Header />
      <TouchableOpacity
        onPress={() => navigation.navigate("UserList")}
        style={styles.navigateButton}
      >
        <Text style={styles.navigateButtonText}>Go to UserList</Text>
      </TouchableOpacity>
      <ScrollView 
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        {products.map((item) => (
          <Products key={item.id} data={item} />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  scrollContainer: {
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  navigateButton: {
    backgroundColor: '#007bff',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
    marginHorizontal: 15,
  },
  navigateButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ProductWrapper;