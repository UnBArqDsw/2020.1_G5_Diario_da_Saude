import React, { useEffect, useState } from "react";
import { View, Text, TouchableHighlight, Modal, TextInput } from "react-native";
import UserItem, { User } from "../../components/userItem";
import {
  RectButton,
  TouchableWithoutFeedback
} from "react-native-gesture-handler";
import { useNavigation, useFocusEffect } from "@react-navigation/core";
import AsyncStorage from "@react-native-community/async-storage";
import api from "../../services/api";
import styles from "./styles";

function GroupDeatils() {
  const [id, setId] = useState();
  const [group, setGroup] = useState();
  const [modalVisible, setModalVisible] = useState(false);
  const [CuserID, setCuserid] = useState();

  const { goBack } = useNavigation();

  useEffect(() => {
    async function loadStorageData() {
      const storagedId = await AsyncStorage.getItem("@DiarioSaude:Id");

      setId(storagedId);
    }

    api
      .get(`/group/${id}`)
      .then(response => {
        console.log(response.data);
        setGroup(response.data);
      })
      .catch(error => {});

    loadStorageData();
  }, [id]);

  function handleTest() {
    console.log(group);
    setModalVisible(true);
  }

  function handleCadastrar() {
    api
      .post("/group/member", {
        member_id: CuserID,
        group_id: id
      })
      .then(res => {
        console.log(res);
      });

    setModalVisible(!modalVisible);
    goBack();
  }
  if (!group) {
    return <Text>carregando</Text>;
  } else {
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
                <TextInput
                  style={styles.textInputUsuario}
                  placeholder="Id usuário"
                  value={CuserID}
                  onChangeText={nome => setCuserid(nome)}
                ></TextInput>
                <TouchableHighlight
                  style={styles.openButton}
                  onPress={() => {
                    handleCadastrar();
                  }}
                >
                  <Text style={styles.textStyle}>Cadastrar</Text>
                </TouchableHighlight>
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
        <Text>{group.groupName}</Text>
        {group.users.map((name: string, index: number) => {
          return <UserItem name={name} key={index} />;
        })}
        <RectButton
          onPress={() => {
            handleTest();
          }}
          style={styles.buttonCadastrar}
        >
          <Text style={styles.textButton}>Cadastrar usuário</Text>
        </RectButton>
      </View>
    );
  }
}

export default GroupDeatils;
