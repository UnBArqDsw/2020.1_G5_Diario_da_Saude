import React, { useContext } from "react";
import Medico from "../pages/Medico";
import Pacient from "../pages/Pacient";
import MedicRoutes from "../routes/medic.routes";
import PacientRoutes from "../routes/pacient.routes";

import { createStackNavigator } from "@react-navigation/stack";
import { Button, Text, Image } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import logoB from "../assets/logoB.png";
import AuthContext from "../contexts/auth";

const AppStack = createStackNavigator();

const AppRoutes: React.FC = () => {
  const { singOut } = useContext(AuthContext);
  const { pacient } = useContext(AuthContext);

  function handleSingOut() {
    singOut();
  }

  return pacient ? <PacientRoutes /> : <MedicRoutes />;
};

export default AppRoutes;
