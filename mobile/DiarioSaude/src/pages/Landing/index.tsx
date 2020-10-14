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
import { RectButton } from "react-native-gesture-handler";
import logo from "../../assets/logo.png";
import styles from "./styles";

function Login() {
  const [modalVisible, setModalVisible] = useState(false);

  const { navigate } = useNavigation();

  return (
    <View style={[styles.container, modalVisible ? styles.darkBackground : {}]}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Quem você é?</Text>
            <TouchableHighlight
              style={styles.openButtonMedico}
              onPress={() => {
                setModalVisible(!modalVisible);
              }}
            >
              <Text style={styles.textStyle}>Cadastre-se como Médico</Text>
            </TouchableHighlight>
            <TouchableHighlight
              style={styles.openButtonPaciente}
              onPress={() => {
                setModalVisible(!modalVisible);
              }}
            >
              <Text style={styles.textStyle}>Cadastre-se como Paciente</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>
      <Image source={logo} style={styles.logo} />
      <View style={styles.buttonsContainer}>
        <RectButton
          style={styles.buttonEntrar}
          onPress={() => {
            navigate("login");
          }}
        >
          <Text style={styles.textButton}>Entrar</Text>
        </RectButton>
        <RectButton
          style={styles.buttonCadastrar}
          onPress={() => {
            setModalVisible(true);
          }}
        >
          <Text style={styles.textButton}>Cadastrar</Text>
        </RectButton>
      </View>
    </View>
  );
}

export default Login;
