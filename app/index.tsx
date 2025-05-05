import { View, Text, Pressable } from 'react-native';
import React from 'react';
import { Link, Redirect, useRouter } from 'expo-router';
import { useAuth } from '@clerk/clerk-expo'

const Home = () => {
  const router = useRouter();
  const { isSignedIn } = useAuth()

  if (isSignedIn) {
    return <Redirect href={'/(root)/(tabs)/home'} />
  }

  return <Redirect href={'/(auth)/welcome'}/>
};

export default Home;
