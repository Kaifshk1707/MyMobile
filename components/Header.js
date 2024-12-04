import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useSelector } from "react-redux";

const Header = () => {
  const cartData = useSelector((state) => state.cart);
  const [cartItem, setCartItems] = useState(0);

  useEffect(() => {
    setCartItems(cartData.length);
  }, [cartData]);

  return (
    <View style={styles.headerContainer}>
      <View style={styles.cartBadgeContainer}>
        <Text style={styles.cartBadgeText}>{cartItem}</Text>
      </View>
      <Text style={styles.headerTitle}>My Store</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: '#007bff',
    paddingVertical: 15,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  headerTitle: {
    color: '#ffffff',
    fontSize: 22,
    fontWeight: 'bold',
  },
  cartBadgeContainer: {
    backgroundColor: '#dc3545',
    borderRadius: 20,
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cartBadgeText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Header;