import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import Ionicons from 'react-native-vector-icons/Ionicons';

const CustomDropdown = ({
  label,
  items,
  value,
  onValueChange,
  placeholder,
  icon,
  style,
  errorMessage,
  ...rest
}) => {
  // Find the currently selected item based on the value prop
  const selectedItem = items.find(item => item.value === value);

  return (
    <View style={[styles.container, style]}>
      {label && <Text style={styles.label}>{label}</Text>}
      <SelectDropdown
        data={items}
        onSelect={selectedItem => onValueChange(selectedItem.value)}
        renderButton={(selectedItem, isOpened) => {
          return (
            <View style={styles.dropdownButtonStyle}>
              {selectedItem && (
                <Ionicons
                  name={selectedItem.icon}
                  style={styles.dropdownButtonIconStyle}
                />
              )}
              <Text style={styles.dropdownButtonTextStyle}>
                {(selectedItem && selectedItem.label) ||
                  (placeholder ? placeholder.label : 'Select an option')}
              </Text>
              <Ionicons
                name={isOpened ? 'chevron-up' : 'chevron-down'}
                style={styles.dropdownButtonArrowStyle}
              />
            </View>
          );
        }}
        renderItem={(item, index, isSelected) => {
          return (
            <View
              style={{
                ...styles.dropdownItemStyle,
                ...(isSelected && {backgroundColor: '#D2D9DF'}),
              }}>
              <Ionicons name={item.icon} style={styles.dropdownItemIconStyle} />
              <Text style={styles.dropdownItemTextStyle}>{item.label}</Text>
            </View>
          );
        }}
        showsVerticalScrollIndicator={false}
        dropdownStyle={styles.dropdownMenuStyle}
        {...rest}
      />
      {console.log('errorMessage', errorMessage)}
      {errorMessage && <Text style={styles.error}>{errorMessage}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    color: 'black',
  },
  dropdownButtonStyle: {
    width: '100%',
    height: 50,
    backgroundColor: '#FFF',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'gray',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  dropdownButtonTextStyle: {
    flex: 1,
    fontSize: 14,
    color: 'black',
    textAlign: 'left',
  },
  dropdownButtonArrowStyle: {
    fontSize: 20,
    color: 'gray',
  },
  dropdownButtonIconStyle: {
    fontSize: 20,
    marginRight: 8,
    color: 'black',
  },
  dropdownMenuStyle: {
    backgroundColor: '#EFEFEF',
    borderRadius: 8,
  },
  dropdownItemStyle: {
    width: '100%',
    flexDirection: 'row',
    paddingHorizontal: 12,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 8,
  },
  dropdownItemTextStyle: {
    flex: 1,
    fontSize: 14,
    color: 'black',
    textAlign: 'left',
  },
  dropdownItemIconStyle: {
    fontSize: 20,
    marginRight: 8,
    color: 'black',
  },
  error: {
    color: 'red',
    marginTop: 5,
  },
});

export default CustomDropdown;
