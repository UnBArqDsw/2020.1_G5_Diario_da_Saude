import React, { useContext } from "react";
import { Text, View, Image, ScrollView } from "react-native";
import styles from "../SignupMedic/styles";
import { RectButton } from "react-native-gesture-handler";
import AuthContext from "../../contexts/auth";
import AsyncStorage from "@react-native-community/async-storage";
import GroupItem from "../../components/groupItem";

function Medico() {
  const storagedUser = AsyncStorage.getItem("@DiarioSaude:user");

  return (
    <ScrollView>
      <GroupItem />
      <GroupItem />
      <GroupItem />
    </ScrollView>
  );
}

export default Medico;
