import React from "react";
import { View, Image, Text } from "react-native";
import styles from "./styles";
import { RectButton } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/core";
import { NavigationContainer } from "@react-navigation/native";
import "react-native-gesture-handler";
import AsyncStorage from "@react-native-community/async-storage";

export interface Group {
  users: [];
  _id: string;
  groupName: String;
  idUBS: Number;
  __v: Number;
}

interface GroupProp {
  group: Group;
}

const GroupItemPacient: React.FC<GroupProp> = ({ group }) => {
  const { navigate } = useNavigation();

  async function handleNavigation() {
    navigate("Froms");
  }

  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <View style={styles.profileInfo}>
          <Text style={styles.name}>{group.groupName}</Text>
        </View>
      </View>

      <View style={styles.footer}>
        <View style={styles.buttonsContainer}>
          <RectButton
            style={styles.contactButton}
            onPress={() => {
              handleNavigation();
            }}
          >
            <Text style={styles.contactButtonText}>Responder</Text>
          </RectButton>
        </View>
      </View>
    </View>
  );
};

export default GroupItemPacient;
