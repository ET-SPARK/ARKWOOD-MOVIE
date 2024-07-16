// LoadingIndicator.tsx
import React from "react";
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";

const LoadingIndicator = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator
        size="large"
        color="rgb(59 130 246 / 0.5)"
        style={styles.indicator}
      />
      <Text style={styles.loadingText}>Loading...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  indicator: {
    width: 100, // Increase the size
    height: 100, // Increase the size
  },
  loadingText: {
    marginTop: 10,
    fontSize: 24, // Increase text size
    fontWeight: "bold",
  },
});

export default LoadingIndicator;
