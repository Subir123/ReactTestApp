// CustomHeader.js
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';



const CustomHeader = ({ pageName, itemCount }) => {
  const navigation = useNavigation()

  const moveToCart = () => {
    navigation.navigate('Cart')
  }

  const moveToProduct = () => {
    navigation.navigate('BottomTab')
  }

  return (
    <View style={styles.header}>
      {pageName == 'Cart' || pageName == 'Products Description' ?
        <TouchableOpacity
          style={{ flexDirection: 'row', alignItems: 'center' }}
          onPress={moveToProduct} >
          <AntDesign name="arrowleft" size={40} color="white" />
          <Text style={[styles.title, { marginStart: 20 }]}>{pageName}</Text>
        </TouchableOpacity>
        :
        <Text style={styles.title}>{pageName}</Text>
      }
      {pageName != 'Products Description' &&
        <TouchableOpacity
          onPress={moveToCart}
          style={styles.itemCountContainer}>
          <Text style={styles.itemCountText}>{itemCount}</Text>
          <Icon name="shopping-cart" size={35} color="lightgreen" />
        </TouchableOpacity>
      }
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 60,
    backgroundColor: '#219ebc',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
    shadowOpacity: 1,
    shadowColor: "#000",
    elevation: 3,
    shadowOffset: { width: 1, height: 1 }
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  itemCountContainer: {
    // backgroundColor: '#219ebc',
    // borderRadius: 15,
    // width:100,
    // alignItems:'center',
  },
  itemCountText: {
    color: 'white',
    fontWeight: 'bold',
    position: 'relative',
    marginStart: 20,
    fontSize: 14,
    marginBottom: -5,
    backgroundColor: 'red',
    borderRadius: 10,
    width: 20,
    height: 20,
    textAlign: 'center'
  },
});

export default CustomHeader;
