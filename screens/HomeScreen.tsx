import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from "react-native";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome"; // Ikony FontAwesome
import { RootStackParamList } from "../types";

export default function HomeScreen() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Logo PSP */}
      <Image source={require("../assets/logo-psp.png")} style={styles.logo} />

      {/* Przyciski w dwóch kolumnach */}
      <View style={styles.cardsContainer}>
        {/* Sprzęt */}
        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate("Sprzęt")}
        >
          <Icon name="gear" size={50} color="#fff" style={styles.icon} />
          <Text style={styles.cardText}>Sprzęt</Text>
        </TouchableOpacity>

        {/* Baza wiedzy */}
        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate("BazaWiedzy")}>
          <Icon name="book" size={50} color="#fff" style={styles.icon} />
          <Text style={styles.cardText}>Baza wiedzy</Text>
        </TouchableOpacity>

        {/* Sprawy zmianowe */}
        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate("Zmiany")}>
          <Icon name="calendar" size={50} color="#fff" style={styles.icon} />
          <Text style={styles.cardText}>Sprawy zmianowe</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 40,
  },
  logo: {
    width: 120,
    height: 160,
    marginBottom: 40,
    resizeMode: "contain",
  },
  cardsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between", // Sprawia, że kolumny są równomiernie rozłożone
    width: "100%", // Pełna szerokość kontenera
    paddingHorizontal: 5,
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
  cardText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
    marginTop: 10,
    textAlign: "center",
  },
  icon: {
    marginBottom: 10,
  },
});
