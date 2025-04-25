import React, { useState, useEffect } from "react";
import {
  View,
  FlatList,
  TextInput,
  StyleSheet,
  Text,
  Button,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import RNPickerSelect from "react-native-picker-select";
import { EquipmentCard } from "../components/EquipmentCard";
import { FilterGroup } from "../components/FilterGroup";

const SHEET_URL =
  "https://script.google.com/macros/s/AKfycbwZYCrft4ykp7KiI9Q3rF2g47o3ZudBFVmUOYtlV0LI_rdBvDjsbQvkUn7O9qrXrNXk/exec";

export default function EquipmentListScreen() {
  const [equipmentData, setEquipmentData] = useState<any[]>([]);
  const [search, setSearch] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedStatuses, setSelectedStatuses] = useState<string[]>([]);
  const [selectedManufacturers, setSelectedManufacturers] = useState<string[]>([]);
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [selectedOwners, setSelectedOwners] = useState<string[]>([]);
  const [filtersVisible, setFiltersVisible] = useState(false);
  const [sortOption, setSortOption] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const mapPolishToEnglish = (item: any) => ({
    id: item["Unikalny ID"],
    model: item["Model"],
    type: item["Typ sprzętu"],
    category: item["Kategoria sprzętu"],
    manufacturer: item["Producent"],
    status: item["Wynik przeglądu"],
    inspectionDate: item["Data przeglądu"],
    nextInspectionDate: item["Data kolejnego przeglądu"],
    owner: item["Posiadacz sprzętu"],
    serialNumber: item["Numer seryjny"]
  });

  useEffect(() => {
    fetch(SHEET_URL)
      .then((res) => res.json())
      .then((data) => {
        const mappedData = data.map(mapPolishToEnglish);
        setEquipmentData(mappedData);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch equipment data:", err);
        setLoading(false);
      });
  }, []);

  const toggleSelection = (
    selected: string[],
    setSelected: (s: string[]) => void,
    value: string
  ) => {
    setSelected(
      selected.includes(value) ? selected.filter((v) => v !== value) : [...selected, value]
    );
  };

  const resetFilters = () => {
    setSelectedCategories([]);
    setSelectedStatuses([]);
    setSelectedManufacturers([]);
    setSelectedTypes([]);
    setSelectedOwners([]);
    setSearch("");
    setSortOption(null);
  };

  const allCategories = [...new Set(equipmentData.map((item) => item.category))];
  const allStatuses = [...new Set(equipmentData.map((item) => item.status))];
  const allManufacturers = [...new Set(equipmentData.map((item) => item.manufacturer))];
  const allTypes = [...new Set(equipmentData.map((item) => item.type))];
  const allOwners = [...new Set(equipmentData.map((item) => item.owner))];

  const filteredData = equipmentData
    .filter((item) => {
      const matchSearch = Object.values(item).some((value) =>
        String(value).toLowerCase().includes(search.toLowerCase())
      );
      const matchCategory = selectedCategories.length
        ? selectedCategories.includes(item.category)
        : true;
      const matchStatus = selectedStatuses.length ? selectedStatuses.includes(item.status) : true;
      const matchManufacturer = selectedManufacturers.length
        ? selectedManufacturers.includes(item.manufacturer)
        : true;
      const matchType = selectedTypes.length ? selectedTypes.includes(item.type) : true;
      const matchOwner = selectedOwners.length ? selectedOwners.includes(item.owner) : true;

      return (
        matchSearch && matchCategory && matchStatus && matchManufacturer && matchType && matchOwner
      );
    })
    .sort((a, b) => {
      switch (sortOption) {
        case "az":
          return a.model.localeCompare(b.model);
        case "za":
          return b.model.localeCompare(a.model);
        case "date_new":
          return new Date(b.inspectionDate).getTime() - new Date(a.inspectionDate).getTime();
        case "date_old":
          return new Date(a.inspectionDate).getTime() - new Date(b.inspectionDate).getTime();
        default:
          return 0;
      }
    });

  return (
    <ScrollView style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" color="#007AFF" />
      ) : (
        <>
          <TextInput
            placeholder="Search equipment..."
            value={search}
            onChangeText={setSearch}
            style={styles.input}
          />

          <View style={styles.pickerContainerTop}>
            <RNPickerSelect
              onValueChange={(value) => setSortOption(value)}
              placeholder={{ label: "Sort by...", value: null }}
              items={[
                { label: "Model A → Z", value: "az" },
                { label: "Model Z → A", value: "za" },
                { label: "Inspection Date (Newest)", value: "date_new" },
                { label: "Inspection Date (Oldest)", value: "date_old" },
              ]}
              style={pickerSelectStyles}
            />
          </View>

          <TouchableOpacity
            onPress={() => setFiltersVisible(!filtersVisible)}
            style={styles.toggleFilters}
          >
            <Text style={styles.toggleFiltersText}>
              {filtersVisible ? "Hide filters ▲" : "Show filters ▼"}
            </Text>
          </TouchableOpacity>

          {filtersVisible && (
            <View>
              <FilterGroup
                label="Category"
                options={allCategories}
                selected={selectedCategories}
                onChange={(value) =>
                  toggleSelection(selectedCategories, setSelectedCategories, value)
                }
              />
              <FilterGroup
                label="Status"
                options={allStatuses}
                selected={selectedStatuses}
                onChange={(value) => toggleSelection(selectedStatuses, setSelectedStatuses, value)}
              />
              <FilterGroup
                label="Manufacturer"
                options={allManufacturers}
                selected={selectedManufacturers}
                onChange={(value) =>
                  toggleSelection(selectedManufacturers, setSelectedManufacturers, value)
                }
              />
              <FilterGroup
                label="Type"
                options={allTypes}
                selected={selectedTypes}
                onChange={(value) => toggleSelection(selectedTypes, setSelectedTypes, value)}
              />
              <FilterGroup
                label="Owner"
                options={allOwners}
                selected={selectedOwners}
                onChange={(value) => toggleSelection(selectedOwners, setSelectedOwners, value)}
              />

              <View style={styles.resetButton}>
                <Button title="Reset filters" onPress={resetFilters} color="#cc0000" />
              </View>
            </View>
          )}

          <FlatList
            data={filteredData}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <EquipmentCard item={item} />}
            scrollEnabled={false}
          />
        </>
      )}
    </ScrollView>
  );
}

// StyleSheet remains unchanged (same as in your original code)
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    paddingTop: 10,
  },
  input: {
    backgroundColor: "#eee",
    marginHorizontal: 12,
    marginBottom: 10,
    borderRadius: 10,
    padding: 10,
    fontSize: 16,
  },
  pickerContainerTop: {
    marginHorizontal: 12,
    marginBottom: 10,
  },
  toggleFilters: {
    marginHorizontal: 12,
    marginBottom: 10,
  },
  toggleFiltersText: {
    fontSize: 16,
    color: "#007AFF",
    fontWeight: "bold",
  },
  resetButton: {
    marginHorizontal: 12,
    marginBottom: 20,
  },
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 10,
    color: "black",
    backgroundColor: "#f0f0f0",
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 10,
    color: "black",
    backgroundColor: "#f0f0f0",
  },
});
