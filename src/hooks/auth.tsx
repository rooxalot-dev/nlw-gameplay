import React, { ReactNode, createContext, useContext, useState } from "react";
import * as AuthSession from 'expo-auth-session';
import { discordAuthConfig } from "../configs/discordAuth";
import { api } from "../services/api";

type UserType = {
  id: string;
  username: string;
  firstName: string;
  email: string;
  avatar: string;
  token: string
};

type AuthContextData = {
  user: UserType,
  signIn: () => Promise<void>
}

type AuthProviderProps = {
  children: ReactNode
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<UserType>({} as UserType);
  const [loading, setLoading] = useState<boolean>(true);

  async function signIn() {
    const { DISCORD_CLIENT_ID, DISCORD_OAUTH_URL, DISCORD_RESPONSE_TYPE, DISCORD_SCOPE } = discordAuthConfig;
    const authUrl = `${api.defaults.baseURL}/oauth2/authorize?client_id=${DISCORD_CLIENT_ID}&redirect_uri=${DISCORD_OAUTH_URL}&response_type=${DISCORD_RESPONSE_TYPE}&scope=${DISCORD_SCOPE}`;
    console.log('authUrl', authUrl);

    try {
      setLoading(true);
      const sessionResult = await AuthSession.startAsync({ authUrl });
      console.log('sessionResult', sessionResult);
    } catch {
      throw new Error('Não foi possível realizar a autenticação');
    } finally {
      setLoading(false);
    }
  }

  return (
    <AuthContext.Provider value={{ user, signIn } as AuthContextData}>
      {children}
    </AuthContext.Provider>
  );
};

function useAuth() {
  const context = useContext(AuthContext);
  return context;
}

export {
  AuthProvider,
  useAuth
}
