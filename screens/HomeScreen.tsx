import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { NavigationProp, useNavigation } from "@react-navigation/native";


export default function HomeScreen() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/logo-psp.png')}
        style={styles.logo}
      />
      <TouchableOpacity style={styles.card} onPress={() => navigation.navigate("Sprzęt")}>
        <Text style={styles.cardText}>Sprzęt wysokościowy</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
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
  },
  cardText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },
  logo: {
    width: 120,
    height: 160,
    marginBottom: 40,
    resizeMode: 'contain' // Utrzymanie proporcji
  }
});
