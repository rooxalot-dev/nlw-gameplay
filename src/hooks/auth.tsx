import React, { ReactNode, createContext, useContext, useState } from "react";
import * as AuthSession from 'expo-auth-session';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { UserType } from "../models/UserModel";
import { api } from "../services/api";
import { COLLECTION_USERS } from "../configs/storage";
import { useEffect } from "react";

const { DISCORD_CLIENT_ID } = process.env;
const { DISCORD_OAUTH_URL } = process.env;
const { DISCORD_RESPONSE_TYPE } = process.env;
const { DISCORD_SCOPE } = process.env;
const { DISCORD_CDN_IMAGE } = process.env;

type AuthContextData = {
  user: UserType,
  loadingUserInfo: boolean,
  signIn: () => Promise<void>
}

type AuthProviderProps = {
  children: ReactNode
}

type AuthResonseType = AuthSession.AuthSessionResult & {
  params: {
    access_token?: string,
    error?: string;
  }
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<UserType>({} as UserType);
  const [loadingUserInfo, setLoadingUserInfo] = useState<boolean>(false);

  async function signIn(): Promise<void> {
    const authUrl = `${api.defaults.baseURL}/oauth2/authorize?client_id=${DISCORD_CLIENT_ID}&redirect_uri=${DISCORD_OAUTH_URL}&response_type=${DISCORD_RESPONSE_TYPE}&scope=${DISCORD_SCOPE}`;

    try {
      setLoadingUserInfo(true);

      const { type, params } = await AuthSession.startAsync({ authUrl }) as AuthResonseType;

      if (type === 'success' && !params.error) {
        api.defaults.headers.authorization = `Bearer ${params.access_token}`;
        const { data: userInfo } = await api.get<UserType>('/users/@me');

        const firstName = userInfo.username.split(' ')[0];
        const avatar = `${DISCORD_CDN_IMAGE}/avatars/${userInfo.id}/${userInfo.avatar}.png?desired_size=70`;
        const token = params.access_token;

        const userData: UserType = {
          ...userInfo,
          firstName,
          avatar,
          token: String(token)
        };

        await AsyncStorage.setItem(COLLECTION_USERS, JSON.stringify(userData));
        setUser(userData);
      }
    } catch {
      throw new Error('Não foi possível realizar a autenticação');
    } finally {
      setLoadingUserInfo(false);
    }
  }

  async function loadUserStorage(): Promise<void> {
    const storageStringfiedUser = await AsyncStorage.getItem(COLLECTION_USERS);
    if (storageStringfiedUser) {
      const storageUser = JSON.parse(storageStringfiedUser) as UserType;
      api.defaults.headers.authorization = `Bearer ${storageUser.token}`;
      setUser(storageUser);
    }
  }

  useEffect(() => {
    loadUserStorage();
  }, []);

  return (
    <AuthContext.Provider value={{ user, signIn, loadingUserInfo } as AuthContextData}>
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
