import React from 'react';
import { StatusBar } from 'expo-status-bar';

import { SignIn } from './src/screens/SignIn';

export default function App() {
  return (
    <>
      <StatusBar style="inverted" translucent />
      <SignIn />
    </>
  );
}
