import React, { useEffect } from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { Stack, useLocalSearchParams } from "expo-router";
import { fetchMovieDetails } from "../moviesSlice";
import { RootState } from "../store";
import LoadingIndicator from "../LoadingIndicator";

export default function DetailsScreen() {
  const { id } = useLocalSearchParams();
  const dispatch = useDispatch();
  const { selectedMovie, loading, error } = useSelector(
    (state: RootState) => state.movies
  );

  useEffect(() => {
    if (id) {
      dispatch(fetchMovieDetails(Number(id)));
    }
  }, [dispatch, id]);

  if (loading) {
    return <LoadingIndicator />;
  }

  if (error) {
    return <Text>Error: {error}</Text>;
  }

  if (!selectedMovie) {
    return <Text>No movie data</Text>;
  }

  return (
    <>
      <Stack.Screen
        options={{
          title: selectedMovie.title, // Set the title dynamically
        }}
      />
      <ScrollView style={styles.container}>
        <Image
          source={{ uri: selectedMovie.poster }}
          style={styles.posterImage}
        />
        <Text style={styles.title}>{selectedMovie.title}</Text>
        <Text>Year: {selectedMovie.year}</Text>
        <Text>
          Genre: {selectedMovie.genre ? selectedMovie.genre.join(", ") : "N/A"}
        </Text>
        <Text>Rating: {selectedMovie.rating}</Text>
        <Text>Director: {selectedMovie.director}</Text>
        <Text>
          Actors:{" "}
          {selectedMovie.actors ? selectedMovie.actors.join(", ") : "N/A"}
        </Text>
        <Text>Plot: {selectedMovie.plot}</Text>
        <Text>Runtime: {selectedMovie.runtime} minutes</Text>
        <Text>Awards: {selectedMovie.awards}</Text>
        <Text>Country: {selectedMovie.country}</Text>
        <Text>Language: {selectedMovie.language}</Text>
        <Text>Box Office: {selectedMovie.boxOffice}</Text>
        <Text>Production: {selectedMovie.production}</Text>
        <Text>Website: {selectedMovie.website}</Text>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  posterImage: {
    width: "100%",
    height: 400,
    resizeMode: "contain",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 8,
  },
});
