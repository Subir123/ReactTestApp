import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  Dimensions,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';


const Cart = ({ product, productArray, handelAddToCart }) => {
  const navigation = useNavigation()

  const sellingPrice = (product.price) - (product.discount / 100 * product.price)

  const screenWidth = Dimensions.get('window').width;
  const itemWidth = (screenWidth / 2) - 20; // Adjust the subtraction value for padding

  const onAddToCart = list => {
    const discountedPrice =(list.price - (list.price * (list.discount / 100))).toFixed(0);
    const updatedList = {
      ...list, // Spread the original list properties
      price: parseInt(discountedPrice) // Override the price
    };
    handelAddToCart(updatedList);
  };

  // Function to render stars dynamically
  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    return (
      <View style={styles.starContainer}>
        {Array(fullStars).fill().map((_, index) => (
          <FontAwesome key={`full-${index}`} name="star" size={14} color="#FFD700" />
        ))}
        {halfStar && (
          <FontAwesome name="star-half-full" size={14} color="#FFD700" />
        )}
        {Array(emptyStars).fill().map((_, index) => (
          <FontAwesome key={`empty-${index}`} name="star-o" size={14} color="#FFD700" />
        ))}
      </View>
    );
  };

  const moveToProductDescription = (data) =>{
   navigation.navigate('ProductDescription',data)
  }

  return (
    <TouchableOpacity onPress={()=> moveToProductDescription(product) } style={[styles.card, { width: itemWidth }]}>
      <Image source={{ uri: product.image }} style={styles.image} />
      <View style={styles.details}>
        <Text style={styles.productName}>{product.name}</Text>
        <Text style={styles.description} numberOfLines={1}>
          {product.description}
        </Text>
        <View style={styles.ratingContainer}>
          <Text style={styles.rating}>({product.rating})</Text>
          {renderStars(product.rating)}
          <Text style={styles.totalRatings}> ({product.totalRatings})</Text>
        </View>
        <Text style={styles.purchaseInfo}>{product.totalSailed}</Text>
        <Text style={styles.saleTag}>{product.offer}</Text>
        <View style={styles.priceContainer}>
          <Text style={styles.offerPrice}>{product.currency}{" "}{sellingPrice.toFixed(0)}</Text>
          <Text style={styles.actualPrice}>{product.currency} {product.price}</Text>
        </View>
        <Text style={styles.discount}>({product.discount} % off)</Text>
        <Text style={styles.delivery}>{product.freeDelivery}</Text>
        {productArray.some(item => item.id === product.id) ? (
          <Text style={styles.cartStatus}>Item in your cart</Text>
        ) : (
          <TouchableOpacity
            style={styles.button}
            onPress={() => onAddToCart(product)}>
            <Text style={styles.buttonText}>Add to Cart</Text>
          </TouchableOpacity>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default Cart;

const styles = StyleSheet.create({
  card: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingBottom: 10,
    borderRadius: 10,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
    margin: 5,
  },
  image: {
    width: '100%',
    height: 130,
    borderRadius: 10,
  },
  details: {
    marginTop: 10,
    paddingHorizontal: 10,
    width: '100%',
  },
  productName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'left',
  },
  description: {
    fontSize: 12,
    color: '#000',
    textAlign: 'left',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  rating: {
    fontSize: 12,
    color: '#888',
  },
  starContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginStart: 5
  },
  totalRatings: {
    fontSize: 12,
    color: '#888',
    marginLeft: 5,
  },
  purchaseInfo: {
    marginTop: 5,
    fontSize: 14,
    color: '#888',
    textAlign: 'left',
  },
  saleTag: {
    marginTop: 5,
    fontSize: 14,
    color: '#fff',
    backgroundColor: '#FF6347',
    paddingVertical: 2,
    paddingHorizontal: 5,
    borderRadius: 5,
    alignSelf: 'flex-start',
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  offerPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  actualPrice: {
    fontSize: 16,
    color: '#888',
    textDecorationLine: 'line-through',
    marginLeft: 10,
    marginTop: 7
  },
  discount: {
    fontSize: 16,
    color: '#888',
    textAlign: 'left',
  },
  button: {
    marginTop: 10,
    backgroundColor: '#8B78E6',
    paddingVertical: 7,
    paddingHorizontal: 25,
    borderRadius: 15,
    alignItems: 'center',
    alignSelf: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  cartStatus: {
    marginTop: 10,
    fontSize: 16,
    color: 'green',
    textAlign: 'center',
  },
  delivery: {
    fontSize: 12,
    color: '#888',
    textAlign: 'left',
  },
});
