import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Platform } from 'react-native';

import useCachedResources from './src/hooks/useCachedResources';
import useColorScheme from './src/hooks/useColorScheme';
import Navigation from './src/navigation';

import FirebaseInit from './src/subscribes/firebase';

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  useEffect(()=> FirebaseInit(),[]);

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider style={{marginTop: Platform.OS === 'ios' ? 0 : 25}}>
        <Navigation colorScheme={colorScheme} />
        <StatusBar  style="dark" />
      </SafeAreaProvider>
    );
  }
}
