// CheckboxGroup.js
import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import Fontisto from 'react-native-vector-icons/Fontisto';

const Checkbox = ({ options, initialSelectedIds, onSelect }) => {
  // State to manage the selected checkboxes
  const [selectedIds, setSelectedIds] = useState(initialSelectedIds || []);

  // Function to handle checkbox selection
  const handleSelect = (id) => {
    let updatedSelectedIds = [...selectedIds];
    if (updatedSelectedIds.includes(id)) {
      updatedSelectedIds = updatedSelectedIds.filter(selectedId => selectedId !== id);
    } else {
      updatedSelectedIds.push(id);
    }
    setSelectedIds(updatedSelectedIds);
    if (onSelect) {
      onSelect(updatedSelectedIds);
    }
  };

  // Function to render each checkbox item
  const renderCheckbox = ({ item }) => (
    <TouchableOpacity
      style={styles.checkboxContainer}
      onPress={() => handleSelect(item.id)}
    >
      <Fontisto
        name={selectedIds.includes(item.id) ? 'checkbox-active'  : 'checkbox-passive'}
        size={24}
        color={selectedIds.includes(item.id) ? 'blue' : 'gray'}
      />
      <Text style={styles.checkboxLabel}>{item.label}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={options}
        renderItem={renderCheckbox}
        keyExtractor={item => item.id}
        extraData={selectedIds} // Rerender the FlatList when selectedIds changes
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // padding: 10,
    // backgroundColor: '#fff',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding:20
  },
  checkboxLabel: {
    fontSize: 16,
    marginLeft: 10,
  },
});

export default Checkbox;
