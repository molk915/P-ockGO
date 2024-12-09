// screens/SettingsScreen.js
import React, { useState } from 'react';
import { View, Text, Switch, StyleSheet, Button } from 'react-native';

const SettingsScreen = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isNotificationsEnabled, setIsNotificationsEnabled] = useState(true);

  const toggleDarkMode = () => setIsDarkMode(previousState => !previousState);
  const toggleNotifications = () => setIsNotificationsEnabled(previousState => !previousState);

  const handleSaveSettings = () => {
    alert("Settings saved!");
  };

  // Zmieniamy style w zależności od trybu
  const containerStyle = isDarkMode ? styles.darkContainer : styles.lightContainer;
  const textStyle = isDarkMode ? styles.darkText : styles.lightText;
  const switchTrackColor = isDarkMode ? "#81b0ff" : "#f4f3f4";

  return (
    <View style={[styles.container, containerStyle]}>
      <Text style={[styles.header, textStyle]}>Settings</Text>

      {/* Dark Mode */}
      <View style={styles.settingRow}>
        <Text style={[styles.text, textStyle]}>Enable Dark Mode</Text>
        <Switch
          value={isDarkMode}
          onValueChange={toggleDarkMode}
          trackColor={{ false: "#767577", true: "#81b0ff" }}
        />
      </View>

      {/* Notifications */}
      <View style={styles.settingRow}>
        <Text style={[styles.text, textStyle]}>Enable Notifications</Text>
        <Switch
          value={isNotificationsEnabled}
          onValueChange={toggleNotifications}
          trackColor={{ false: "#767577", true: "#81b0ff" }}
        />
      </View>

      <Button
        title="Save Settings"
        onPress={handleSaveSettings}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  lightContainer: {
    backgroundColor: '#fff',
  },
  darkContainer: {
    backgroundColor: '#333',
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  text: {
    fontSize: 18,
  },
  darkText: {
    color: '#fff',
  },
  lightText: {
    color: '#333',
  },
  settingRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginVertical: 10,
  },
});

export default SettingsScreen;
cd