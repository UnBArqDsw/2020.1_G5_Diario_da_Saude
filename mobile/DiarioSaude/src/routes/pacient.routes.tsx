import React, { useContext } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { RectButton } from "react-native-gesture-handler";
import { Button, Text, Image } from "react-native";
import logoB from "../assets/logoB.png";
import AuthContext from "../contexts/auth";
import Pacient from "../pages/Pacient";
import Froms from "../pages/Froms";

const pacientStack = createStackNavigator();

const PacientRoutes: React.FC = () => {
  const { singOut } = useContext(AuthContext);

  function handleSingOut() {
    singOut();
  }

  return (
    <pacientStack.Navigator>
      <pacientStack.Screen
        name="Pacient"
        component={Pacient}
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
      <pacientStack.Screen
        name="Froms"
        component={Froms}
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
    </pacientStack.Navigator>
  );
};

export default PacientRoutes;
