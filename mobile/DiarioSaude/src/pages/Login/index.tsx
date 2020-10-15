import React, { useState, useEffect } from "react";
import {
  View,
  Image,
  Text,
  Modal,
  Alert,
  TouchableHighlight
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { RectButton, TextInput } from "react-native-gesture-handler";
import logo from "../../assets/logo.png";
import styles from "./styles";

function Login() {
  const [modalVisible, setModalVisible] = useState(false);
  const [CPF, setCPF] = useState("");

  useEffect(() => {
    if (CPF.length === 3 || CPF.length === 7) {
      setCPF(CPF + ".");
    }
    else if(CPF.length === 11) {
      setCPF(CPF + "-")
    }
  }, [CPF])

  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} />
      <View style={styles.textContainer}>
        <TextInput
          value={CPF}
          style={styles.textInputUsuario}
          placeholder="CPF"
          maxLength={14}
          keyboardType="number-pad"
          onChangeText={value => setCPF(value)}
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
            setModalVisible(true);
          }}
        >
          <Text style={styles.textButton}>Login</Text>
        </RectButton>
      </View>
    </View>
  );
}

export default Login;
