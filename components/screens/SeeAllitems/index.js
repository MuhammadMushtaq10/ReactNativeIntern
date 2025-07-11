import {useState} from 'react';
import {FlatList, Text, View, Image, TouchableOpacity} from 'react-native';
import indexstyle from './indexstyle';
import Icon from 'react-native-vector-icons/FontAwesome';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const SeeAllitems = ({route, navigation}) => {
  const {data, category} = route.params;

  const renderItem = ({item}) => (
    <TouchableOpacity
      style={indexstyle.itemCard}
      onPress={() => navigation.navigate('ProductDetail', {product: item})}>
      <Image source={item.image} style={indexstyle.itemImage} />
      <Text style={indexstyle.itemPrice}>{item.price}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={indexstyle.container}>
      <Text style={indexstyle.headerText}>{category}</Text>
      <FlatList
        data={data}
        numColumns={2}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        columnWrapperStyle={{
          justifyContent: 'space-between',
        }}
      />
    </View>
  );
};
export default SeeAllitems;
