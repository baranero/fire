import React, { useState } from 'react';
import { View, FlatList, TextInput, StyleSheet } from 'react-native';
import { EquipmentCard } from '../components/EquipmentCard';
import equipmentData from '../data/mock_equipment.json';

export default function EquipmentListScreen() {
  const [search, setSearch] = useState('');

  const filteredData = equipmentData.filter((item) => {
    const searchText = search.toLowerCase();
    return Object.values(item).some((value) =>
      String(value).toLowerCase().includes(searchText)
    );
  });

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Wyszukaj sprzęt..."
        value={search}
        onChangeText={setSearch}
        style={styles.input}
      />

      <FlatList
        data={filteredData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <EquipmentCard item={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    backgroundColor: '#fff'
  },
  input: {
    backgroundColor: '#eee',
    marginHorizontal: 12,
    marginBottom: 10,
    borderRadius: 10,
    padding: 10,
    fontSize: 16
  }
});
