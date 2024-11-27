import {View, Text} from 'react-native';
import React from 'react';

const Header = () => {
  return (
    <View style={{backgroundColor:"pink",padding:"5%"}}>
      <Text style={{fontSize: 20, fontWeight: 'bold',textAlign:"right"}}>
        0
      </Text>
    </View>
  );
};

export default Header;
