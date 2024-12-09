import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import HomeScreen from "./Screens/HomeScreen"
import SettingsScreen from "./Screens/settingsScreen"

export default function App() {
  const [activeTab, setActiveTab] = useState('Home');

  return (
    <View style={{ flex: 1 }}>
      {/* Główna część aplikacji */}
      <View style={styles.content}>
        {activeTab === 'Home' ? (
          <HomeScreen />
        ) : (
          <SettingsScreen />
        )}
      </View>

      {/* Pasek nawigacyjny */}
      <View style={styles.tabBar}>
        <TouchableOpacity
          style={[styles.tabButton, activeTab === 'Home' && styles.activeTab]}
          onPress={() => setActiveTab('Home')}
        >
          <Text style={styles.tabText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tabButton, activeTab === 'Settings' && styles.activeTab]}
          onPress={() => setActiveTab('Settings')}
        >
          <Text style={styles.tabText}>Settings</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 60,
    backgroundColor: '#f8f8f8',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  tabButton: {
    padding: 10,
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: '#007bff',
  },
  tabText: {
    fontSize: 18,
    color: '#333',
  },
});
