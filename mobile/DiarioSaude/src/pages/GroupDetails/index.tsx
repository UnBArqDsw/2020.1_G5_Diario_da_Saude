import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import UserItem from "../../components/userItem";
import { RectButton } from "react-native-gesture-handler";
import { useNavigation, useFocusEffect } from "@react-navigation/core";
import AsyncStorage from "@react-native-community/async-storage";
import api from "../../services/api";

function GroupDeatils() {
  const [id, setId] = useState();
  const [group, setGroup] = useState();
  const [isLoading, setIsLoading] = useState(true);

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
      .catch(error => {
        console.log("errrrrrrrrrrrr");
      });

    loadStorageData();
  }, [id]);

  function handleTest() {
    console.log(group);
  }
  if (!group) {
    return <Text>carregando</Text>;
  } else {
    return (
      <View>
        <Text>{group.groupName}</Text>
        <UserItem />
        <UserItem />
        <UserItem />
        <RectButton
          onPress={() => {
            handleTest();
          }}
        >
          <Text>tatatata</Text>
        </RectButton>
      </View>
    );
  }
}

export default GroupDeatils;
