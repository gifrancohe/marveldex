import { Text, StyleSheet, FlatList } from "react-native";
import React, { Component } from "react";

const CharacterList = ({ characters }) => {
  return (
    <FlatList
      data={characters}
      showsVerticalScrollIndicator={false}
      keyExtractor={(character) => {
        String(character.id);
      }}
      renderItem={({ item }) => <Text>{item.name}</Text>}
      contentContainerStyle={styles.flatListContainer}
    />
  );
};
const styles = StyleSheet.create({
  flatListContainer: {
    paddingHorizontal: 5,
  },
});

export default CharacterList;
