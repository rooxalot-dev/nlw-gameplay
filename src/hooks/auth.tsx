import React, { ReactNode, createContext, useContext, useState } from "react";

type UserType = {
  id: string;
  username: string;
  firstName: string;
  email: string;
  avatar: string;
  token: string
};

type AuthUserData = {
  user: UserType
}

type AuthProviderProps = {
  children: ReactNode
}

const AuthContext = createContext<AuthUserData>({} as AuthUserData);

function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<UserType>({} as UserType);

  return (
    <AuthContext.Provider value={{ user } as AuthUserData}>
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
