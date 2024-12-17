import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useTheme } from "../ThemeContext";

export default function HomeScreen() {
  const { isDarkMode } = useTheme();

  return (
    <View style={[styles.container, isDarkMode && styles.darkContainer]}>
      <Text style={[styles.text, isDarkMode && styles.darkText]}>
        Welcome to Home Screen
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  darkContainer: {
    backgroundColor: "#333",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",
  },
  darkText: {
    color: "#fff",
  },
});
