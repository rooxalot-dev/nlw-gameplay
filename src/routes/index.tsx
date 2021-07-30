import React from "react";
import { NavigationContainer } from '@react-navigation/native';

import { useAuth } from "../hooks/auth";
import { AppRoutes } from './app.routes';
import { OpenRoutes } from './open.routes';

export function Routes() {
  const { user } = useAuth();

  return (
    <NavigationContainer>
      {user.id ? <AppRoutes /> : <OpenRoutes />}
    </NavigationContainer>
  );
}
