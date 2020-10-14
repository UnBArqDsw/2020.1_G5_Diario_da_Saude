import React, { useState, useEffect } from "react";
import { View, Image, Text, Modal, Alert, TouchableHighlight } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { RectButton } from "react-native-gesture-handler";
import logo_1 from "../../assets/logo_1.png";
import styles from "./styles";

function Landing() {
  const [modalVisible, setModalVisible] = useState(false)
  return (
    <View style={styles.container}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Quem você é?</Text>

            <TouchableHighlight
              style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
              onPress={() => {
                setModalVisible(!modalVisible);
              }}
            >
              <Text style={styles.textStyle}>Cadastre-se como Médico</Text>
            </TouchableHighlight>
            <TouchableHighlight
              style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
              onPress={() => {
                setModalVisible(!modalVisible);
              }}
            >
              <Text style={styles.textStyle}>Cadastre-se como Paciente</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>
      <Image source={logo_1} style={styles.logo} />
      <View style={styles.buttonsContainer}>
        <RectButton style={styles.buttonEntrar}>
          <Text style={styles.textButton}>Entrar</Text>
        </RectButton>
        <RectButton style={styles.buttonCadastrar}  onPress={() => { setModalVisible(true); }}>
          <Text style={styles.textButton}>Cadastrar</Text>
        </RectButton>
      </View>
    </View>
  );
}

export default Landing;