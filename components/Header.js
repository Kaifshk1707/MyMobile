import {View, Text} from 'react-native';
import React from 'react';

const Header = ({data}) => {
  return (
    <View>
      <Text style={{fontSize: 20, fontWeight: 'bold', marginBottom: 10}}>
        Product Count: {data.length}
      </Text>
    </View>
  );
};

export default Header;
