// FilterGroup.tsx
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

interface FilterGroupProps {
  label: string;
  options: string[];
  selected: string[];
  onChange: (value: string) => void;
}

export const FilterGroup = ({ label, options, selected, onChange }: FilterGroupProps) => {
  return (
    <View style={styles.group}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.optionsContainer}>
        {options.map((option) => {
          const isSelected = selected.includes(option);
          return (
            <TouchableOpacity
              key={option}
              style={[styles.option, isSelected && styles.selected]}
              onPress={() => onChange(option)}
            >
              <Text style={[styles.optionText, isSelected && styles.optionTextSelected]}>
                {option}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  group: {
    marginHorizontal: 12,
    marginBottom: 10,
  },
  label: {
    fontWeight: "bold",
    marginBottom: 4,
  },
  optionsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },
  option: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 20,
    paddingVertical: 4,
    paddingHorizontal: 12,
    marginRight: 6,
    marginBottom: 6,
    backgroundColor: "#eee",
  },
  selected: {
    backgroundColor: "#007AFF",
    borderColor: "#007AFF",
  },
  optionText: {
    color: "black",
  },
  optionTextSelected: {
    color: "white",
  },
});
