import React, { useContext } from "react";
import { Text, View, Image, ScrollView } from "react-native";
import styles from "./styles";
import { RectButton } from "react-native-gesture-handler";
import AuthContext from "../../contexts/auth";
import AsyncStorage from "@react-native-community/async-storage";
import GroupItem from "../../components/groupItem";
import { useNavigation } from "@react-navigation/native";

function Medico() {
  const storagedUser = AsyncStorage.getItem("@DiarioSaude:user");

  const { navigate } = useNavigation();

  return (
    <ScrollView>
      <GroupItem />
      <GroupItem />
      <GroupItem />
      <RectButton
        style={styles.contactButton}
        onPress={() => {
          navigate("createGroup");
        }}
      >
        <Text style={styles.contactButtonText}>Criar Grupo</Text>
      </RectButton>
    </ScrollView>
  );
}

export default Medico;
