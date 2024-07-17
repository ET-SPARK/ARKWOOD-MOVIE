import React, { useEffect } from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { Stack, useLocalSearchParams } from "expo-router";
import { fetchMovieDetails } from "../moviesSlice";
import { RootState } from "../store";
import LoadingIndicator from "../LoadingIndicator";
import { AntDesign } from "@expo/vector-icons";

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
      <View style={{ position: "relative" }}>
        <Image
          source={require("../detail.png")}
          style={{ width: "100%", height: 150 }}
        />
        <Text
          style={{
            position: "absolute",
            color: "white",
            fontSize: 30,
            width: "50%",
            marginLeft: 10,
            fontWeight: "light",
          }}
        >
          {selectedMovie.title}
        </Text>
        <View
          style={{
            position: "absolute",
            bottom: 15,
            left: 15,
            flexDirection: "row-reverse",

            alignItems: "center",
          }}
        >
          <Text
            style={{
              flexDirection: "row",
              alignContent: "center",
              marginLeft: 25,
            }}
          >
            <AntDesign name="caretright" size={34} color="white" />
          </Text>
          <Image
            source={{ uri: selectedMovie.poster }}
            style={{ width: 40, height: 60 }}
          />
        </View>
      </View>
      <ScrollView style={styles.container}>
        <View>
          <Text style={{ padding: 8 }}>{selectedMovie.plot}</Text>
          <View style={{ paddingHorizontal: 8, paddingVertical: 16 }}>
            <Text>Director: {selectedMovie.director}</Text>
            <Text>
              Actors:{" "}
              {selectedMovie.actors ? selectedMovie.actors.join(", ") : "N/A"}
            </Text>
            <Text> Runtime: {selectedMovie.runtime} min</Text>
            <Text> Rating {selectedMovie.rating}/10</Text>
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
    width: 40,
    height: 60,
    bottom: 10,
    left: 10,
    position: "absolute",
  },
  title: {
    fontSize: 38,
    fontWeight: "light",
    marginVertical: 8,
    padding: 16,
  },
});
