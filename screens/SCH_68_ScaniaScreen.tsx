import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function SCH_68_ScaniaScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>SCH-68 SCANIA</Text>
      <Text style={styles.text}>To jest ekran szczegółowy dla pojazdu SCH-68 SCANIA.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
  },
  text: {
    fontSize: 16,
    textAlign: "center",
  },
});
