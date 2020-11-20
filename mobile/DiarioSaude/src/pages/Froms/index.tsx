import React, { useState } from "react";
import { Text, View, Modal, TouchableHighlight } from "react-native";
import {
  TouchableWithoutFeedback,
  TextInput,
  RectButton
} from "react-native-gesture-handler";
import styles from "./style";

function Froms() {
  const [Diastolica, setDiastolica] = useState("");
  const [Sistolica, setSistolica] = useState("");
  const [msgModal, setmsgModal] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}
      >
        <TouchableHighlight
          style={styles.centeredView}
          underlayColor="none"
          onPressOut={() => {
            setModalVisible(!modalVisible);
          }}
        >
          <TouchableWithoutFeedback>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>{msgModal}</Text>
              <TouchableHighlight
                style={styles.openButton}
                onPress={() => {
                  setModalVisible(!modalVisible);
                }}
              >
                <Text style={styles.textStyle}>Retornar</Text>
              </TouchableHighlight>
            </View>
          </TouchableWithoutFeedback>
        </TouchableHighlight>
      </Modal>
      <View style={styles.textContainer}>
        <Text>Sistolica: </Text>
        <TextInput
          style={styles.textInputUsuario}
          placeholder="Sistolica"
          value={Sistolica}
          keyboardType="number-pad"
          onChangeText={sistolica => setSistolica(sistolica)}
        ></TextInput>
        <Text>Diastolica: </Text>
        <TextInput
          style={styles.textInputUsuario}
          placeholder="Diastolica"
          value={Diastolica}
          keyboardType="number-pad"
          onChangeText={diastolica => setDiastolica(diastolica)}
        ></TextInput>
        <View style={styles.buttonsContainer}>
          <RectButton
            style={styles.buttonCadastrar}
            onPress={() => {
              if (Diastolica == "" || Sistolica == "") {
                setModalVisible(true);
                setmsgModal("Todos os campos São necsessários");
              } else {
                setModalVisible(true);
                setmsgModal("Respondido");
              }
            }}
          >
            <Text style={styles.textButton}>Responder</Text>
          </RectButton>
        </View>
      </View>
    </View>
  );
}

export default Froms;
