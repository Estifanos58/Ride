import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function NotFound() {
  return (
    <View className='flex flex-row items-center justify-center'>
      <Text className='text-2xl text-red-600'>+not-found</Text>
    </View>
  )
}

const styles = StyleSheet.create({})