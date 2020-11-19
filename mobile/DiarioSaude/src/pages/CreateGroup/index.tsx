import React, { useState } from "react";
import { View, Text } from "react-native";
import { TextInput, RectButton } from "react-native-gesture-handler";
import styles from "./styles";

function CreateGroup() {
  const [Ubs, setUbs] = useState("");
  const [Questionario, setQuestionario] = useState("");
  const [Usuarios, setUsuarios] = useState("");
  const [Nome, setNome] = useState("");

  return (
    <View>
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
        <TextInput
          style={styles.textInputUsuario}
          placeholder="Questionário"
          secureTextEntry={true}
          value={Questionario}
          onChangeText={questionario => setQuestionario(questionario)}
        ></TextInput>

        <TextInput
          style={styles.textInputUsuario}
          placeholder="Usuários"
          value={Usuarios}
          onChangeText={usuarios => setUsuarios(usuarios)}
        ></TextInput>
        <View style={styles.buttonsContainer}>
          <RectButton style={styles.buttonCadastrar}>
            <Text style={styles.textButton}>Cadastrar</Text>
          </RectButton>
        </View>
      </View>
    </View>
  );
}

export default CreateGroup;
