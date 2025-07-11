import {StyleSheet, Dimensions, PixelRatio} from 'react-native';

const {width, height} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8F8',
  },
  headerText: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
    marginHorizontal : 30,
    marginTop : 40,
    textAlign : 'center'
  },
  itemCard: {
    width: (width / 2) - 20, // half width minus margin
    margin: 6,
    borderRadius: 1,
    overflow: 'hidden',
    backgroundColor: '#fff',
    elevation: 3,
  },
  itemImage: {
    width: '100%',
    height: 200,
    borderRadius: 1,
  },
  itemPrice: {
    fontSize: 18,
    marginTop: 8,
    fontWeight: '600',
    marginHorizontal : 20
  },
  itemDescription: {
    fontSize: 14,
    marginTop: 4,
    color: '#555',
  },
});
