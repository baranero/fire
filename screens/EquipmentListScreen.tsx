// EquipmentListScreen.tsx
import React, { useState } from 'react';
import { View, FlatList, TextInput, StyleSheet, Text, Button, ScrollView, TouchableOpacity } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { EquipmentCard } from '../components/EquipmentCard';
import { FilterGroup } from '../components/FilterGroup';
import equipmentData from '../data/mock_equipment.json';

const allCategories = [...new Set(equipmentData.map((item) => item.kategoria))];
const allStatuses = [...new Set(equipmentData.map((item) => item.status))];
const allProducers = [...new Set(equipmentData.map((item) => item.producent))];
const allTypes = [...new Set(equipmentData.map((item) => item.typ))];
const allOwners = [...new Set(equipmentData.map((item) => item.posiadacz))];

export default function EquipmentListScreen() {
  const [search, setSearch] = useState('');
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedStatuses, setSelectedStatuses] = useState<string[]>([]);
  const [selectedProducers, setSelectedProducers] = useState<string[]>([]);
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [selectedOwners, setSelectedOwners] = useState<string[]>([]);
  const [filtersVisible, setFiltersVisible] = useState(false);
  const [sortOption, setSortOption] = useState<string | null>(null);

  const toggleSelection = (selected: string[], setSelected: (s: string[]) => void, value: string) => {
    setSelected(
      selected.includes(value) ? selected.filter((v) => v !== value) : [...selected, value]
    );
  };

  const resetFilters = () => {
    setSelectedCategories([]);
    setSelectedStatuses([]);
    setSelectedProducers([]);
    setSelectedTypes([]);
    setSelectedOwners([]);
    setSearch('');
    setSortOption(null);
  };

  const filteredData = equipmentData
    .filter((item) => {
      const matchSearch = Object.values(item).some((value) =>
        String(value).toLowerCase().includes(search.toLowerCase())
      );
      const matchCategory = selectedCategories.length ? selectedCategories.includes(item.kategoria) : true;
      const matchStatus = selectedStatuses.length ? selectedStatuses.includes(item.status) : true;
      const matchProducer = selectedProducers.length ? selectedProducers.includes(item.producent) : true;
      const matchType = selectedTypes.length ? selectedTypes.includes(item.typ) : true;
      const matchOwner = selectedOwners.length ? selectedOwners.includes(item.posiadacz) : true;

      return (
        matchSearch && matchCategory && matchStatus && matchProducer && matchType && matchOwner
      );
    })
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

  const renderActiveFilters = () => {
    const filters = [
      ...selectedCategories.map((v) => `Kategoria: ${v}`),
      ...selectedStatuses.map((v) => `Status: ${v}`),
      ...selectedProducers.map((v) => `Producent: ${v}`),
      ...selectedTypes.map((v) => `Typ: ${v}`),
      ...selectedOwners.map((v) => `Posiadacz: ${v}`)
    ];
    if (filters.length === 0) return null;
    return (
      <View style={styles.activeFilters}>
        <Text style={styles.activeFiltersLabel}>Aktywne filtry:</Text>
        {filters.map((f, index) => (
          <Text key={index} style={styles.activeFilterItem}>• {f}</Text>
        ))}
      </View>
    );
  };

  return (
    <ScrollView style={styles.container}>
      <TextInput
        placeholder="Search equipment..."
        value={search}
        onChangeText={setSearch}
        style={styles.input}
      />

      <View style={styles.pickerContainerTop}>
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
      </View>

      {renderActiveFilters()}

      <TouchableOpacity onPress={() => setFiltersVisible(!filtersVisible)} style={styles.toggleFilters}>
        <Text style={styles.toggleFiltersText}>{filtersVisible ? 'Ukryj filtry ▲' : 'Pokaż filtry ▼'}</Text>
      </TouchableOpacity>

      {filtersVisible && (
        <View>
          <FilterGroup
            label="Kategoria"
            options={allCategories}
            selected={selectedCategories}
            onChange={(value) => toggleSelection(selectedCategories, setSelectedCategories, value)}
          />
          <FilterGroup
            label="Status"
            options={allStatuses}
            selected={selectedStatuses}
            onChange={(value) => toggleSelection(selectedStatuses, setSelectedStatuses, value)}
          />
          <FilterGroup
            label="Producent"
            options={allProducers}
            selected={selectedProducers}
            onChange={(value) => toggleSelection(selectedProducers, setSelectedProducers, value)}
          />
          <FilterGroup
            label="Typ"
            options={allTypes}
            selected={selectedTypes}
            onChange={(value) => toggleSelection(selectedTypes, setSelectedTypes, value)}
          />
          <FilterGroup
            label="Posiadacz"
            options={allOwners}
            selected={selectedOwners}
            onChange={(value) => toggleSelection(selectedOwners, setSelectedOwners, value)}
          />

          <View style={styles.resetButton}>
            <Button title="Resetuj filtry" onPress={resetFilters} color="#cc0000" />
          </View>
        </View>
      )}

      <FlatList
        data={filteredData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <EquipmentCard item={item} />}
        scrollEnabled={false}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
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
  toggleFilters: {
    marginHorizontal: 12,
    marginBottom: 10
  },
  toggleFiltersText: {
    fontSize: 16,
    color: '#007AFF',
    fontWeight: 'bold'
  },
  pickerContainerTop: {
    marginHorizontal: 12,
    marginBottom: 10
  },
  resetButton: {
    marginHorizontal: 12,
    marginBottom: 20
  },
  activeFilters: {
    marginHorizontal: 12,
    marginBottom: 10
  },
  activeFiltersLabel: {
    fontWeight: 'bold',
    marginBottom: 4,
    color: '#333'
  },
  activeFilterItem: {
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
    backgroundColor: '#f0f0f0'
  }
});
