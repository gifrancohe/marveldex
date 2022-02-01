import React, { useState, useEffect } from "react";
import { SafeAreaView } from "react-native";
import { getCharactersApi, getCharactersDetailsApi } from "../api/marvel";
import CharacterList from "../components/CharacterList";

export default function Marvel() {
  const [characters, setCharacters] = useState([]);
  const [nextUrl, setNextUrl] = useState(null);
  useEffect(() => {
    (async () => {
      await loadCharacters();
    })();
  }, []);

  const loadCharacters = async () => {
    try {
      const response = await getCharactersApi(nextUrl);
      setNextUrl(response.next);

      const charactersArray = [];
      for await (const character of response.results) {
        const characterDetails = await getCharactersDetailsApi(character.url);

        charactersArray.push({
          id: characterDetails.id,
          name: characterDetails.name,
          type: characterDetails.types[0].type.name,
          order: characterDetails.order,
          image: characterDetails.sprites.front_default,
        });
      }
      setCharacters([...characters, ...charactersArray]);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <SafeAreaView>
      <CharacterList
        characters={characters}
        loadCharacters={loadCharacters}
        isNext={nextUrl}
      />
    </SafeAreaView>
  );
}
