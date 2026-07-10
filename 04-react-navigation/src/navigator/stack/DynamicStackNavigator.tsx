import * as React from 'react';
import {NavigationContainer} from "@react-navigation/native"
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import { View } from 'react-native';
import HomeScreen from '../../screens/HomeScreen';
import DetailedScreen from '../../screens/DetailedScreen';
import Profiles from '../../screens/Profiles';


const Stack = createNativeStackNavigator()

function MyStack() {

  return (
    <Stack.Navigator>
      <Stack.Screen  name='Home' component={HomeScreen} />
      <Stack.Screen  name='Details' component={DetailedScreen} />
      <Stack.Screen  name='Profile' component={Profiles} />
      
    </Stack.Navigator>
  )
}

export default function DynamicStackNavigator() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  )
}