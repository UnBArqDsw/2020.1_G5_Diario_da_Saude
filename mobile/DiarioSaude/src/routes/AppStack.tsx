import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Landing from "../pages/Landing";
import Login from "../pages/Login";
<<<<<<< HEAD
import Medico from "../pages/Medico";
=======
import SignupMedic from "../pages/SignupMedic";
>>>>>>> 5158718013378c718b1b3150e571ceaf654af2bf

const { Navigator, Screen } = createStackNavigator();

function AppStack() {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen name="Landing" component={Landing} />
        <Screen name="login" component={Login} />
<<<<<<< HEAD
        <Screen name="Medico" component={Medico} />
=======
        <Screen name="signupMedic" component={SignupMedic} />
>>>>>>> 5158718013378c718b1b3150e571ceaf654af2bf
      </Navigator>
    </NavigationContainer>
  );
}

export default AppStack;
