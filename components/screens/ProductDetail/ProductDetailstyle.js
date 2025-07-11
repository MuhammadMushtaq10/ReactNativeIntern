import {StyleSheet, Dimensions, PixelRatio} from 'react-native';

const {width, height} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    //alignItems: 'center',

    backgroundColor: '#F8F8F8',
  },
  NewItemImage: {
    width: '100%',
    height: '100%',
    marginBottom: 30,
  },
  NewItemViewbox: {
    width: '100%',
    height: '480',
    marginBottom: 20,
  },
  price: {
    fontSize: 26,
    fontWeight: 'bold',
    color: 'black',
    marginHorizontal: 20,
    marginBottom: 20,
  },
  descriptionText: {
    fontSize: 15,
    marginHorizontal: 20,
    marginBottom: 20,
  },
  variationText: {
    fontWeight: 'bold',
    fontSize: 20,
    paddingLeft: 2,
  },
  Variation: {
    flexDirection: 'row',
    // height : '8%',
    width: '90%',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  Spaceinbetween: {
    padding: 15,
  },
  Font1: {
    fontSize: 14,
  },
  ViewAllButton: {
    position: 'absolute',
    right: 10,
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
  Material: {
    fontSize: 14,
    backgroundColor: '#FFEBEB',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 5,
    borderWidth: 1,
    width: '28%',
    borderColor: '#ddd',
  },
  VerticleSpace: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  FlexDirect: {
    flexDirection: 'row',
  },
  marginTop: {
    marginTop: 20,
  },
  marginBottom : {
    marginBottom : 75
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 20,
    width: '85%',
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#333',
  },
  sizeChartImage: {
    width: '100%',
    height: 350,
    borderRadius: 18,
  },
  closeButton: {
    marginTop: 20,
    backgroundColor: '#0057FF',
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 8,
  },
  closeButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  Delivery: {
    fontSize: 14,
    backgroundColor: '#E5EBFC',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  radioOuter: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#007AFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },

  radioInner: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#007AFF',
  },
  stars: {
    flexDirection: 'row',
    marginVertical: 15,
  },
  ratingValue: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: '600',
  },

  RatingImage: {
    backgroundColor: '#FFF',
    borderRadius: 30,
    borderWidth: 1,
    width: '60',
    height: '60',
    borderColor: '#ddd',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  userrating: {
    fontSize: 16,
    fontWeight: 'semibold',
    marginLeft: 20,
  },
  userreview: {
    fontSize: 12,
    marginLeft: 20,
    marginRight: 60,
  },
  button: {
    backgroundColor: '#004CFF',
    padding: 20,
    width: 350,
    borderRadius: 30,
    alignItems: 'center',
    position: 'absolute',
    marginHorizontal : 10
  },

  buttonText: {
    fontSize: 22,
    color: '#FFFFFF',
  },
  FlexDirectCol: {
    flexDirection: 'column',
  },
  ratingText: {
    marginLeft: 20,
    marginTop: 10,
  },
  MostPopularImage: {
    height: height * 0.1601,
    width: width * 0.3466,

  },
  MostPopularView: {
    height: height * 0.2201,
    width: width * 0.3666,

    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 20,
    marginTop: 10,
    marginBottom: 20,
    elevation: 5,
    backgroundColor: '#FFFFFF',
  },
  MostPopularText: {
    fontSize: 21,
    fontWeight: 'bold',
  },
  SeeAllText: {
    fontSize: 15,
    fontWeight: 'bold',
    position: 'absolute',
    right: 50,
  },
  Mostpop: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  MostPopularItemtype: {
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: 5,
    position: 'absolute',
    left: 40,
  },
  MostPopularItemLikeImage: {
    alignContent: 'center',
    position: 'absolute',
    top: 5,
    right: 10,
  },
  MostPopularItemLike: {
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: 5,
    position: 'absolute',
    right: 25,
  },
});
