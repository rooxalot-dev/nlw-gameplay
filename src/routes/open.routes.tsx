import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { SignIn } from '../screens/SignIn';

const Stack = createStackNavigator();

export function OpenRoutes() {
  return (
    <Stack.Navigator
      headerMode="none"
      screenOptions={{
        cardStyle: { backgroundColor: 'transparent' }
      }}>
      <Stack.Screen name="SignIn" component={SignIn} />
    </Stack.Navigator>
  );
}
