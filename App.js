import React from 'react';
import { View, Text, Button, StyleSheet, Alert } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Płock GO</Text>
      <Button 
        title="Sprawdź Połączenia" 
        onPress={() => Alert.alert("Połączenia", "Tutaj będą połączenia!")} 
      />
      <Button 
        title="Kup Bilet" 
        onPress={() => Alert.alert("Kup Bilet", "Tutaj będzie opcja kupna biletu!")} 
        color="#0047AB"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#cce6ff',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#0047AB',
  },
});
