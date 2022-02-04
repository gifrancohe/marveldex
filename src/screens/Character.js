import { ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { getCharactersDetailsByIdApi } from "../api/marvel";
import Header from "../components/character/Header";

export default function Character(props) {
  const {
    navigation,
    route: { params },
  } = props;

  const [character, setCharacter] = useState(null);

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
    <ScrollView>
      <Header
        name={character.name}
        order={character.order}
        image={character.sprites.other.home.front_default}
        type={character.types[0].type.name}
      />
    </ScrollView>
  );
}
