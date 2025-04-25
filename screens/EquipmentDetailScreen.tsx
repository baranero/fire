import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';

type EquipmentItem = {
  id: string;
  manufacturer: string;
  model: string;
  category: string;
  type: string;
  status: string;
  inspectionDate: string;
  nextInspectionDate: string;
  owner: string;
  serialNumber: string;
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
      <Text style={styles.title}>{item.model} ({item.category})</Text>
      <Text style={styles.field}><Text style={styles.label}>ID:</Text> {item.id}</Text>
      <Text style={styles.field}><Text style={styles.label}>Numer seryjny:</Text> {item.serialNumber}</Text>
      <Text style={styles.field}><Text style={styles.label}>Producent:</Text> {item.manufacturer}</Text>
      <Text style={styles.field}><Text style={styles.label}>Typ:</Text> {item.type}</Text>
      <Text style={styles.field}><Text style={styles.label}>Kategoria:</Text> {item.category}</Text>
      <Text style={styles.field}><Text style={styles.label}>Status:</Text> {item.status}</Text>
      <Text style={styles.field}><Text style={styles.label}>Data przeglądu:</Text> {item.inspectionDate}</Text>
      <Text style={styles.field}><Text style={styles.label}>Kolejny przegląd:</Text> {item.nextInspectionDate}</Text>
      <Text style={styles.field}><Text style={styles.label}>Posiadacz:</Text> {item.owner}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15
  },
  field: {
    fontSize: 16,
    marginBottom: 8
  },
  label: {
    fontWeight: 'bold'
  }
});
