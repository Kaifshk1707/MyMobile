import {View, Text} from 'react-native';
import React, { useEffect, useState } from 'react';
import {useSelector} from "react-redux";

const Header = () => {

  const cartData = useSelector((state)=> state.cart);
  const [cartItem,setCartItems] = useState(0)
  useEffect(()=>{
setCartItems(cartData.length)
  },[cartData])

  return (
    <View style={{backgroundColor:"lightblue",padding:"5%",alignItems:"flex-end"}}>
      <Text style={{fontSize: 20, fontWeight: 'bold',textAlign:"center",backgroundColor:"darkblue",color:"#fff",width:"10%",height:30,borderRadius:5}}>
       {cartItem}
      </Text>
    </View>
  );
};

export default Header;
