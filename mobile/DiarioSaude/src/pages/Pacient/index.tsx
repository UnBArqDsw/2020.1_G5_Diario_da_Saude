import React, { useEffect, useState } from "react";
import { Text, View, ScrollView } from "react-native";
import styles from "./styles";
import { RectButton } from "react-native-gesture-handler";
import GroupItemPacient, { Group } from "../../components/groupItemPacient";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import api from "../../services/api";

function Medico() {
  const [isLoading, setLoading] = useState(true);
  const [Groups, setGroups] = useState([]);

  useFocusEffect(() => {
    api.get("/group").then(response => {
      setGroups(response.data);

      setLoading(false);
    });
  });

  const { navigate } = useNavigation();

  if (isLoading) {
    return (
      <View>
        <Text>Carregando</Text>
      </View>
    );
  }

  return (
    <ScrollView>
      {Groups.map((group: Group, index) => {
        return <GroupItemPacient group={group} key={index} />;
      })}
    </ScrollView>
  );
}

export default Medico;
