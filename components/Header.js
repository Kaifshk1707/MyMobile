import {View, Text} from 'react-native';
import React from 'react';

const Header = () => {
  return (
    <View>
      <Text style={{fontSize: 20, fontWeight: 'bold', padding:"5%",textAlign:"right",backgroundColor:"pink"}}>
        Product Count: 0
      </Text>
    </View>
  );
};

export default Header;
