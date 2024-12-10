import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ProductWrapper from './components/ProductWrapper';
import UserList from './components/UserList';
import LoginScreen from './components/LoginScreen';
import SignUpScreen from './components/SignUpScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Login' component={LoginScreen}   options={{ headerShown: false }} />
        <Stack.Screen name='SignUp' component={SignUpScreen}   options={{ headerShown: false }} />
        <Stack.Screen name='Home' component={ProductWrapper }/>
        <Stack.Screen name='UserList' component={UserList }/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
