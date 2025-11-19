import { Stack } from 'expo-router'
import React from 'react'
import { StyleSheet } from 'react-native'

const _layout = () => {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        headerStyle: {
          backgroundColor: '#f5f5f5',
        },
        headerTintColor: '#000',
        headerTitleStyle: {
          fontWeight: '600',
        },
      }}
      
    />
  )
}

export default _layout

const styles = StyleSheet.create({})