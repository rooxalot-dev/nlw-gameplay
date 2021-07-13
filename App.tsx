import React from 'react';
import { Text, View } from 'react-native';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import { Inter_400Regular, Inter_500Medium, Inter_700Bold } from '@expo-google-fonts/inter';
import { Rajdhani_400Regular, Rajdhani_500Medium, Rajdhani_700Bold } from '@expo-google-fonts/rajdhani';
import { StatusBar } from 'expo-status-bar';

import { SignIn } from './src/screens/SignIn';
import { Background } from './src/components/Background';
import { Home } from './src/screens/Home';
import { Routes } from './src/routes';


export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_700Bold,
    Rajdhani_400Regular,
    Rajdhani_500Medium,
    Rajdhani_700Bold
  });

  if (!fontsLoaded) {
    return <AppLoading />
  } else {
    return (
      <Background>
        <StatusBar style="inverted" translucent />
        <Routes />
      </ Background>
    );
  }


}
