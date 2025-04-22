import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';

// Typ jednego sprzętu
type EquipmentItem = {
  id: string;
  producent: string;
  model: string;
  kategoria: string;
  typ: string;
  posiadacz: string;
  status: string;
  data_przegladu: string;
};

// Typ całego stosu ekranów
type RootStackParamList = {
  'Sprzęt': undefined;
  'Szczegóły': { item: EquipmentItem };
};

export const EquipmentCard = ({ item }: { item: EquipmentItem }) => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <Pressable onPress={() => navigation.navigate('Szczegóły', { item })}>
      <View style={styles.card}>
        <Text style={styles.title}>{item.model} ({item.kategoria})</Text>
        <Text>Producent: {item.producent}</Text>
        <Text>Status: {item.status}</Text>
        <Text>Przegląd: {item.data_przegladu}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#f1f1f1',
    padding: 14,
    marginVertical: 8,
    marginHorizontal: 12,
    borderRadius: 10
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 4
  }
});
