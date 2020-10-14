import React, { useState, useEffect } from "react";
import { View, Image, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { RectButton } from "react-native-gesture-handler";
import logo from "../../assets/logo.png";
import styles from "./styles";

function Landing() {
  return (
    <View style={styles.container}>
      <Image source={logo} />
      <RectButton style={styles.Button}>
        <Text>Entrar</Text>
      </RectButton>
      <RectButton style={styles.Button}>
        <Text>Entrar</Text>
      </RectButton>
    </View>
  );
}

export default Landing;
