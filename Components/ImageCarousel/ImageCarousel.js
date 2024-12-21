import React from 'react';
import { View, Image, Dimensions, StyleSheet } from 'react-native';


const { width: screenWidth } = Dimensions.get('window');

const ImageCarousel = () => {
  const images = [
    { uri: 'https://via.placeholder.com/600x400/0000FF/FFFFFF/?text=Image+1' },
    { uri: 'https://via.placeholder.com/600x400/FF0000/FFFFFF/?text=Image+2' },
    { uri: 'https://via.placeholder.com/600x400/00FF00/FFFFFF/?text=Image+3' },
    { uri: 'https://via.placeholder.com/600x400/FFFF00/FFFFFF/?text=Image+4' },
    { uri: 'https://via.placeholder.com/600x400/FF00FF/FFFFFF/?text=Image+5' },
  ];

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image source={{ uri: item.uri }} style={styles.image} />
    </View>
  );

  return (
   <View>

   </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: 'white',
    borderRadius: 8,
    overflow: 'hidden',
    elevation: 3,
  },
  image: {
    width: '100%',
    height: 200,
  },
});

export default ImageCarousel;
