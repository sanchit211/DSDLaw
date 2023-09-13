import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/Home';
import Client from '../screens/Client';
import SignUp from '../screens/SignUp';

// Stack Navigation

const Stack = createNativeStackNavigator();

export const StackScreen = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Client" component={Client} />
        <Stack.Screen name="SignUp" component={SignUp} />
      </>
    </Stack.Navigator>
  );
};

export default function Routes() {
  return (
    <NavigationContainer>
      <StackScreen />
    </NavigationContainer>
  );
}
