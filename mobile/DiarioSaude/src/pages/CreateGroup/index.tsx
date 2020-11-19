import React, { useState } from "react";
import { View, Text } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import styles from "./styles";

function CreateGroup() {
  const [CPF, setCPF] = useState("");
  const [Senha, setSenha] = useState("");
  const [ConfirmarSenha, setConfirmarSenha] = useState("");
  const [Cargo, setCargo] = useState("");
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
        {/* <TextInput
          style={styles.textInputUsuario}
          placeholder="UBS"
          value={UBS}
          onChangeText={ubs => setUBS(ubs)}
        ></TextInput> */}
        <TextInput
          style={styles.textInputUsuario}
          placeholder="Cargo"
          value={Cargo}
          onChangeText={cargo => setCargo(cargo)}
        ></TextInput>
      </View>
    </View>
  );
}

export default CreateGroup;
