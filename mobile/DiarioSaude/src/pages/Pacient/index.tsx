import React, { useContext } from "react";
import { Text, View, Button, ScrollView } from "react-native";
import styles from "../SignupMedic/styles";
import { RectButton } from "react-native-gesture-handler";
import AuthContext from "../../contexts/auth";
import AsyncStorage from "@react-native-community/async-storage";
import GroupItemPacient from "../../components/groupItemPacient";

function Pacient() {
  const storagedUser = AsyncStorage.getItem("@DiarioSaude:user");

  return (
    <ScrollView>
      <GroupItemPacient />
      <GroupItemPacient />
      <GroupItemPacient />
    </ScrollView>
  );
}

export default Pacient;
