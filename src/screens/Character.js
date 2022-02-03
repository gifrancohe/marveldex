import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { getCharactersDetailsByIdApi } from "../api/marvel";

export default function Character(props) {
  const {
    navigation,
    route: { params },
  } = props;

  const [character, setCharacter] = useState(null);

  console.log(params.id);

  useEffect(() => {
    (async () => {
      try {
        const response = await getCharactersDetailsByIdApi(params.id);
        setCharacter(response);
        console.log(character);
      } catch (error) {
        navigation.goBack();
      }
    })();
  }, [params]);

  if (!character) return null;

  return (
    <View>
      <Text>Character</Text>
    </View>
  );
}
