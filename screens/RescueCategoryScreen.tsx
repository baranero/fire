import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../types";

export default function RescueCategoryScreen() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Wybierz kategorię sprzętu gaśniczego</Text>

      <View style={styles.cardsContainer}>
        {/* GBA */}
        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate("GBA_Rt_3_16_Scania")}>
          <Text style={styles.cardText}>GBA-Rt 3/16 SCANIA</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate("GBA_Rt_2_5_16_4_Mercedes")}>
          <Text style={styles.cardText}>GBA-Rt 2,5/16/4 MERCEDES</Text>
        </TouchableOpacity>

        {/* GCBA */}
        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate("GCBA_Rt_5_40_Man")}>
          <Text style={styles.cardText}>GCBA-Rt 5/40 MAN</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate("GCBA_8_56_Scania")}>
          <Text style={styles.cardText}>GCBA 8/56 SCANIA</Text>
        </TouchableOpacity>

        {/* SCH */}
        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate("SCHD_37_Mercedes")}>
          <Text style={styles.cardText}>SCHD-37 MERCEDES</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate("SCH_68_Scania")}>
          <Text style={styles.cardText}>SCH-68 SCANIA</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate("SRWys_Man")}>
          <Text style={styles.cardText}>SRWys MAN</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  cardsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    width: "100%",
  },
  card: {
    backgroundColor: "#007AFF",
    width: "45%",
    padding: 20,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    elevation: 5,
  },
  cardText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
  },
});
