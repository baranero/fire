import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';

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

type RootStackParamList = {
  'Szczegóły': { item: EquipmentItem };
};

type DetailScreenRouteProp = RouteProp<RootStackParamList, 'Szczegóły'>;

export default function EquipmentDetailScreen() {
  const route = useRoute<DetailScreenRouteProp>();
  const { item } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{item.model} ({item.kategoria})</Text>
      <Text>Producent: {item.producent}</Text>
      <Text>Typ: {item.typ}</Text>
      <Text>Posiadacz: {item.posiadacz}</Text>
      <Text>Status: {item.status}</Text>
      <Text>Data przeglądu: {item.data_przegladu}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10
  }
});
