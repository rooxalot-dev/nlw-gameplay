import React from "react";
import { NavigationContainer } from '@react-navigation/native';

import { useAuth } from "../hooks/auth";
import { AuthRoutes } from './auth.routes';
import { OpenRoutes } from './open.routes';

export function Routes() {
  const { user } = useAuth();

  return (
    <NavigationContainer>
      {user.id ? <AuthRoutes /> : <OpenRoutes />}
    </NavigationContainer>
  );
}
