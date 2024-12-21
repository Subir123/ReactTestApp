// RadioButtonGroup.js
import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const RadioButton = ({ options, initialSelectedId, onSelect }) => {
  // State to manage the selected radio button
  const [selectedId, setSelectedId] = useState(initialSelectedId || null);

  // Function to handle radio button selection
  const handleSelect = (id) => {
    setSelectedId(id);
    if (onSelect) {
      onSelect(id);
    }
  };

  // Function to render each radio button item
  const renderRadioButton = ({ item }) => (
    <TouchableOpacity
      style={styles.radioButtonContainer}
      onPress={() => handleSelect(item.id)}
    >
      <Ionicons
        name={selectedId === item.id ? 'radio-button-on' : 'radio-button-off'}
        size={24}
        color={selectedId === item.id ? 'blue' : 'gray'}
      />
      <Text style={styles.radioButtonLabel}>{item.label}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={options}
        renderItem={renderRadioButton}
        keyExtractor={item => item.id}
        extraData={selectedId} // Rerender the FlatList when selectedId changes
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
  radioButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding:20
  },
  radioButtonLabel: {
    fontSize: 16,
    marginLeft: 10,
    color:'black'
  },
});

export default RadioButton;
