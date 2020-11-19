import React from "react";
import { View, Image, Text } from "react-native";
import styles from "./styles";
import { RectButton } from "react-native-gesture-handler";

function GroupItem() {
  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <View style={styles.profileInfo}>
          <Text style={styles.name}>Nome Grupo</Text>
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
}

export default GroupItem;
