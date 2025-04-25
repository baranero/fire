import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function GBA_Rt_2_5_16_4_MercedesScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>GBA-Rt 2,5/16/4 MERCEDES</Text>
      <Text style={styles.text}>To jest ekran szczegółowy dla pojazdu GBA-Rt 2,5/16/4 MERCEDES.</Text>
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
