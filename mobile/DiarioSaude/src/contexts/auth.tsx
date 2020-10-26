import React, { createContext, useState, useEffect } from "react";
import * as auth from "../services/auth";
import AsyncStorage from "@react-native-community/async-storage";

interface AuthContextData {
  singed: boolean;
  user: object | null;
  loading: boolean;
  singIn(): Promise<void>;
  singOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<object | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function loadStorageData() {
      const storagedUser = await AsyncStorage.getItem("@DiarioSaude:user");
      const storagedToken = await AsyncStorage.getItem("@DiarioSaude:token");

      if (storagedUser && storagedToken) {
        setUser(JSON.parse(storagedUser));
        setLoading(false);
      }
    }

    loadStorageData();
  }, []);

  async function singIn() {
    const response = await auth.singIn();

    console.log(response);

    setUser(response.user);

    await AsyncStorage.setItem(
      "@DiarioSaude:user",
      JSON.stringify(response.user)
    );
    await AsyncStorage.setItem("@DiarioSaude:token", response.token);
  }

  function singOut() {
    AsyncStorage.clear().then(() => {
      setUser(null);
    });
  }

  return (
    <AuthContext.Provider
      value={{ singed: !!user, user, loading, singIn, singOut }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
