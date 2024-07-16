import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Genres = ({ genres }: { genres: string[] }) => {
  return (
    <View style={styles.genresContainer}>
      {genres.map((genre) => (
        <View key={genre} style={styles.genre}>
          <Text style={styles.genreText}>{genre}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  genresContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginVertical: 8,
  },
  genre: {
    backgroundColor: "#E0E0E0",
    borderRadius: 5,
    padding: 4,
    margin: 2,
  },
  genreText: {
    fontSize: 12,
    color: "#555",
  },
});

export default Genres;
