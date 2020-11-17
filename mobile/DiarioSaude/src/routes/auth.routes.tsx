import React from "react";
import Landing from "../pages/Landing";
import Login from "../pages/Login";
import SignupMedic from "../pages/SignupMedic";
import SignupPacient from "../pages/SignupPacient";

import { createStackNavigator } from "@react-navigation/stack";

const AuthStack = createStackNavigator();

const AuthRoutes: React.FC = () => (
  <AuthStack.Navigator headerMode="">
    <AuthStack.Screen name="landing" component={Landing} />
    <AuthStack.Screen name="login" component={Login} />
    <AuthStack.Screen name="signupMedic" component={SignupMedic} />
    <AuthStack.Screen name="signupPacient" component={SignupPacient} />
  </AuthStack.Navigator>
);

export default AuthRoutes;
