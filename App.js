import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./Screens/HomeScreen";
import PlockMap from "./Screens/PlockMap";
import SettingsScreen from "./Screens/settingsScreen";

const Tab = createBottomTabNavigator();
const theme = {
  colors: {
    background: "#333",
  },
};
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Plock Map" component={PlockMap} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
