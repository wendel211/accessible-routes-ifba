import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Rotas Acessíveis IFBA</Text>
      <Text style={styles.subtitle}>Tela inicial em desenvolvimento...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#124E89",
  },
  subtitle: {
    marginTop: 10,
    fontSize: 16,
    color: "#555555",
  },
});
