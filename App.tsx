import React from 'react';
import { isLoaded, useFonts } from 'expo-font';
import { Inter_400Regular, Inter_500Medium } from '@expo-google-fonts/inter'
import { Rajdhani_700Bold, Rajdhani_500Medium } from '@expo-google-fonts/rajdhani'
import AppLoading from 'expo-app-loading'

import { SignIn } from './src/screens/signIn';

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Rajdhani_700Bold,
    Rajdhani_500Medium
  });

  if (!fontsLoaded) {
    <AppLoading />
  }
  return (
    <SignIn />
  );


}
