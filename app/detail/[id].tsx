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
    return <Text>Error: {error} or Network Error</Text>;
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
        <View>
          <Image
            source={{ uri: selectedMovie.poster }}
            style={styles.posterImage}
          />
          <Text style={styles.title}>{selectedMovie.title}</Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              borderBottomWidth: 1,
              borderBottomColor: "#000",
              paddingBottom: 20,
              paddingHorizontal: 16,
            }}
          >
            <Text
              style={{
                fontSize: 18,
                backgroundColor: "gray",
                padding: 10,
                paddingHorizontal: 24,
                borderRadius: 24,
              }}
            >
              {selectedMovie.runtime} minutes
            </Text>
            <Text
              style={{
                fontSize: 18,
                backgroundColor: "gray",
                padding: 10,
                paddingHorizontal: 24,
                borderRadius: 24,
              }}
            >
              Rating: {selectedMovie.rating}
            </Text>
          </View>
          <Text style={{ padding: 8 }}>{selectedMovie.plot}</Text>
          <View style={{ paddingHorizontal: 8, paddingVertical: 16 }}>
            <Text>Director: {selectedMovie.director}</Text>
            <Text>
              Actors:{" "}
              {selectedMovie.actors ? selectedMovie.actors.join(", ") : "N/A"}
            </Text>
            <Text>Awards: {selectedMovie.awards}</Text>
            <Text>Country: {selectedMovie.country}</Text>
            <Text>Language: {selectedMovie.language}</Text>
            <Text>Box Office: {selectedMovie.boxOffice}</Text>
            <Text>Production: {selectedMovie.production}</Text>
            <Text>Website: {selectedMovie.website}</Text>
          </View>
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 16,
  },
  posterImage: {
    width: "100%",
    height: 200,
    resizeMode: "contain",
  },
  title: {
    fontSize: 38,
    fontWeight: "light",
    marginVertical: 8,
    padding: 16,
  },
});
