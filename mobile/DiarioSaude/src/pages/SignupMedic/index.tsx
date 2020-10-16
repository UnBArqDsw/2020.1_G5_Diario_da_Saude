import React, { useState } from "react";
import {
  View,
  Text,
  Image,
} from "react-native";
import {
  RectButton,
  TextInput,
  TouchableHighlight
} from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";
import picture from "../../assets/camera.png";

function SignupMedic() {
  const [modalVisible, setModalVisible] = useState(false);
  const { navigate } = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.upperDivision}>
        <TouchableHighlight underlayColor="none">
          <Image source={picture} style={styles.picture}/>
        </TouchableHighlight>
      </View>
      <View style={styles.textContainer}>
        <TextInput
          style={styles.textInputUsuario}
          placeholder="CPF"
          maxLength={11}
          keyboardType="number-pad"
        ></TextInput>
        <TextInput
          style={styles.textInputUsuario}
          placeholder="Senha"
          secureTextEntry={true}
        ></TextInput>
        <TextInput
          style={styles.textInputUsuario}
          placeholder="Confirmar Senha"
          secureTextEntry={true}
        ></TextInput>
        <TextInput
          style={styles.textInputUsuario}
          placeholder="Cargo"
        ></TextInput>
        <TextInput
          style={styles.textInputUsuario}
          placeholder="Nome"
        ></TextInput>
        <TextInput
          style={styles.textInputUsuario}
          placeholder="UBS"
        ></TextInput>
      </View>
      <View style={styles.buttonsContainer}>
        <RectButton
          style={styles.buttonCadastrar}
          onPress={() => {
            navigate("Landing");
          }}
        >
          <Text style={styles.textButton}>Cadastrar</Text>
        </RectButton>
      </View>
    </View>
  );
}

export default SignupMedic;
