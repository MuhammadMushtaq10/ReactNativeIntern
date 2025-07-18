import {StyleSheet, Dimensions, PixelRatio} from 'react-native';

const {width, height} = Dimensions.get('window');

export default StyleSheet.create({
  container: {flex: 1},
  mainImage: {width: '100%', height: 300, resizeMode: 'cover'},
  infoContainer: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: -30,
    padding: 20,
  },
  row: {flexDirection: 'row', alignItems: 'center'},
  thumbnail: {width: 60, height: 60, borderRadius: 10},
  price: {fontSize: 22, fontWeight: 'bold'},
  sectionTitle: {fontSize: 16, fontWeight: 'bold', marginVertical: 10},
  colorOption: {width: 60, height: 60, borderRadius: 8, marginRight: 10},
  selectedColor: {borderWidth: 2, borderColor: 'blue'},
  sizeRow: {flexDirection: 'row', flexWrap: 'wrap'},
  sizeButton: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 6,
    margin: 5,
  },
  activeSize: {borderColor: 'blue'},
  quantityRow: {flexDirection: 'row', alignItems: 'center', marginVertical: 10},
  qtyButton: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 20,
    padding: 10,
  },
  qtyValue: {fontSize: 18, marginHorizontal: 20},
  buttonRow: {flexDirection: 'row', alignItems: 'center', marginTop: 20},
  heartButton: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 12,
    marginRight: 10,
  },
  cartButton: {
    backgroundColor: 'black',
    padding: 15,
    borderRadius: 10,
    flex: 1,
    marginRight: 10,
    alignItems: 'center',
  },
  buyButton: {
    backgroundColor: '#4A90E2',
    padding: 15,
    borderRadius: 10,
    flex: 1,
    alignItems: 'center',
  },
  bottomBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 30,
    borderTopWidth: 1,
    borderColor: '#F2F2F2',
  },

  iconButton: {
    backgroundColor: '#f5f5f5',
    padding: 10,
    borderRadius: 15,
  },

  addToCartButton: {
    flex: 1,
    backgroundColor: '#111',
    paddingVertical: 12,
    marginHorizontal: 10,
    borderRadius: 10,
    alignItems: 'center',
  },

  addToCartText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },

  buyNowButton: {
    backgroundColor: '#0057FF',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    alignItems: 'center',
  },

  buyNowText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  sampleText: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  Origin: {
    fontSize: 14,
    backgroundColor: '#E5EBFC',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 5,
    borderWidth: 1,
    width: '14%',
    borderColor: '#ddd',
  },
});
