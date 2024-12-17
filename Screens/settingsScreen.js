import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { useTheme } from "../ThemeContext";

export default function SettingsScreen() {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <View style={[styles.container, isDarkMode && styles.darkContainer]}>
      <Text style={[styles.text, isDarkMode && styles.darkText]}>
        Settings Screen
      </Text>
      <Button
        title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
        onPress={toggleTheme}
      />
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
