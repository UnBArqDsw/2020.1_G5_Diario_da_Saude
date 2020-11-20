import React, { useContext } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Medico from "../pages/Medico";
import GroupDeatils from "../pages/GroupDetails";
import CreateGroup from "../pages/CreateGroup";
import { RectButton } from "react-native-gesture-handler";
import { Button, Text, Image } from "react-native";
import logoB from "../assets/logoB.png";
import AuthContext from "../contexts/auth";
import UserItem from "../components/userItem";

const medicStack = createStackNavigator();

const MedicRoutes: React.FC = () => {
  const { singOut } = useContext(AuthContext);

  function handleSingOut() {
    singOut();
  }

  type RootStackParamList = {
    GroupDetails: { groupId: string };
  };

  return (
    <medicStack.Navigator>
      <medicStack.Screen
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
      <medicStack.Screen
        name="createGroup"
        component={CreateGroup}
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
      <medicStack.Screen
        name="groupDetails"
        component={GroupDeatils}
        initialParams={{ id: "000" }}
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
    </medicStack.Navigator>
  );
};

export default MedicRoutes;
