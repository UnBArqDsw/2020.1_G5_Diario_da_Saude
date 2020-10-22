import React, { useContext } from "react";
import Medico from "../pages/Medico";

import { createStackNavigator } from "@react-navigation/stack";
import { Button, Text, Image } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import logoB from "../assets/logoB.png";
import AuthContext from "../contexts/auth";

const AppStack = createStackNavigator();

const AppRoutes: React.FC = () => {
  const { singOut } = useContext(AuthContext);

  function handleSingOut() {
    singOut();
  }

  return (
    <AppStack.Navigator>
      <AppStack.Screen
        name="Medico"
        component={Medico}
        options={{
          headerTitle: "DiarioSaude",
          headerTitleStyle: { alignSelf: "center" },
          headerStyle: {
            backgroundColor: "#0124A2"
          },
          headerTintColor: "#fff",
          headerLeft: () => (
            <RectButton style={{ marginLeft: 20 }} onPress={handleSingOut}>
              <Text style={{ color: "#fff" }}>Sair</Text>
            </RectButton>
          ),
          headerRight: () => (
            <Image
              source={logoB}
              style={{ width: 44, height: 52, marginRight: 5 }}
            />
          )
        }}
      />
    </AppStack.Navigator>
  );
};

export default AppRoutes;
