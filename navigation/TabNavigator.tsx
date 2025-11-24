import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import HomeScreen from "../screens/HomeScreen";
import MapaScreen from "../screens/MapaScreen";
import VoiceNavigationScreen from "../screens/VoiceNavigationScreen";
import AlertsScreen from "../screens/AlertsScreen";
import AboutScreen from "../screens/AboutScreen";

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#FFFFFF",
          borderTopWidth: 1,
          borderColor: "#DCDCDC",
          height: 60,
        },
        tabBarActiveTintColor: "#1F8E46",
        tabBarInactiveTintColor: "#000000",
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === "Home") iconName = "home";
          if (route.name === "Mapa") iconName = "map";
          if (route.name === "NavegacaoVoz") iconName = "mic";
          if (route.name === "Alertas") iconName = "warning";
          if (route.name === "Sobre") iconName = "information-circle";

          return <Ionicons name={iconName} size={22} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Mapa" component={MapaScreen} />
      <Tab.Screen name="NavegacaoVoz" component={VoiceNavigationScreen} />
      <Tab.Screen name="Alertas" component={AlertsScreen} />
      <Tab.Screen name="Sobre" component={AboutScreen} />
    </Tab.Navigator>
  );
}
