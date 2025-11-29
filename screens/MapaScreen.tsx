import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import CampusMap from "../components/CampusMap"; // ← MAPA SVG AQUI

export default function MapaScreen({ navigation }) {
  const destinos = [
    { label: "Biblioteca", icon: "book" },
    { label: "Bloco 1", icon: "business" },
    { label: "Bloco 2", icon: "business-outline" },
    { label: "Refeitório", icon: "restaurant" },
    { label: "Banheiro Acessível", icon: "accessibility" },
    { label: "Secretaria", icon: "people" },
    { label: "Entrada Principal", icon: "walk" },
  ];

  return (
    <SafeAreaView style={styles.container}>

      {/* CABEÇALHO */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Para onde você quer ir?</Text>
      </View>

      {/* MAPA DO CAMPUS */}
      <CampusMap />

      {/* LISTA DE DESTINOS */}
      <ScrollView
        style={styles.scrollArea}
        contentContainerStyle={{ paddingBottom: 40 }}
        showsVerticalScrollIndicator={false}
      >
        {destinos.map((item, index) => (
          <TouchableOpacity key={index} style={styles.button}>
            <Ionicons
              name={item.icon}
              size={22}
              color="#FFFFFF"
              style={styles.buttonIcon}
            />
            <Text style={styles.buttonText}>{item.label}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

    </SafeAreaView>
  );
}

const PRIMARY_GREEN = "#1F8E46";
const PRIMARY_BLUE = "#124E89";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },

  header: {
    backgroundColor: PRIMARY_BLUE,
    paddingTop: 15,
    paddingBottom: 25,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 22,
    borderBottomRightRadius: 22,

    shadowColor: "#000",
    shadowOpacity: 0.18,
    shadowOffset: { width: 0, height: 2 },
    elevation: 7,
  },

  headerTitle: {
    fontSize: 22,
    color: "#FFFFFF",
    fontWeight: "bold",
    textAlign: "center",
    letterSpacing: 0.5,
  },

  scrollArea: {
    flex: 1,
    paddingHorizontal: 20,
    marginTop: 10,
  },

  button: {
    backgroundColor: PRIMARY_GREEN,
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderRadius: 12,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 14,

    shadowColor: "#00000030",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    elevation: 4,
  },

  buttonIcon: {
    marginRight: 12,
  },

  buttonText: {
    color: "#FFFFFF",
    fontSize: 17,
    fontWeight: "600",
    letterSpacing: 0.4,
  },
});
