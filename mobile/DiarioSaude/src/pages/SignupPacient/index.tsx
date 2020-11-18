import React, { useState } from "react";
import api from "../../services/api";
import {
  View,
  Text,
  Image,
  Modal,
  TouchableWithoutFeedback,
  TouchableHighlight
} from "react-native";
import DatePicker from "react-datepicker";
import { RectButton, TextInput } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";
import picture from "../../assets/camera.png";

function SignupPacient() {
  const [modalVisible, setModalVisible] = useState(false);
  const [CPF, setCPF] = useState("");
  const [Senha, setSenha] = useState("");
  const [ConfirmarSenha, setConfirmarSenha] = useState("");
  const [Birth, setBirth] = useState("");
  const [Nome, setNome] = useState("");
  const [Gender, setGender] = useState("");
  const [msgModal, setmsgModal] = useState("");

  const { navigate } = useNavigation();

  async function submit() {
    await api
      .post("/auth/signup", {
        cpf: parseInt(CPF),
        password: Senha,
        name: Nome,
        birthDate: Birth,
        gender: Gender,
        roles: []
      })
      .then(res => {
        console.log(res.data);
      })
      .catch(error => console.log(error));

    navigate("landing");
  }

  return (
    <View style={styles.container}>
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
      <View style={styles.upperDivision}>
        <TouchableHighlight underlayColor="none">
          <Image source={picture} style={styles.picture} />
        </TouchableHighlight>
      </View>
      <View style={styles.textContainer}>
        <TextInput
          style={styles.textInputUsuario}
          placeholder="Nome"
          value={Nome}
          onChangeText={nome => setNome(nome)}
        ></TextInput>
        <TextInput
          style={styles.textInputUsuario}
          placeholder="CPF"
          maxLength={11}
          keyboardType="number-pad"
          value={CPF}
          onChangeText={cpf => setCPF(cpf)}
        ></TextInput>
        <TextInput
          style={styles.textInputUsuario}
          placeholder="Senha"
          secureTextEntry={true}
          value={Senha}
          onChangeText={senha => setSenha(senha)}
        ></TextInput>
        <TextInput
          style={styles.textInputUsuario}
          placeholder="Confirmar Senha"
          secureTextEntry={true}
          value={ConfirmarSenha}
          onChangeText={confirmarsenha => setConfirmarSenha(confirmarsenha)}
        ></TextInput>
        <TextInput
          style={styles.textInputUsuario}
          placeholder="Gender"
          value={Gender}
          onChangeText={gender => setGender(gender)}
        ></TextInput>
        <TextInput
          style={styles.textInputUsuario}
          placeholder="Birth"
          value={Birth}
          onChangeText={birth => setBirth(birth)}
        ></TextInput>
      </View>
      <View style={styles.buttonsContainer}>
        <RectButton
          style={styles.buttonCadastrar}
          onPress={() => {
            if (
              CPF == "" ||
              Gender == "" ||
              Nome == "" ||
              Senha == "" ||
              ConfirmarSenha == "" ||
              Birth == ""
            ) {
              setModalVisible(true);
              setmsgModal("Preencha todos os campos");
            } else if (Senha != ConfirmarSenha) {
              setModalVisible(true);
              setmsgModal("Senhas não correspondem");
            } else if (CPF.length != 11) {
              setModalVisible(true);
              setmsgModal("CPF inválido");
            } else {
              submit();
            }
          }}
        >
          <Text style={styles.textButton}>Cadastrar</Text>
        </RectButton>
      </View>
    </View>
  );
}

export default SignupPacient;
