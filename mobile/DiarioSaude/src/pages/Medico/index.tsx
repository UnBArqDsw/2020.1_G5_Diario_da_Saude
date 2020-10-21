import React, { useContext } from "react";
import { Text, View, Button } from "react-native";
import styles from "../SignupMedic/styles";
import { RectButton } from "react-native-gesture-handler";
import AuthContext from "../../contexts/auth";

function Medico() {
  const { singOut } = useContext(AuthContext);

  function handleSingOut() {
    singOut();
  }

  return (
    <View style={styles.container}>
      <Text>Medico</Text>
      <RectButton onPress={handleSingOut}>
        <Text>Sair</Text>
      </RectButton>
    </View>
  );
}

export default Medico;
