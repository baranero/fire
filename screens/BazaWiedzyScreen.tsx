import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../types";

export default function BazaWiedzyScreen() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Wybierz kategorię ratownictwa</Text>

      <View style={styles.cardsContainer}>
        {/* Ratownictwo chemiczne i ekologiczne */}
        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate("RatownictwoChemiczne")}
        >
          <Text style={styles.cardText}>Ratownictwo chemiczne i ekologiczne</Text>
        </TouchableOpacity>

        {/* Ratownictwo techniczne */}
        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate("RatownictwoTechniczne")}
        >
          <Text style={styles.cardText}>Ratownictwo techniczne</Text>
        </TouchableOpacity>

        {/* Ratownictwo wodne */}
        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate("RatownictwoWodne")}
        >
          <Text style={styles.cardText}>Ratownictwo wodne</Text>
        </TouchableOpacity>

        {/* Ratownictwo wysokościowe */}
        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate("RatownictwoWysokosciowe")}
        >
          <Text style={styles.cardText}>Ratownictwo wysokościowe</Text>
        </TouchableOpacity>

        {/* Ratownictwo medyczne */}
        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate("RatownictwoMedyczne")}
        >
          <Text style={styles.cardText}>Ratownictwo medyczne</Text>
        </TouchableOpacity>

        {/* Działania poszukiwawczo-ratownicze */}
        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate("PoszukiwawczoRatownicze")}
        >
          <Text style={styles.cardText}>Działania poszukiwawczo-ratownicze</Text>
        </TouchableOpacity>

        {/* Gaszenie pożarów */}
        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate("GaszeniePozarow")}
        >
          <Text style={styles.cardText}>Gaszenie pożarów</Text>
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
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
  },
});
