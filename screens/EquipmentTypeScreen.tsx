import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from "react-native";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../types";
import Icon from "react-native-vector-icons/FontAwesome";

export default function EquipmentTypeScreen() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={require("../assets/logo-psp.png")} style={styles.logo} />
      <View style={styles.cardsContainer}>
        {/* Sprzęt wysokościowy */}
        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate("SprzętWysokościowy")}
        >
          <Icon name="building" size={50} color="#fff" style={styles.icon} />
          <Text style={styles.cardText}>Sprzęt</Text>
          <Text style={styles.cardText}>wysokościowy</Text>
        </TouchableOpacity>
        {/* Sprzęt gaśniczy */}
        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate("SprzętGaśniczy")}>
          <Icon name="fire" size={50} color="#fff" style={styles.icon} />
          <Text style={styles.cardText}>Sprzęt</Text>
          <Text style={styles.cardText}>gaśniczy</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 40,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 40,
    textAlign: "center",
  },
  card: {
    backgroundColor: "#007AFF",
    padding: 20,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    elevation: 5,
    width: "45%", // Każda karta ma szerokość 45% w przypadku dwóch kolumn
    marginBottom: 20,
    alignItems: "center",
  },
  cardsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between", // Sprawia, że kolumny są równomiernie rozłożone
    width: "100%", // Pełna szerokość kontenera
    paddingHorizontal: 5,
  },
  cardText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center", // Wyśrodkowanie tekstu w kartach
  },
  icon: {
    marginBottom: 10,
  },
  logo: {
    width: 120,
    height: 160,
    marginBottom: 40,
    resizeMode: "contain",
  },
});
