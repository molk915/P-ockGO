import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

export default function HomeScreen() {
  return (
    <View style={[styles.container]}>
      <Image
        style={{ borderRadius: 30 }}
        source={require("../img/homescreen.png")}
      />

      {/* Welcome Text */}
      <Text style={[styles.text]}>PlockGO</Text>

      {/* Options Section */}
      <View style={styles.optionsContainer}>
        <TouchableOpacity style={[styles.optionButton]}>
          <Text style={styles.optionText}>Login </Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.optionButton]}>
          <Text style={styles.optionText}>Register</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.optionButton]}>
          <Text style={styles.optionText}></Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 20,
  },
  darkContainer: {
    backgroundColor: "#333",
  },
  image: {
    width: "100%",
    height: 200, // Adjust height based on your image size
    resizeMode: "cover",
    borderRadius: 10,
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 20,
    color: "#000",
  },
  darkText: {
    color: "#fff",
  },
  optionsContainer: {
    width: "100%",
    marginTop: 40,
  },
  optionButton: {
    backgroundColor: "#ff5c5c", // Light red color
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginBottom: 15,
    borderRadius: 8,
    alignItems: "center",
  },
  darkButton: {
    backgroundColor: "#444",
  },
  optionText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
