import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function RatownictwoWysokoscioweScreen() {
  const navigation = useNavigation();

  const openPDF = (file: any) => {
    navigation.navigate("PDFViewer", { file }); // Przekazujemy nazwę pliku do PDFViewer
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Ratownictwo wysokościowe</Text>

      <View style={styles.categoryContainer}>
        <Text style={styles.categoryTitle}>Zasady</Text>
        <TouchableOpacity style={styles.button} onPress={() => openPDF('ratownictwo-wysokosciowe/rat-wys.pdf')}>
          <Text style={styles.buttonText}>Otwórz PDF Zasady</Text>
        </TouchableOpacity>
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  categoryContainer: {
    marginBottom: 20,
  },
  categoryTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});
