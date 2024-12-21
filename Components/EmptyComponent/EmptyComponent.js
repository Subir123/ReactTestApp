// EmptyComponent.js
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const EmptyComponent = ({headerTitle,footerTitle}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.emptyText}>{headerTitle}</Text>
      <Image
        source={{ uri: 'https://img.icons8.com/ios-filled/50/000000/empty-box.png' }}
        style={styles.emptyIcon}
      />
       <Text style={styles.emptyText}>{footerTitle}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#666',
    marginBottom: 20,
    marginHorizontal:60
  },
  emptyIcon: {
    width: 50,
    height: 50,
    tintColor: '#666',
  },
});

export default EmptyComponent;
