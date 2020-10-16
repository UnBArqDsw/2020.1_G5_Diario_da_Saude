import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Landing from "../pages/Landing";
import Login from "../pages/Login";
import Medico from "../pages/Medico";
import SignupMedic from "../pages/SignupMedic";

const { Navigator, Screen } = createStackNavigator();

function AppStack() {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen name="Landing" component={Landing} />
        <Screen name="login" component={Login} />
        <Screen name="Medico" component={Medico} />
        <Screen name="signupMedic" component={SignupMedic} />
      </Navigator>
    </NavigationContainer>
  );
}

export default AppStack;
