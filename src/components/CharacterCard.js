import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
} from "react-native";
import React from "react";
import { capitalize } from "lodash";
import getColorByCharacterType from "../utils/getColorByCharacterType";

export default function CharacterCard(props) {
  const { character } = props;

  const characterColor = getColorByCharacterType(character.type);
  const bgStyles = { backgroundColor: characterColor, ...styles.bgStyles };

  const gotToCharacter = () => {
    console.log(`Vamos al pokemon: ${character.name}`);
  };

  return (
    <TouchableWithoutFeedback onPress={gotToCharacter}>
      <View style={styles.card}>
        <View style={styles.spacing}>
          <View style={bgStyles}>
            <Text style={styles.number}>
              #{`${character.order}`.padStart(3, 0)}
            </Text>
            <Text style={styles.name}>{capitalize(character.name)}</Text>
            <Image source={{ uri: character.image }} style={styles.image} />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    height: 130,
  },
  spacing: {
    flex: 1,
    padding: 5,
  },
  bgStyles: {
    flex: 1,
    borderRadius: 15,
    padding: 10,
  },
  number: {
    position: "absolute",
    right: 10,
    top: 10,
    color: "#fff",
    fontSize: 11,
  },
  name: {
    color: "white",
    fontWeight: "bold",
    fontSize: 15,
    paddingTop: 10,
  },
  image: {
    position: "absolute",
    bottom: 2,
    right: 2,
    width: 90,
    height: 90,
  },
});
