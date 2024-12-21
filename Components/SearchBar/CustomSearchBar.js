import React, { useState, useEffect } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import _ from 'lodash';
import Icon from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';


const CustomSearchComponent = ({ data, onSearch, placeholder = "Search...", debounceTime = 300 }) => {
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const debouncedSearch = _.debounce((text) => {
      performSearch(text);
    }, debounceTime);

    debouncedSearch(searchTerm);

    return () => debouncedSearch.cancel();
  }, [searchTerm, data, onSearch]);

  const performSearch = (text) => {
    if (text) {
      const filtered = data.filter(item =>
        item.name.toLowerCase().includes(text.toLowerCase())
      );
      onSearch(filtered);
    } else {
      onSearch(data);
    }
  };

  const clearSearch = () => {
    setSearchTerm('')
  }

  return (
    <View style={styles.container}>
      <View style={styles.searchBox}>
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          placeholderTextColor={'gray'}
          value={searchTerm}
          onChangeText={text => setSearchTerm(text)}
        />

        {searchTerm.length > 0 ?
          <TouchableOpacity
            style={styles.iconContainer}
            onPress={() => clearSearch(searchTerm)} // Perform search on icon press
          >
            <Icon name="cross" size={20} color="black" />
          </TouchableOpacity>
          :
          <View style={styles.iconContainer}>
            <AntDesign name="search1" size={22} color="blue" />
          </View>
        }
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
  },
  input: {
    flex: 1, // Ensure TextInput takes up available space
    height: 45,
    paddingHorizontal: 10,
    color: 'black' // Ensure text color is black
  },
  iconContainer: {
    padding: 10,
  },
});

export default CustomSearchComponent;
