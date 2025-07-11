import {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StatusBar,
  Modal,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import styles from './styles';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import {Dimensions} from 'react-native';
import {FlatList, ScrollView} from 'react-native-gesture-handler';
import ProductDetailstyle from './ProductDetail/ProductDetailstyle';

const {width, height} = Dimensions.get('window');

const Profile = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const images = [
    {
      id: '1',
      image: require('../Logos/Placeholder_01.png'),
      price: '$17.00',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam arcu mauris, scelerisque eu mauris id, pretium pulvinar sapien.',
      material1: 'Cotton 95%',
      material2: 'Nylon 5%',
      variations1: 'Pink',
      variations2: 'M',
      Origin: 'Pak',
    },
    {
      id: '2',
      image: require('../Logos/Placeholder_02.png'),
      price: '$17.00',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam arcu mauris, scelerisque eu mauris id, pretium pulvinar sapien.',
      material1: 'Cotton 95%',
      material2: 'Nylon 5%',
      variations1: 'Pink',
      variations2: 'M',
      Origin: 'Pak',
    },
    {id: '3', image: require('../Logos/Placeholder_03.png')},
    {id: '4', image: require('../Logos/Placeholder_04.png')},
    {id: '5', image: require('../Logos/Placeholder_05.png')},
    {id: '6', image: require('../Logos/Placeholder_01.png')},
    {id: '7', image: require('../Logos/Placeholder_02.png')},
    {id: '8', image: require('../Logos/Placeholder_03.png')},
    {id: '9', image: require('../Logos/Placeholder_04.png')},
    {id: '10', image: require('../Logos/Placeholder_05.png')},
  ];

  const Stories = [
    require('../Logos/Stories01.png'),
    require('../Logos/Stories02.png'),
    require('../Logos/Stories03.png'),
    require('../Logos/Stories04.png'),
    require('../Logos/Stories01.png'),
    require('../Logos/Stories02.png'),
    require('../Logos/Stories03.png'),
    require('../Logos/Stories04.png'),
  ];

  const Newitems = [
    {
      id: '1',
      image: require('../Logos/newitem1large.png'),
      price: '$17.00',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam arcu mauris, scelerisque eu mauris id, pretium pulvinar sapien.',
      material1: 'Cotton 95%',
      material2: 'Nylon 5%',
      variations1: 'Pink',
      variations2: 'M',
      Origin: 'Pak',
    },
    {
      id: '2',
      image: require('../Logos/newitem2.png'),
      price: '$32.00',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam arcu mauris, scelerisque eu mauris id, pretium pulvinar sapien.',
    },
    {
      id: '3',
      image: require('../Logos/newitem3.png'),
      price: '$21.00',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam arcu mauris, scelerisque eu mauris id, pretium pulvinar sapien.',
    },
    {
      id: '4',
      image: require('../Logos/newitem1.png'),
      price: '$17.00',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam arcu mauris, scelerisque eu mauris id, pretium pulvinar sapien.',
    },
    {
      id: '5',
      image: require('../Logos/newitem2.png'),
      price: '$32.00',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam arcu mauris, scelerisque eu mauris id, pretium pulvinar sapien.',
    },
    {
      id: '6',
      image: require('../Logos/newitem3.png'),
      price: '$21.00',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam arcu mauris, scelerisque eu mauris id, pretium pulvinar sapien.',
    },
  ];
  const Mostpopular = [
    {
      id: '1',
      image: require('../Logos/mostpopuler1.png'),
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam arcu mauris, scelerisque eu mauris id, pretium pulvinar sapien.',
      like: '1780',
      image1: require('../Logos/LikeIcon.png'),
      type: 'new',
      material1: 'Cotton 95%',
      material2: 'Nylon 5%',
      variations1: 'Pink',
      variations2: 'M',
      Origin: 'Pak',
    },
    {
      id: '2',
      image: require('../Logos/mostpopuler2.png'),
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam arcu mauris, scelerisque eu mauris id, pretium pulvinar sapien.',
      like: '1200',
      image1: require('../Logos/LikeIcon.png'),
      type: 'sale',
      material1: 'Cotton 95%',
      material2: 'Nylon 5%',
      variations1: 'Pink',
      variations2: 'M',
      Origin: 'Pak',
    },
    {
      id: '3',
      image: require('../Logos/mostpopuler3.png'),
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam arcu mauris, scelerisque eu mauris id, pretium pulvinar sapien.',
      like: '2100',
      image1: require('../Logos/LikeIcon.png'),
      type: 'hot',
    },
    {
      id: '4',
      image: require('../Logos/mostpopuler4.png'),
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam arcu mauris, scelerisque eu mauris id, pretium pulvinar sapien.',
      like: '1780',
      image1: require('../Logos/LikeIcon.png'),
      type: 'new',
    },
  ];
  const categories = [
    {
      id: '1',
      title: 'Clothing',
      count: 109,
      images: [
        require('../Logos/Categoriesclothing1.png'),
        require('../Logos/Categoriesclothing2.png'),
        require('../Logos/Categoriesclothing3.png'),
        require('../Logos/Categoriesclothing4.png'),
      ],
    },
    {
      id: '2',
      title: 'Shoes',
      count: 539,
      images: [
        require('../Logos/CategoriesShoes1.png'),
        require('../Logos/CategoriesShoes2.png'),
        require('../Logos/CategoriesShoes3.png'),
        require('../Logos/CategoriesShoes4.png'),
      ],
    },
    {
      id: '3',
      title: 'Bags',
      count: 87,
      images: [
        require('../Logos/CategoriesBag1.png'),
        require('../Logos/CategoriesBag2.png'),
        require('../Logos/CategoriesBag3.png'),
        require('../Logos/CategoriesBag4.png'),
      ],
    },
    {
      id: '4',
      title: 'Watches',
      count: 109,
      images: [
        require('../Logos/Categoriesclothing1.png'),
        require('../Logos/Categoriesclothing2.png'),
        require('../Logos/Categoriesclothing3.png'),
        require('../Logos/Categoriesclothing4.png'),
      ],
    },
  ];

  const openModal = imageUri => {
    setSelectedImage(imageUri);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setSelectedImage(null);
  };
  const renderItem = ({item}) => (
    <TouchableOpacity onPress={() => openModal(item)}>
      <Image source={item} style={styles.thumbnail} />
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#FFFFFF'}}>
      <StatusBar
        animated={true}
        backgroundColor="#FFFFFF"
        barStyle="dark-content"
      />
      <ScrollView style={{flex: 1, paddingHorizontal: 20}}>
        <View
          style={{
            flexDirection: 'row',
            flex: 1,
            alignContent: 'center',
            justifyContent: 'center',
          }}>
          <TouchableOpacity onPress={() => setModalVisible(true)}>
            <View style={styles.profileCircle}>
              <Image
                style={styles.profilePic}
                source={require('../Logos/avatar-2.png')}></Image>
            </View>
          </TouchableOpacity>
          <Modal
            visible={modalVisible}
            transparent={true}
            animationType="fade"
            onRequestClose={() => setModalVisible(false)}>
            <TouchableOpacity
              style={styles.modalContainer}
              onPress={() => setModalVisible(false)}>
              <Image
                source={require('../Logos/avatar-2.png')}
                style={styles.largeImage}
              />
              <Text style={styles.closeText}>Tap anywhere to close</Text>
            </TouchableOpacity>
          </Modal>
          <TouchableOpacity>
            <View
              style={{
                height: 35,
                width: 115,
                backgroundColor: '#004CFF',
                borderRadius: 18,
                justifyContent: 'center',
                alignItems: 'center',
                alignContent: 'center',
              }}>
              <Text
                style={{fontSize: 16, color: '#FFFFFF', textAlign: 'center'}}>
                My Activity
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('vouchers')}>
            <Image
              style={styles.profilePic}
              source={require('../Logos/Vouchers.png')}></Image>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              style={styles.profilePic}
              source={require('../Logos/TopMenu.png')}></Image>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('settings')}>
            <Image
              style={styles.profilePic}
              source={require('../Logos/Settings.png')}></Image>
          </TouchableOpacity>
        </View>
        <View style={{flex: 1, marginTop: 20}}>
          <Text style={{fontSize: 28, fontWeight: 'bold'}}>
            Hello, Madison!
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            backgroundColor: '#F8F8F8',
            width: width * 0.86,
            height: height * 0.083,
            marginTop: 20,
          }}>
          <Text style={{fontSize: 14, fontWeight: 'bold'}}>Annoucement</Text>
          <View style={{flexDirection: 'row', flex: 1, marginTop: 5}}>
            <Text style={{fontSize: 10}}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              hendrerit luctus libero ac vulputate.
            </Text>
            <TouchableOpacity>
              <Image source={require('../Logos/Export.png')}></Image>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{flex: 1, marginTop: 20}}>
          <Text style={{fontSize: 19, fontWeight: 'bold'}}>
            Recently Viewed
          </Text>
          <FlatList
            data={images}
            horizontal
            style={{flex: 1, marginTop: 10}}
            keyExtractor={item => item.id}
            renderItem={({item}) => (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('Home', {
                    screen: 'ProductDetail',
                    params: {product: item},
                  })
                }>
                <View style={[styles.viewCircle]}>
                  <Image style={styles.ViewPic} source={item.image} />
                </View>
              </TouchableOpacity>
            )}
          />
        </View>
        <View style={{flex: 1, marginTop: 20}}>
          <Text style={{fontSize: 21, fontWeight: 'bold'}}>My orders</Text>
          <View style={{flex: 1, flexDirection: 'row', marginTop: 10}}>
            <TouchableOpacity
              style={{
                height: height * 0.043,
                width: width * 0.22,
                backgroundColor: '#E5EBFC',
                borderRadius: 18,
                justifyContent: 'center',
                alignItems: 'center',
                alignContent: 'center',
              }}>
              <Text
                style={{textAlign: 'center', fontSize: 19, color: '#0042E0'}}>
                To pay
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                height: height * 0.043,
                width: width * 0.31,
                backgroundColor: '#E5EBFC',
                borderRadius: 18,
                justifyContent: 'center',
                alignItems: 'center',
                alignContent: 'center',
              }}>
              <Text
                style={{textAlign: 'center', fontSize: 19, color: '#0042E0'}}>
                To Recieve
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                height: height * 0.043,
                width: width * 0.31,
                backgroundColor: '#E5EBFC',
                borderRadius: 18,
                justifyContent: 'center',
                alignItems: 'center',
                alignContent: 'center',
              }}>
              <Text
                style={{textAlign: 'center', fontSize: 19, color: '#0042E0'}}>
                To Review
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{flex: 1, height: height * 0.27, marginTop: 20}}>
          <Text style={{fontSize: 21, fontWeight: 'bold'}}>Stories</Text>

          <FlatList
            data={Stories}
            horizontal
            style={{flex: 1, marginTop: 10}}
            keyExtractor={(item, index) => index.toString()}
            showsHorizontalScrollIndicator={true}
            renderItem={({item}) => (
              <TouchableOpacity onPress={() => openModal(item)}>
                <Image style={styles.ViewStories} source={item} resizeMode= "contain"/>
              </TouchableOpacity>
            )}
          />
          <Modal
            visible={modalVisible}
            transparent={true}
            animationType="fade"
            onRequestClose={closeModal}>
            <View style={styles.modalBackground}>
              <TouchableOpacity style={styles.closeArea} onPress={closeModal}>
                <Image source={selectedImage} style={styles.fullImage} />
                <Text style={styles.closeText1}>Tap anywhere to close</Text>
              </TouchableOpacity>
            </View>
          </Modal>
        </View>
        <View style={{flex: 1, height: height * 0.3, marginTop: 30}}>
          <View style={{flexDirection: 'row'}}>
            <Text style={{fontSize: 21, fontWeight: 'bold'}}>New Items</Text>
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 15,
                position: 'absolute',
                right: 50,
              }}>
              See All
            </Text>

            <TouchableOpacity
              style={{position: 'absolute', right: 10}}
              onPress={() =>
                navigation.navigate('SeeAllitems', {
                  category: 'Newitems',
                  data: Newitems,
                })
              }>
              <Image source={require('../Logos/Export.png')}></Image>
            </TouchableOpacity>
          </View>
          <FlatList
            data={Newitems}
            horizontal
            style={{flex: 1, marginTop: 10}}
            keyExtractor={item => item.id}
            renderItem={({item}) => (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('Home', {
                    screen: 'ProductDetail',
                    params: {product: item},
                  })
                }>
                <View
                  style={[
                    styles.NewItemViewbox,
                    {flex: 1, justifyContent: 'center', alignItems: 'center'},
                  ]}>
                  <Image style={styles.NewItemImage} source={item.image} />
                  <Text>Lorem ipsum dolor sit amet consectetur.</Text>
                  <Text style={{fontWeight: 'bold', marginTop: 5}}>
                    {item.price}
                  </Text>
                </View>
              </TouchableOpacity>
            )}
          />
        </View>
        <View style={{flex: 1, marginTop: 30}}>
          <Text style={{fontSize: 21, fontWeight: 'bold'}}>Most Popular</Text>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 15,
              position: 'absolute',
              right: 50,
            }}>
            See All
          </Text>

          <TouchableOpacity
            style={{position: 'absolute', right: 10}}
            onPress={() =>
              navigation.navigate('SeeAllitems', {
                category: 'Newitems',
                data: Newitems,
              })
            }>
            <Image source={require('../Logos/Export.png')}></Image>
          </TouchableOpacity>
        </View>
        <FlatList
          data={Mostpopular}
          horizontal
          style={{flex: 1, marginTop: 10}}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('Home', {
                  screen: 'ProductDetail',
                  params: {product: item},
                })
              }>
              <View
                style={[
                  styles.MostPopularView,
                  {flex: 1, justifyContent: 'center', alignItems: 'center'},
                ]}>
                <Image style={styles.MostPopularImage} source={item.image} />
                <View style={{flexDirection: 'row'}}>
                  <Text
                    style={{
                      fontWeight: 'bold',
                      marginTop: 5,
                      position: 'absolute',
                      right: 20,
                    }}>
                    {item.like}
                  </Text>
                  <Image
                    style={{justifyContent: 'center', alignItems: 'center'}}
                    source={item.image1}
                  />
                  <Text
                    style={{
                      fontWeight: 'bold',
                      marginTop: 5,
                      position: 'absolute',
                      left: 50,
                    }}>
                    {item.type}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          )}
        />
        <View
          style={{
            flex: 1,
            marginTop: 30,
          }}>
          <View style={{flexDirection: 'row'}}>
            <Text style={{fontSize: 21, fontWeight: 'bold'}}>Categories</Text>
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 15,
                position: 'absolute',
                right: 50,
              }}>
              See All
            </Text>

            <TouchableOpacity style={{position: 'absolute', right: 10}}>
              <Image source={require('../Logos/Export.png')}></Image>
            </TouchableOpacity>
          </View>
        </View>
        <FlatList
          data={categories}
          numColumns={2}
          keyExtractor={item => item.id}
          scrollEnabled = {false}
          columnWrapperStyle={{justifyContent: 'space-between', marginTop: 15}}
          renderItem={({item}) => (
            <View
              style={{
                backgroundColor: '#f8f8f8',
                borderRadius: 12,
                padding: 8,
                width: '48%',
              }}>
              <TouchableOpacity>
                <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
                  {item.images.map((img, index) => (
                    <Image
                      key={index}
                      source={img}
                      style={{
                        width: '48%',
                        height: 70,
                        borderRadius: 8,
                        margin: '1%',
                      }}
                    />
                  ))}
                </View>
              </TouchableOpacity>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginTop: 10,
                }}>
                <Text style={{fontSize: 16, fontWeight: '600'}}>
                  {item.title}
                </Text>
                <View
                  style={{
                    backgroundColor: '#eee',
                    borderRadius: 20,
                    paddingHorizontal: 8,
                    paddingVertical: 4,
                  }}>
                  <Text style={{fontSize: 12}}>{item.count}</Text>
                </View>
              </View>
            </View>
          )}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
