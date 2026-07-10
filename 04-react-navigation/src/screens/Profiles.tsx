import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button } from '@react-navigation/elements';
import { useNavigation } from '@react-navigation/native';

const Profiles = () => {
  const nav = useNavigation()
  return (
    <View>
      <Text>Profiles</Text>
      <Button title='Go Home' onPress={() => nav.popToTop()}>Home</Button>
    </View>
  )
}

export default Profiles

const styles = StyleSheet.create({})