import React, { useState } from 'react';
import { View, FlatList, TextInput, StyleSheet, Text } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { EquipmentCard } from '../components/EquipmentCard';
import equipmentData from '../data/mock_equipment.json';

export default function EquipmentListScreen() {
  const [search, setSearch] = useState('');
  const [sortOption, setSortOption] = useState<string | null>(null);

  const filteredData = equipmentData
    .filter((item) =>
      Object.values(item).some((value) =>
        String(value).toLowerCase().includes(search.toLowerCase())
      )
    )
    .sort((a, b) => {
      switch (sortOption) {
        case 'az':
          return a.model.localeCompare(b.model);
        case 'za':
          return b.model.localeCompare(a.model);
        case 'date_new':
          return new Date(b.data_przegladu).getTime() - new Date(a.data_przegladu).getTime();
        case 'date_old':
          return new Date(a.data_przegladu).getTime() - new Date(b.data_przegladu).getTime();
        default:
          return 0;
      }
    });

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Search equipment..."
        value={search}
        onChangeText={setSearch}
        style={styles.input}
      />

      <RNPickerSelect
        onValueChange={(value) => setSortOption(value)}
        placeholder={{ label: "Sortuj według...", value: null }}
        items={[
          { label: "Model A → Z", value: "az" },
          { label: "Model Z → A", value: "za" },
          { label: "Data przeglądu (najnowsze)", value: "date_new" },
          { label: "Data przeglądu (najstarsze)", value: "date_old" }
        ]}
        style={pickerSelectStyles}
      />

      {sortOption && (
        <View style={styles.sortInfo}>
          <Text style={styles.sortText}>
            Aktualne sortowanie: {(() => {
              switch (sortOption) {
                case 'az': return 'Model A → Z';
                case 'za': return 'Model Z → A';
                case 'date_new': return 'Data przeglądu (najnowsze)';
                case 'date_old': return 'Data przeglądu (najstarsze)';
                default: return '';
              }
            })()}
          </Text>
        </View>
      )}

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
    backgroundColor: '#fff',
    paddingTop: 10
  },
  input: {
    backgroundColor: '#eee',
    marginHorizontal: 12,
    marginBottom: 10,
    borderRadius: 10,
    padding: 10,
    fontSize: 16
  },
  sortInfo: {
    marginHorizontal: 12,
    marginBottom: 10
  },
  sortText: {
    fontSize: 14,
    color: '#555'
  }
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 10,
    color: 'black',
    marginHorizontal: 12,
    marginBottom: 10,
    backgroundColor: '#f0f0f0'
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 10,
    color: 'black',
    marginHorizontal: 12,
    marginBottom: 10,
    backgroundColor: '#f0f0f0'
  }
});
