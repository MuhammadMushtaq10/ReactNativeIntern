import React from 'react';
import {FlatList, Image, Dimensions, StyleSheet, View} from 'react-native';
import indexstyle from './Home/indexstyle';
const {width} = Dimensions.get('window');

const ImageSwiper = ({
  data = [],
  imageHeight = 180,
  showsScrollIndicator = true,
}) => {
  const renderItem = ({item}) => (
    <View style={indexstyle.BannerView}>
      <Image
        source={item.image}
        resizeMode="contain"
        style={indexstyle.Bannerstyle}
      />
    </View>
  );

  return (
    <View style={{height: imageHeight}}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={showsScrollIndicator}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: width,
    borderRadius: 10,
  },
});

export default ImageSwiper;
