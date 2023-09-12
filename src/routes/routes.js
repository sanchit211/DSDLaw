import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Image, Platform} from 'react-native';
import {useSelector} from 'react-redux';

import {customFont} from '../common/custom-font';
import COLORS from '../common/colors';
import {WD, HD} from '../common/responsive';
import Home from '../screens/Home';

// Stack Navigation

const Stack = createNativeStackNavigator();

export const StackScreen = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <>
        <Stack.Screen name="Home" component={Home} />
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
