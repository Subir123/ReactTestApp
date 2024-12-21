// src/components/CustomTextInput.js
import React, {useState} from 'react';
import {TouchableOpacity} from 'react-native';
import {TextInput, View, Text, StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const CustomTextInput = ({
  label,
  value,
  onChangeText,
  placeholder,
  color,
  secureTextEntry,
  multiline,
  numberOfLines,
  keyboardType,
  style,
  icon,
  inputStyle,
  error,
  clearError,
  ...rest
}) => {
  // Wrapper for onChangeText to also call clearError
  const handleChangeText = text => {
    onChangeText(text);
    if (error && clearError) {
      clearError();
    }
  };
  const [isSecure, setIsSecure] = useState(secureTextEntry);
  return (
    <View style={[styles.container, style]}>
      {label && <Text style={[styles.label, {color: color}]}>{label}</Text>}
      <View style={styles.inputContainer}>
        {icon && (
          <Ionicons name={icon} size={20} color="gray" style={styles.icon} />
        )}
        <TextInput
          style={[
            styles.input,
            multiline && {height: 100, textAlignVertical: 'top'},
            error ? styles.errorInput : null,
            style,
          ]}
          placeholder={placeholder}
          value={value}
          onChangeText={handleChangeText}
          secureTextEntry={secureTextEntry}
          keyboardType={keyboardType}
          multiline={multiline}
          numberOfLines={numberOfLines}
          {...rest}
        />
        {secureTextEntry && (
          <TouchableOpacity onPress={() => setIsSecure(!isSecure)}>
            <Ionicons
              name={isSecure ? 'eye-off' : 'eye'}
              size={20}
              color="gray"
              style={styles.toggleIcon}
            />
          </TouchableOpacity>
        )}
      </View>
      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    marginHorizontal:10
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    color: '#333',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: 'gray',
    borderWidth: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
  },
  input: {
    flex: 1,
    height: 50,
    paddingVertical: 5,
    color:'black'
  },
  errorInput: {
    borderColor: 'red',
  },
  icon: {
    marginRight: 10,
  },
  errorText: {
    color: 'red',
    marginTop: 5,
  },
});

export default CustomTextInput;
