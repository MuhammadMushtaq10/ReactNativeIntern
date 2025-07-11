import {useState} from 'react';
import {FlatList, Text, View, Image} from 'react-native';
import indexstyle from './indexstyle';
import Icon from 'react-native-vector-icons/FontAwesome';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Reviews = ({navigation}) => {
  const userReviews = [
    {
      id: 1,
      name: 'Veronica',
      rating: 5,
      profileImage: 'https://randomuser.me/api/portraits/women/44.jpg',
      Review:
        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum',
    },
    {
      id: 2,
      name: 'Donna',
      profileImage: 'https://randomuser.me/api/portraits/women/24.jpg',
      rating: 5,
      Review:
        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum',
    },
    {
      id: 3,
      name: 'Sara',
      profileImage: 'https://randomuser.me/api/portraits/women/26.jpg',
      rating: 3,
      Review:
        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum',
    },
    {
      id: 4,
      name: 'Norma',
      profileImage: 'https://randomuser.me/api/portraits/women/45.jpg',
      rating: 4,
      Review:
        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum',
    },
    {
      id: 5,
      name: 'Veronica',
      profileImage: 'https://randomuser.me/api/portraits/women/37.jpg',
      rating: 5,
      Review:
        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum',
    },
    {
      id: 6,
      name: 'Rachel',
      profileImage: 'https://randomuser.me/api/portraits/women/43.jpg',
      rating: 2,
      Review:
        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum',
    },
  ];

  const ReviewItem = ({item}) => (
    <View style={indexstyle.reviewItem}>
      <Image source={{uri: item.profileImage}} style={indexstyle.avatar} />
      <View style={indexstyle.reviewContent}>
        <Text style={indexstyle.name}>{item.name}</Text>
        <View style={indexstyle.stars}>
          {[...Array(5)].map((_, i) => (
            <Icon
              key={i}
              name={i < item.rating ? 'star' : 'star-o'}
              size={32}
              color="#FFD700"
              style={{marginHorizontal: 5}}
            />
          ))}
        </View>
        <Text style={indexstyle.reviewText}>{item.Review}</Text>
      </View>
    </View>
  );
  return (
    <View style={indexstyle.container}>
      <Text style={indexstyle.ReviewHeading}>Reviews</Text>
      <FlatList
        data={userReviews}
        keyExtractor={item => item.id}
        renderItem={({item}) => <ReviewItem item={item} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default Reviews;
