import React from 'react';
import { View, Text, StyleSheet,Image } from 'react-native';


export default function PlockMap() {
    
  

  return (
    <View style={styles.container}>
     <Image 
        source={require('../img/wybranka.jpg')} // Ścieżka do lokalnego obrazu
        style={styles.image}
      />
  </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
