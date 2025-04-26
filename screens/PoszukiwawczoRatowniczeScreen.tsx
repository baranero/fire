import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

export default function PoszukiwawczoRatowniczeScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Działania poszukiwawczo-ratownicze</Text>
      <Text style={styles.text}>Treść dotycząca działań poszukiwawczo-ratowniczych</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 15,
  },
  text: {
    fontSize: 16,
    marginBottom: 10,
  },
});
