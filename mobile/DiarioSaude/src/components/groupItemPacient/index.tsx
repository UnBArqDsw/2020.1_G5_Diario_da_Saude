import React from "react";
import { View, Image, Text } from "react-native";
import styles from "./styles";
import { RectButton } from "react-native-gesture-handler";

function GroupItemPacient() {
  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <View style={styles.profileInfo}>
          <Text style={styles.name}>Nome</Text>
        </View>
      </View>

      <View style={styles.footer}>
        <View style={styles.buttonsContainer}>
          <RectButton style={styles.contactButton}>
            <Text style={styles.contactButtonText}>Entrar em contato</Text>
          </RectButton>
        </View>
      </View>
    </View>
  );
}

export default GroupItemPacient;
