import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Rating = ({ rating }: { rating: number }) => {
  return (
    <View style={styles.ratingContainer}>
      <Text style={styles.ratingText}>{rating}/10</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  ratingContainer: {
    marginVertical: 8,
  },
  ratingText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#333",
  },
});

export default Rating;
