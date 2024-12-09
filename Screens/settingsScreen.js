// screens/SettingsScreen.js
import React, { useState } from 'react';
import { View, Text, Switch, StyleSheet, Button } from 'react-native';

const SettingsScreen = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isNotificationsEnabled, setIsNotificationsEnabled] = useState(true);

  const toggleDarkMode = () => setIsDarkMode(previousState => !previousState);
  const toggleNotifications = () => setIsNotificationsEnabled(previousState => !previousState);

  const handleSaveSettings = () => {
    // Tu można dodać logikę zapisywania ustawień, np. w localStorage, AsyncStorage itp.
    alert("Settings saved!");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Settings</Text>

      {/* Dark Mode */}
      <View style={styles.settingRow}>
        <Text style={styles.text}>Enable Dark Mode</Text>
        <Switch
          value={isDarkMode}
          onValueChange={toggleDarkMode}
        />
      </View>

      {/* Notifications */}
      <View style={styles.settingRow}>
        <Text style={styles.text}>Enable Notifications niggas</Text>
        <Switch
          value={isNotificationsEnabled}
          onValueChange={toggleNotifications}
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
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  settingRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginVertical: 10,
  },
  text: {
    fontSize: 18,
  },
});

export default SettingsScreen;
