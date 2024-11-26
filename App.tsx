/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import {View} from 'react-native';
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
    },
    {
      id: 2,
      name: 'Samsung Galaxy S21',
      color: 'White',
      price: 70000,
    },
    {
      id: 3,
      name: 'iPhone 13',
      color: 'Blue',
      price: 80000,
    },
    {
      id: 4,
      name: 'OnePlus 11',
      color: 'Green',
      price: 58000,
    },
    {
      id: 5,
      name: 'Google Pixel 7',
      color: 'Black',
      price: 60000,
    },
  ];

  return (
    <View>
      {/* Pass the data as a prop */}
      <Header data={data} />
      <Products data={data} />
    </View>
  );
};

export default App;
