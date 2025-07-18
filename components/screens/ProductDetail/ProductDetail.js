import {useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Modal,
} from 'react-native';

import ProductDetailstyle from './ProductDetailstyle';
import Icon from 'react-native-vector-icons/FontAwesome';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useNavigation} from '@react-navigation/native';

const ProductDetail = ({route}) => {
  const navigation = useNavigation();
  const {product} = route.params;
  const [liked, setLiked] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedDelivery, setSelectedDelivery] = useState('standard');
  const [rating, setRating] = useState(0);

  const handleRating = value => {
    setRating(value);
  };

  const Variation = [
    require('../../Logos/ProductDetail/Variation1.png'),
    require('../../Logos/ProductDetail/Variation2.png'),
    require('../../Logos/ProductDetail/Variation3.png'),
    require('../../Logos/ProductDetail/Variation4.png'),
    require('../../Logos/ProductDetail/Variation1.png'),
    require('../../Logos/ProductDetail/Variation2.png'),
    require('../../Logos/ProductDetail/Variation3.png'),
  ];
  const Mostpopular = [
    {
      id: '1',
      image1: require('../../Logos/mostpopuler1.png'),
      like: '1780',
      image: require('../../Logos/LikeIcon.png'),
      type: 'new',
    },
    {
      id: '2',
      image1: require('../../Logos/mostpopuler2.png'),
      like: '1200',
      image: require('../../Logos/LikeIcon.png'),
      type: 'sale',
    },
    {
      id: '3',
      image1: require('../../Logos/mostpopuler3.png'),
      like: '2100',
      image: require('../../Logos/LikeIcon.png'),
      type: 'hot',
    },
    {
      id: '4',
      image1: require('../../Logos/mostpopuler4.png'),
      like: '1780',
      image: require('../../Logos/LikeIcon.png'),
      type: 'new',
    },
  ];

  return (
    <View style={ProductDetailstyle.container}>
      <View style={{flex: 1}}>
        <ScrollView>
          <View style={ProductDetailstyle.NewItemViewbox}>
            <Image
              style={ProductDetailstyle.NewItemImage}
              source={product.image}></Image>
          </View>
          <Text style={ProductDetailstyle.price}> {product.price}</Text>
          <Text style={ProductDetailstyle.descriptionText}>
            {' '}
            {product.description}
          </Text>
          <View style={ProductDetailstyle.Variation}>
            <Text
              style={[
                ProductDetailstyle.Spaceinbetween,
                ProductDetailstyle.variationText,
              ]}>
              Variations
            </Text>
            <Text
              style={[
                ProductDetailstyle.Spaceinbetween,
                ProductDetailstyle.Font1,
              ]}>
              {product.variations1}
            </Text>
            <Text
              style={[
                ProductDetailstyle.Spaceinbetween,
                ProductDetailstyle.Font1,
              ]}>
              {product.variations2}
            </Text>

            <TouchableOpacity style={ProductDetailstyle.ViewAllButton} onPress={() => navigation.navigate('ProductVariation')}>
              <Image source={require('../../Logos/Export.png')}></Image>
            </TouchableOpacity>
          </View>
          <View>
            <FlatList
              style={ProductDetailstyle.VerticleSpace}
              data={Variation}
              horizontal
              keyExtractor={(item, index) => index.toString()}
              renderItem={({item}) => (
                <TouchableOpacity>
                  <View>
                    <Image source={item} />
                  </View>
                </TouchableOpacity>
              )}
            />
          </View>
          <View style={ProductDetailstyle.VerticleSpace}>
            <Text style={ProductDetailstyle.sampleText}>Specification</Text>
            <View style={ProductDetailstyle.FlexDirect}>
              <Text style={ProductDetailstyle.Material}>
                {product.material1}
              </Text>
              <Text style={ProductDetailstyle.Material}>
                {product.material2}
              </Text>
            </View>

            <Text style={ProductDetailstyle.sampleText}>Origin</Text>
            <Text style={ProductDetailstyle.Origin}>{product.Origin}</Text>
            <View
              style={[
                ProductDetailstyle.FlexDirect,
                ProductDetailstyle.marginTop,
              ]}>
              <Text style={ProductDetailstyle.sampleText}>Size guide</Text>
              <TouchableOpacity
                style={ProductDetailstyle.ViewAllButton}
                onPress={() => setModalVisible(true)}>
                <Image source={require('../../Logos/Export.png')}></Image>
              </TouchableOpacity>
              <Modal
                transparent={true}
                animationType="slide"
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}>
                <View style={ProductDetailstyle.modalOverlay}>
                  <View style={ProductDetailstyle.modalContent}>
                    <Text style={ProductDetailstyle.modalTitle}>
                      Size Guide
                    </Text>
                    <Image
                      source={require('../../Logos/ProductDetail/sizeguide.png')}
                      style={ProductDetailstyle.sizeChartImage}
                      resizeMode="contain"
                    />
                    <TouchableOpacity
                      style={ProductDetailstyle.closeButton}
                      onPress={() => setModalVisible(false)}>
                      <Text style={ProductDetailstyle.closeButtonText}>
                        Close
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </Modal>
            </View>
            <Text
              style={[
                ProductDetailstyle.sampleText,
                ProductDetailstyle.marginTop,
              ]}>
              Delivery
            </Text>
            <View
              style={[
                ProductDetailstyle.FlexDirect,
                ProductDetailstyle.marginTop,
                {alignItems: 'center'},
              ]}>
              <Text style={ProductDetailstyle.Delivery}>Standard</Text>
              <Text style={ProductDetailstyle.Delivery}>5-7days</Text>
              <Text style={ProductDetailstyle.Delivery}>$3.00</Text>
              <TouchableOpacity
                style={ProductDetailstyle.ViewAllButton}
                onPress={() => setSelectedDelivery('standard')}>
                <View style={ProductDetailstyle.radioOuter}>
                  {selectedDelivery === 'standard' && (
                    <View style={ProductDetailstyle.radioInner} />
                  )}
                </View>
              </TouchableOpacity>
            </View>
            <View
              style={[
                ProductDetailstyle.FlexDirect,
                ProductDetailstyle.marginTop,
                {alignItems: 'center'},
              ]}>
              <Text style={ProductDetailstyle.Delivery}>Express</Text>
              <Text style={ProductDetailstyle.Delivery}>1-2days</Text>
              <Text style={ProductDetailstyle.Delivery}>$12.00</Text>
              <TouchableOpacity
                style={ProductDetailstyle.ViewAllButton}
                onPress={() => setSelectedDelivery('express')}>
                <View style={ProductDetailstyle.radioOuter}>
                  {selectedDelivery === 'express' && (
                    <View style={ProductDetailstyle.radioInner} />
                  )}
                </View>
              </TouchableOpacity>
            </View>
            <Text
              style={[
                ProductDetailstyle.marginTop,
                ProductDetailstyle.sampleText,
              ]}>
              Ratings & Reviews
            </Text>
            <View
              style={[ProductDetailstyle.stars, ProductDetailstyle.FlexDirect]}>
              {[1, 2, 3, 4, 5].map(item => (
                <TouchableOpacity key={item} onPress={() => handleRating(item)}>
                  <Icon
                    name={item <= rating ? 'star' : 'star-o'}
                    size={32}
                    color="#FFD700"
                    style={{marginHorizontal: 5}}
                  />
                </TouchableOpacity>
              ))}
              <Text
                style={[
                  ProductDetailstyle.ratingValue,
                  ProductDetailstyle.ViewAllButton,
                ]}>
                {rating} / 5
              </Text>
            </View>
            <View style={ProductDetailstyle.FlexDirect}>
              <Image
                style={ProductDetailstyle.RatingImage}
                source={require('../../Logos/ProductDetail/Rating1.png')}
              />
              <View>
                <Text style={ProductDetailstyle.userrating}>Veronika</Text>
                <Image
                  style={ProductDetailstyle.ratingText}
                  source={require('../../Logos/ProductDetail/Stars.png')}
                />
                <Text style={ProductDetailstyle.userreview}>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed ...
                </Text>
              </View>
            </View>
            <View
              style={[
                ProductDetailstyle.marginTop,
                ProductDetailstyle.marginBottom,
              ]}>
              <TouchableOpacity
                style={ProductDetailstyle.button}
                onPress={() => navigation.navigate('Reviews')}>
                <Text style={ProductDetailstyle.buttonText}>
                  View all Reviews
                </Text>
              </TouchableOpacity>
            </View>

            <View
              style={[
                ProductDetailstyle.marginTop,
                ProductDetailstyle.Mostpop,
              ]}>
              <Text style={ProductDetailstyle.MostPopularText}>
                Most Popular
              </Text>
              <Text style={ProductDetailstyle.SeeAllText}>See All</Text>

              <TouchableOpacity style={ProductDetailstyle.ViewAllButton}>
                <Image source={require('../../Logos/Export.png')}></Image>
              </TouchableOpacity>
            </View>
            <FlatList
              data={Mostpopular}
              horizontal
              keyExtractor={item => item.id}
              renderItem={({item}) => (
                <TouchableOpacity>
                  <View style={ProductDetailstyle.MostPopularView}>
                    <Image
                      style={ProductDetailstyle.MostPopularImage}
                      source={item.image1}
                    />
                    <View style={{flexDirection: 'row'}}>
                      <Text style={ProductDetailstyle.MostPopularItemLike}>
                        {item.like}
                      </Text>
                      <Image
                        style={ProductDetailstyle.MostPopularItemLikeImage}
                        source={item.image}
                      />
                      <Text style={ProductDetailstyle.MostPopularItemtype}>
                        {item.type}
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
              )}
            />
          </View>
        </ScrollView>
      </View>
      <View style={ProductDetailstyle.bottomBar}>
        <TouchableOpacity
          style={ProductDetailstyle.iconButton}
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

        <TouchableOpacity style={ProductDetailstyle.addToCartButton}>
          <Text style={ProductDetailstyle.addToCartText}>Add to cart</Text>
        </TouchableOpacity>

        <TouchableOpacity style={ProductDetailstyle.buyNowButton}>
          <Text style={ProductDetailstyle.buyNowText}>Buy now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProductDetail;
