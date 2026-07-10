import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import {Button} from "@react-navigation/elements"
import { useNavigation } from '@react-navigation/native';

const DetailedScreen = ({route}: any) => {
  const navigation =  useNavigation()
  const{username} = route.params;
  return (
    <View>
      <Text>{username}</Text>
      <Button title='Go Profile' onPress={() => navigation.navigate("Profile")}>Go to Profile</Button>
    </View>
  )
}

export default DetailedScreen

const styles = StyleSheet.create({})