import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableHighlight,
  Modal,
  TextInput,
  Group
} from "react-native";
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
  const [users, setUsers] = useState([]);
  const [usersNames, setUsersNames] = useState([]);

  const { goBack } = useNavigation();

  useEffect(() => {
    if (users.length > 0) {
      var temp = [];
      users.map(user => {
        // console.log(user);
        if (group.users.includes(user._id)) {
          temp.push(user.name);
        }
      });
      setUsersNames(temp);
      console.log(usersNames);
    }
  }, [users]);

  useEffect(() => {
    async function loadStorageData() {
      const storagedId = await AsyncStorage.getItem("@DiarioSaude:Id");

      setId(storagedId);
    }
    loadStorageData();

    api
      .get(`/group/${id}`)
      .then(response => {
        // console.log(response.data);
        setGroup(response.data);
        return 1;
      })
      .then(response => {
        api.get("/users").then(response => {
          // console.log(typeof response.data.users);
          setUsers(response.data.users);
        });
      })
      .catch(error => {});

    // api.get("/users").then(response => {
    //   console.log(response.data.users);
    //   setUsers(response.data.users);
    // });
  }, [id]);

  function handleTest() {
    console.log(usersNames);
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
        {usersNames.map((name: string, index: number) => {
          return <UserItem Name={name} key={index} />;
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
