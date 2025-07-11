import React from 'react';
import {useState, useEffect} from 'react';
import {
  FlatList,
  Image,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import indexstyle from './indexstyle';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ScrollView} from 'react-native-gesture-handler';
import {Screen} from 'react-native-screens';
import ImageSwiper from '../ImageSwiperReuseable';

const Home = ({navigation}) => {
  const images = [
    {
      id: '1',
      image: require('../../Logos/BigSaleBanner.png'),
    },
    {
      id: '2',
      image: require('../../Logos/BigSaleBanner.png'),
    },
    {
      id: '3',
      image: require('../../Logos/BigSaleBanner.png'),
    },
    {
      id: '4',
      image: require('../../Logos/BigSaleBanner.png'),
    },
  ];
  const categories = [
    {
      id: '1',
      title: 'Clothing',
      count: 109,
      images: [
        require('../../Logos/Categoriesclothing1.png'),
        require('../../Logos/Categoriesclothing2.png'),
        require('../../Logos/Categoriesclothing3.png'),
        require('../../Logos/Categoriesclothing4.png'),
      ],
    },
    {
      id: '2',
      title: 'Shoes',
      count: 539,
      images: [
        require('../../Logos/CategoriesShoes1.png'),
        require('../../Logos/CategoriesShoes2.png'),
        require('../../Logos/CategoriesShoes3.png'),
        require('../../Logos/CategoriesShoes4.png'),
      ],
    },
    {
      id: '3',
      title: 'Bags',
      count: 87,
      images: [
        require('../../Logos/CategoriesBag1.png'),
        require('../../Logos/CategoriesBag2.png'),
        require('../../Logos/CategoriesBag3.png'),
        require('../../Logos/CategoriesBag4.png'),
      ],
    },
    {
      id: '4',
      title: 'Watches',
      count: 109,
      images: [
        require('../../Logos/Categoriesclothing1.png'),
        require('../../Logos/Categoriesclothing2.png'),
        require('../../Logos/Categoriesclothing3.png'),
        require('../../Logos/Categoriesclothing4.png'),
      ],
    },
    {
      id: '4',
      title: 'Watches',
      count: 109,
      images: [
        require('../../Logos/Categoriesclothing1.png'),
        require('../../Logos/Categoriesclothing2.png'),
        require('../../Logos/Categoriesclothing3.png'),
        require('../../Logos/Categoriesclothing4.png'),
      ],
    },
    {
      id: '4',
      title: 'Watches',
      count: 109,
      images: [
        require('../../Logos/Categoriesclothing1.png'),
        require('../../Logos/Categoriesclothing2.png'),
        require('../../Logos/Categoriesclothing3.png'),
        require('../../Logos/Categoriesclothing4.png'),
      ],
    },
  ];
  const flashSaleData = [
    {id: '1', image: require('../../Logos/flashSale1.png'), discount: '20%'},
    {id: '2', image: require('../../Logos/flashSale2.png'), discount: '25%'},
    {id: '3', image: require('../../Logos/flashSale3.png'), discount: '15%'},
    {id: '4', image: require('../../Logos/flashSale4.png'), discount: '30%'},
    {id: '5', image: require('../../Logos/flashSale5.png'), discount: '10%'},
    {id: '6', image: require('../../Logos/flashSale6.png'), discount: '50%'},
  ];
  const renderimages = ({item}) => {
    return (
      <View style={indexstyle.CategoriesOuterBox}>
        <TouchableOpacity>
          <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
            {item.images.map((img, index) => (
              <Image
                key={index}
                source={img}
                style={indexstyle.CategoriesImages}
              />
            ))}
          </View>
        </TouchableOpacity>
        <View style={indexstyle.CategoriesItemHeading}>
          <Text style={indexstyle.CategoriesItemHeadingText}>{item.title}</Text>
          <View style={indexstyle.CategoriesItemHeadingCount}>
            <Text style={{fontSize: 12}}>{item.count}</Text>
          </View>
        </View>
      </View>
    );
  };
  const topProductsData = [
    {id: '1', image: require('../../Logos/TopProd1.png')},
    {id: '2', image: require('../../Logos/TopProd2.png')},
    {id: '3', image: require('../../Logos/TopProd3.png')},
    {id: '4', image: require('../../Logos/TopProd4.png')},
    {id: '5', image: require('../../Logos/TopProd5.png')},
    {id: '6', image: require('../../Logos/TopProd1.png')},
    {id: '7', image: require('../../Logos/TopProd1.png')},
    {id: '8', image: require('../../Logos/TopProd2.png')},
  ];

  const renderFlashSaleItem = ({item}) => (
    <View style={indexstyle.flashItem}>
      <TouchableOpacity>
        <Image source={item.image} style={indexstyle.flashImage} />
        <View style={indexstyle.discountBadge}>
          <Text style={indexstyle.discountText}>-{item.discount}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
  const renderTopProductItem = ({item}) => (
    <View>
      <TouchableOpacity>
        <Image source={item.image} style={indexstyle.topProductImage} />
      </TouchableOpacity>
    </View>
  );
  const [secondsRemaining, setSecondsRemaining] = useState(1800);
  useEffect(() => {
    const timer = setInterval(() => {
      setSecondsRemaining(prev => {
        if (prev <= 0) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer); // cleanup
  }, []);

  const formatTime = sec => {
    const hours = Math.floor(sec / 3600);
    const minutes = Math.floor((sec % 3600) / 60);
    const seconds = sec % 60;
    return `${String(hours).padStart(2, '0')} : ${String(minutes).padStart(
      2,
      '0',
    )} : ${String(seconds).padStart(2, '0')}`;
  };

  return (
    <SafeAreaView style={indexstyle.container}>
      <View>
        <Text style={indexstyle.ShopText}>Shop</Text>
      </View>
      <ScrollView>
        <ImageSwiper data={images} />
        <View style={{flexDirection: 'row'}}>
          <Text style={indexstyle.CategoriesText}>Categories</Text>
          <Text style={indexstyle.SeeAllText}>See All</Text>

          <TouchableOpacity style={indexstyle.SeeAllBTN}>
            <Image source={require('../../Logos/Export.png')}></Image>
          </TouchableOpacity>
        </View>
        <FlatList
          data={categories}
          numColumns={2}
          keyExtractor={item => item.id}
          scrollEnabled={false}
          columnWrapperStyle={{justifyContent: 'center', marginTop: 15}}
          renderItem={renderimages}
        />

        <View style={indexstyle.headerRow}>
          <Text style={indexstyle.headerTitle}>Flash Sale</Text>
          <View style={indexstyle.timer}>
            <Image
              source={require('../../Logos/clock.png')}
              style={indexstyle.clockIcon}
            />
            <Text style={indexstyle.timerText}>
              {formatTime(secondsRemaining)}
            </Text>
          </View>
        </View>
        <FlatList
          data={flashSaleData}
          numColumns={3}
          keyExtractor={item => item.id}
          renderItem={renderFlashSaleItem}
          scrollEnabled={false}
          contentContainerStyle={{marginTop: 12}}
          columnWrapperStyle={{
            justifyContent: 'space-between',
            marginBottom: 15,
            marginHorizontal: 20,
          }}
        />

        <Text style={indexstyle.headerTitle}>Top Products</Text>
        <FlatList
          data={topProductsData}
          horizontal
          keyExtractor={item => item.id}
          renderItem={renderTopProductItem}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{marginTop: 12, marginHorizontal: 20}}
          ItemSeparatorComponent={() => <View style={{width: 12}} />}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
