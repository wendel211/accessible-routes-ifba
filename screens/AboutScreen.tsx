import React from "react";
import { View, Text } from "react-native";

export default function AboutScreen() {
  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 18, fontWeight: "bold" }}>
        Sobre o Aplicativo
      </Text>
      <Text style={{ marginTop: 10 }}>
        Informações do projeto...
      </Text>
    </View>
  );
}
