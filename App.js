import { ScrollView, View } from 'react-native';
import React from 'react';
import Header from './components/Header';
import Products from './components/Products';

const App = () => {
  const data = [
    {
      id: 1,
      name: 'Motorola 40 neo',
      color: 'Black',
      price: 25000,
      image: 'https://via.placeholder.com/150/000000?text=Motorola+40+neo', // Example image
    },
    {
      id: 2,
      name: 'Samsung Galaxy S21',
      color: 'White',
      price: 70000,
      image: 'https://via.placeholder.com/150/FFFFFF?text=Samsung+S21', // Example image
    },
    {
      id: 3,
      name: 'iPhone 13',
      color: 'Blue',
      price: 80000,
      image: 'https://via.placeholder.com/150/0000FF?text=iPhone+13', // Example image
    },
    {
      id: 4,
      name: 'OnePlus 11',
      color: 'Green',
      price: 58000,
      image: 'https://via.placeholder.com/150/008000?text=OnePlus+11', // Example image
    },
    {
      id: 5,
      name: 'Google Pixel 7',
      color: 'Black',
      price: 60000,
      image: 'https://via.placeholder.com/150/000000?text=Pixel+7', // Example image
    },
  ];

  return (
    <View>
      <Header />
      <ScrollView>
        {data.map((item) => (
          <Products key={item.id} item={item} />
        ))}
      </ScrollView>
    </View>
  );
};

export default App;
