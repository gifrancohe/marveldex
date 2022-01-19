import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { getCharactersApi } from "../api/marvel";

export default function Marvel() {
  useEffect(() => {
    (async () => {
      await loadCharacters();
    })();
  }, []);

  const loadCharacters = async () => {
    try {
      const response = await getCharactersApi();
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View>
      <Text>Estamos en marvel</Text>
    </View>
  );
}
