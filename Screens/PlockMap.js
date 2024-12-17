import React from "react";
import MapView from "react-native-maps";
import { StyleSheet, View } from "react-native";

export default function PlockMap() {
  const initialRegion = {
    latitude: 52.5463,
    longitude: 19.7066,
    latitudeDelta: 0.05,
    longitudeDelta: 0.05,
  };

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={initialRegion}
        showsUserLocation
        showsMyLocationButton
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "100%",
  },
});
