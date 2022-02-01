import {
  Text,
  StyleSheet,
  FlatList,
  ActivityIndicator,
  Platform,
} from "react-native";
import React, { Component } from "react";
import CharacterCard from "./CharacterCard";

const CharacterList = ({ characters, loadCharacters, isNext }) => {
  const loadMore = () => {
    loadCharacters();
  };

  return (
    <FlatList
      key={(character) => {
        character.id;
      }}
      data={characters}
      numColumns={2}
      showsVerticalScrollIndicator={false}
      keyExtractor={(character) => {
        String(character.id);
      }}
      renderItem={({ item }) => <CharacterCard character={item} />}
      contentContainerStyle={styles.flatListContainer}
      onEndReached={isNext && loadMore}
      onEndReachedThreshold={0.1}
      ListFooterComponent={
        isNext && (
          <ActivityIndicator
            size="large"
            style={styles.spinner}
            color="#AEAEAE"
          />
        )
      }
    />
  );
};

const styles = StyleSheet.create({
  flatListContainer: {
    paddingHorizontal: 5,
    marginTop: Platform.OS === "android" ? 30 : 0,
  },
  spinner: {
    marginTop: 20,
    marginBottom: Platform.OS === "android" ? 90 : 60,
  },
});

export default CharacterList;
