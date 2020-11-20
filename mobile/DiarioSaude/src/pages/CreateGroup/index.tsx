import React, { useState } from "react";
import { View, Text, Modal, TouchableHighlight } from "react-native";
import {
  TextInput,
  RectButton,
  TouchableWithoutFeedback
} from "react-native-gesture-handler";
import styles from "./styles";
import api from "../../services/api";
import { useNavigation } from "@react-navigation/native";

function CreateGroup() {
  const [Ubs, setUbs] = useState("");
  const [Nome, setNome] = useState("");
  const [msgModal, setmsgModal] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  const { navigate, goBack } = useNavigation();

  function submit() {
    api
      .post("/group", {
        groupName: Nome,
        idUBS: Ubs
      })
      .then(res => {
        console.log(res.data);
        res = res.data;
      })
      .catch(error => console.log(error));

    console.log("mandou");

    goBack();
  }

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
        <TextInput
          style={styles.textInputUsuario}
          placeholder="Nome"
          value={Nome}
          onChangeText={nome => setNome(nome)}
        ></TextInput>

        <TextInput
          style={styles.textInputUsuario}
          placeholder="Ubs"
          secureTextEntry={true}
          value={Ubs}
          onChangeText={ubs => setUbs(ubs)}
        ></TextInput>
        <View style={styles.buttonsContainer}>
          <RectButton
            style={styles.buttonCadastrar}
            onPress={() => {
              if (Ubs == "" || Nome == "") {
                setModalVisible(true);
                setmsgModal("Nome e Ubs São necsessários");
              } else {
                submit();
              }
            }}
          >
            <Text style={styles.textButton}>Cadastrar</Text>
          </RectButton>
        </View>
      </View>
    </View>
  );
}

export default CreateGroup;
