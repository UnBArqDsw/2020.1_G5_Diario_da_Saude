import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  Modal,
  TouchableWithoutFeedback,
  TouchableHighlight
} from "react-native";
//import API from "../../services/api"
import {
  RectButton,
  TextInput,
} from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";
import picture from "../../assets/camera.png";

function SignupMedic() {
  const [modalVisible, setModalVisible] = useState(false);
  const [CPF, setCPF] = useState('');
  const [Senha, setSenha] = useState('');
  const [ConfirmarSenha, setConfirmarSenha] = useState('');
  const [Cargo, setCargo] = useState('');
  const [Nome, setNome] = useState('');
  const [UBS, setUBS] = useState('');
  const [msgModal, setmsgModal] = useState('');

  const { navigate } = useNavigation();

  /*function submit(){
    API.post("/create", )
  }*/

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
        <TouchableHighlight style={styles.centeredView} underlayColor="none" onPressOut={() => { setModalVisible(!modalVisible) }}>
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
          placeholder="UBS"
          value={UBS}
          onChangeText={ubs => setUBS(ubs)}
        ></TextInput>
        <TextInput
          style={styles.textInputUsuario}
          placeholder="Cargo"
          value={Cargo}
          onChangeText={cargo => setCargo(cargo)}
        ></TextInput>
      </View>
      <View style={styles.buttonsContainer}>
        <RectButton
          style={styles.buttonCadastrar}
          onPress={() => {
            if (CPF == "" || Nome == "" || Senha == "" || ConfirmarSenha == "" || UBS == "" || Cargo == "") {
              setModalVisible(true)
              setmsgModal("Preencha todos os campos")
            }
            else if (Senha != ConfirmarSenha) {
              setModalVisible(true)
              setmsgModal("Senhas não correspondem")
            }
            else if (CPF.length != 11){
              setModalVisible(true)
              setmsgModal("CPF inválido")
            }
            else {
              navigate("Landing")
              //submit()
            }
          }}
        >
          <Text style={styles.textButton}>Cadastrar</Text>
        </RectButton>
      </View>
    </View>
  );
}

export default SignupMedic;
