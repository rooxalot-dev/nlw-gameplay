import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Home } from '../screens/Home';
import { SignIn } from '../screens/SignIn';
import { MatchDetails } from '../screens/MatchDetails';
import { MatchCreate } from '../screens/MatchCreate';

const Stack = createStackNavigator();

export function AuthRoutes() {
  return (
    <Stack.Navigator
      headerMode="none"
      screenOptions={{
        cardStyle: { backgroundColor: 'transparent' }
      }}>
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="MatchDetails" component={MatchDetails} />
      <Stack.Screen name="MatchCreate" component={MatchCreate} />
    </Stack.Navigator>
  );
}
