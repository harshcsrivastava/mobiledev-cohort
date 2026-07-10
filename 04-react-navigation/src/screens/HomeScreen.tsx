import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {Button} from "@react-navigation/elements"
import { Link, useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  // Mentos Zindagi
  const navigation = useNavigation()
  return (
    <View>
      <Text>HomeScreen</Text> 
      <Button onPress={() => navigation.navigate("Details", {username: "Harsh"})}>Details</Button>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})