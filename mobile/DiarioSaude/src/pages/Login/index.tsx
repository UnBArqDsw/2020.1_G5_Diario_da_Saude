import React, { useState, useEffect, useContext } from "react";
import {
  View,
  Image,
  Text,
  Modal,
  Alert,
  TouchableHighlight,
  PlatformColor
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { RectButton, TextInput } from "react-native-gesture-handler";
import { singIn } from "../../services/auth";
import AuthContext from "../../contexts/auth";

import logo from "../../assets/logo.png";
import styles from "./styles";

function Login() {
  const { singed, singIn, user } = useContext(AuthContext);

  console.log(singed);
  console.log(user);

  async function handleSingIn() {
    singIn();
  }

  const { navigate } = useNavigation();

  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} />
      <View style={styles.textContainer}>
        <TextInput
          style={styles.textInputUsuario}
          placeholder="CPF"
          maxLength={11}
          keyboardType="number-pad"
        ></TextInput>
        <TextInput
          style={styles.textInputSenha}
          placeholder="Senha"
          secureTextEntry={true}
        ></TextInput>
      </View>
      <View style={styles.buttonsContainer}>
        <RectButton
          style={styles.buttonCadastrar}
          onPress={() => {
            handleSingIn();
          }}
        >
          <Text style={styles.textButton}>Login</Text>
        </RectButton>
      </View>
    </View>
  );
}

export default Login;
