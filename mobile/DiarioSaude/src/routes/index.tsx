import React, { useContext } from "react";
import { View, ActivityIndicator } from "react-native";

import AuthContext from "../contexts/auth";

import AppRoutes from "./app.routes";
import AuthRoutes from "./auth.routes";

const Routes: React.FC = () => {
  const { singed, loading } = useContext(AuthContext);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#666" />
      </View>
    );
  }

  return singed ? <AppRoutes /> : <AuthRoutes />;
};

export default Routes;
