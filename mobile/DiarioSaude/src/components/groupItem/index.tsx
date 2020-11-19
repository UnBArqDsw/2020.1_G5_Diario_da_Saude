import React from "react";
import { View, Image, Text } from "react-native";
import styles from "./styles";
import { RectButton } from "react-native-gesture-handler";

export interface Group {
  users: [];
  _id: String;
  groupName: String;
  idUBS: Number;
  __v: Number;
}

interface GroupProp {
  group: Group;
}

const GroupItem: React.FC<GroupProp> = ({ group }) => {
  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <View style={styles.profileInfo}>
          <Text style={styles.name}>{group.groupName}</Text>
        </View>
      </View>

      <Text style={styles.bio}>Informações sobre o grupo</Text>

      <View style={styles.footer}>
        <View style={styles.buttonsContainer}>
          <RectButton style={styles.contactButton}>
            <Text style={styles.contactButtonText}>Detalhe do Grupo</Text>
          </RectButton>
        </View>
      </View>
    </View>
  );
};

export default GroupItem;
