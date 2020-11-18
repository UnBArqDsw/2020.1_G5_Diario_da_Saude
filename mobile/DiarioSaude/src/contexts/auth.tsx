import React, { createContext, useState, useEffect } from "react";
import * as auth from "../services/auth";
import AsyncStorage from "@react-native-community/async-storage";

interface AuthContextData {
  singed: boolean;
  pacient: boolean;
  user: object | null;
  loading: boolean;
  singIn(cpf: number, password: string): Promise<void>;
  singOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<object | null>(null);
  const [loading, setLoading] = useState(false);
  const [pacient, setPacient] = useState(false);

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

  async function singIn(cpf: number, password: string) {
    const response = await auth.singIn(cpf, password);

    console.log(response);

    setUser(response);

    if (response.roles !== "HEALTHPROFESSIONAL") {
      setPacient(true);
    }

    await AsyncStorage.setItem("@DiarioSaude:user", JSON.stringify(response));
    await AsyncStorage.setItem("@DiarioSaude:token", response.accessToken);
  }

  function singOut() {
    // console.log(user);
    AsyncStorage.clear().then(() => {
      setUser(null);
      setPacient(false);
    });
  }

  return (
    <AuthContext.Provider
      value={{ singed: !!user, user, loading, singIn, singOut, pacient }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
