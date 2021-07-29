import React, { ReactNode, createContext, useContext, useState } from "react";
import * as AuthSession from 'expo-auth-session';

import { discordAuthConfig } from "../configs/discordAuth";
import { UserType } from "../models/UserModel";
import { api } from "../services/api";


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
    access_token: string
  }
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<UserType>({} as UserType);
  const [loadingUserInfo, setLoadingUserInfo] = useState<boolean>(false);

  async function signIn() {
    const { DISCORD_CLIENT_ID, DISCORD_OAUTH_URL, DISCORD_RESPONSE_TYPE, DISCORD_SCOPE, DISCORD_CDN_IMAGE } = discordAuthConfig;
    const authUrl = `${api.defaults.baseURL}/oauth2/authorize?client_id=${DISCORD_CLIENT_ID}&redirect_uri=${DISCORD_OAUTH_URL}&response_type=${DISCORD_RESPONSE_TYPE}&scope=${DISCORD_SCOPE}`;

    try {
      setLoadingUserInfo(true);

      const { type, params } = await AuthSession.startAsync({ authUrl }) as AuthResonseType;

      if (type === 'success') {
        api.defaults.headers.authorization = `Bearer ${params.access_token}`;
        const { data: userInfo } = await api.get<UserType>('/users/@me');

        const firstName = userInfo.username.split(' ')[0];
        const avatar = `${DISCORD_CDN_IMAGE}/avatars/${userInfo.id}/${userInfo.avatar}.png?desired_size=70`;
        const token = params.access_token;

        setUser({
          ...userInfo,
          firstName,
          avatar,
          token
        });
      }
    } catch {
      throw new Error('Não foi possível realizar a autenticação');
    } finally {
      setLoadingUserInfo(false);
    }
  }

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