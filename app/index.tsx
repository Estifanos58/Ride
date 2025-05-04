import { View, Text, Pressable } from 'react-native';
import React from 'react';
import { Link, Redirect, useRouter } from 'expo-router';

const Home = () => {
  const router = useRouter();

  return <Redirect href={'/(auth)/welcome'}/>
};

export default Home;
