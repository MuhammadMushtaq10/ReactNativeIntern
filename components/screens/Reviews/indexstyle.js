import {StyleSheet, Dimensions, PixelRatio} from 'react-native';

const {width, height} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  ReviewHeading : {
    fontSize : 36,
    fontWeight : 'bold',
    marginLeft : 20,
    marginTop : 40
  },
  reviewItem: {
    flexDirection: 'row',
    marginBottom: 20,
    marginHorizontal : 20,
    
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 12,
  },
  reviewContent: {
    flex: 1,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  stars: {
    flexDirection: 'row',
    marginVertical: 4,
  },
  reviewText: {
    fontSize: 14,
    color: '#555',
  },

})