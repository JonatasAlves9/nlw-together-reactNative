import React from 'react';
import { StatusBar } from 'react-native';
import { useFonts } from 'expo-font';
import { Inter_400Regular, Inter_500Medium } from '@expo-google-fonts/inter'
import { Rajdhani_700Bold, Rajdhani_500Medium } from '@expo-google-fonts/rajdhani'
import AppLoading from 'expo-app-loading'
import { Background } from './src/components/Background';

import { SignIn } from './src/screens/signIn';
import { Routes } from './src/routes';

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
    <Background>
      <StatusBar
        barStyle='light-content'
        backgroundColor="transparent"
        translucent //mostra a barra de status 
      />
      <Routes />
    </Background>
  );


}
