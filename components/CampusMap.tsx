import React from "react";
import { View, StyleSheet } from "react-native";
import { SvgXml } from "react-native-svg";
import { campusSvgXml } from "../assets/campusSvg";

export default function CampusMap() {
  return (
    <View style={styles.container}>
      <SvgXml xml={campusSvgXml} width="100%" height="100%" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 360,
    backgroundColor: "#FFFFFF",
    borderRadius: 14,
    overflow: "hidden",

    // Sombra suave
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 3 },
    elevation: 4,

    marginBottom: 20,
    marginTop: 20,
  },
});
