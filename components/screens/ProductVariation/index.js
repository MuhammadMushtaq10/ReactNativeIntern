import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  indexstyleheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import indexstyle from './indexstyle';
import {SafeAreaView} from 'react-native-safe-area-context';
const ProductVariations = ({navigation}) => {
  const [selectedColor, setSelectedColor] = useState(0);
  const [selectedSize, setSelectedSize] = useState('M');
  const [quantity, setQuantity] = useState(1);
  const [liked, setLiked] = useState(false);
  const colors = [
    require('../../Logos/Color01.png'),
    require('../../Logos/Color02.png'),
    require('../../Logos/Color03.png'),
    require('../../Logos/Color04.png'),
  ];

  const sizes = ['S', 'M', 'L', 'XL', 'XXL', 'XXXL'];

  const increaseQty = () => setQuantity(quantity + 1);
  const decreaseQty = () => quantity > 1 && setQuantity(quantity - 1);

  return (
    <View style={indexstyle.container}>
      <ScrollView>
        <Image
          source={require('../../Logos/newitem1large.png')}
          style={indexstyle.mainImage}
        />
        <View style={indexstyle.infoContainer}>
          <View style={indexstyle.row}>
            <Image
              source={require('../../Logos/newitem1large.png')}
              style={indexstyle.thumbnail}
            />
            <View style={{marginLeft: 10}}>
              <Text style={indexstyle.price}>$17,00</Text>
              <Text>Pink {selectedSize}</Text>
            </View>
          </View>
          <Text style={indexstyle.sectionTitle}>Color Options</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {colors.map((img, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => setSelectedColor(index)}>
                <Image
                  source={img}
                  style={[
                    indexstyle.colorOption,
                    selectedColor === index && indexstyle.selectedColor,
                  ]}
                />
              </TouchableOpacity>
            ))}
          </ScrollView>
          <Text style={indexstyle.sectionTitle}>Size</Text>
          <View style={indexstyle.sizeRow}>
            {sizes.map(size => (
              <TouchableOpacity
                key={size}
                onPress={() => setSelectedSize(size)}
                style={[
                  indexstyle.sizeButton,
                  selectedSize === size && indexstyle.activeSize,
                ]}>
                <Text>{size}</Text>
              </TouchableOpacity>
            ))}
          </View>

          <Text style={indexstyle.sectionTitle}>Quantity</Text>
          <View style={indexstyle.quantityRow}>
            <TouchableOpacity
              onPress={decreaseQty}
              style={indexstyle.qtyButton}>
              <Text style={{fontSize: 18}}>-</Text>
            </TouchableOpacity>
            <Text style={indexstyle.qtyValue}>{quantity}</Text>
            <TouchableOpacity
              onPress={increaseQty}
              style={indexstyle.qtyButton}>
              <Text style={{fontSize: 18}}>+</Text>
            </TouchableOpacity>
          </View>
          <View style={indexstyle.bottomBar}>
            <TouchableOpacity
              style={indexstyle.iconButton}
              onPress={() => setLiked(!liked)}>
              <Image
                source={
                  liked
                    ? require('../../Logos/Like1.png')
                    : require('../../Logos/Like.png')
                }
                style={{width: 30, height: 30}}
              />
            </TouchableOpacity>

            <TouchableOpacity style={indexstyle.addToCartButton}>
              <Text style={indexstyle.addToCartText}>Add to cart</Text>
            </TouchableOpacity>

            <TouchableOpacity style={indexstyle.buyNowButton}>
              <Text style={indexstyle.buyNowText}>Buy now</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default ProductVariations;
