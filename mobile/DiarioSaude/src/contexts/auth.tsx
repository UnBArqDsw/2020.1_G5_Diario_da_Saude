import React, { createContext, useState } from "react";
import * as auth from "../services/auth";

interface AuthContextData {
  singed: boolean;
  user: object | null;
  singIn(): Promise<void>;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<object | null>(null);

  async function singIn() {
    const response = await auth.singIn();

    setUser(response.user);
  }

  return (
    <AuthContext.Provider value={{ singed: !!user, user, singIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
