import React from "react";
import Medico from "../pages/Medico";

import { createStackNavigator } from "@react-navigation/stack";

const AppStack = createStackNavigator();

const AppRoutes: React.FC = () => (
  <AppStack.Navigator>
    <AppStack.Screen name="Medico" component={Medico} />
  </AppStack.Navigator>
);

export default AppRoutes;
