import {StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    flex: 1,
  },
  ShopText: {
    color: '#202020',
    fontSize: 28,
    fontWeight: 'bold',
    marginHorizontal: 20,
  },
  CategoriesText: {
    fontSize: 21,
    fontWeight: 'bold',
    marginHorizontal: 20,
  },
  SeeAllText: {
    fontWeight: 'bold',
    fontSize: 15,
    position: 'absolute',
    right: 50,
    textAlign: 'center',
    marginTop: 5,
  },
  SeeAllBTN: {
    marginLeft: 'auto',
    marginRight: 10,
    alignContent: 'center',
  },
  BannerView: {
    width: Dimensions.get('screen').width,
    paddingHorizontal: 20,
  },
  Bannerstyle: {
    width: '100%',
    height: 180,
    borderRadius: 10,
    //marginHorizontal : 10
  },
  CategoriesOuterBox: {
    backgroundColor: '#F8f8f8',
    borderRadius: 12,
    padding: 8,
    width: '48%',
  },
  CategoriesImages: {
    width: '48%',
    height: 70,
    borderRadius: 8,
    margin: '1%',
  },
  CategoriesItemHeading: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
    //backgroundColor: 'red',
  },
  CategoriesItemHeadingText: {fontSize: 16, fontWeight: '600'},
  CategoriesItemHeadingCount: {
    backgroundColor: '#black',
    borderRadius: 20,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 15,
    marginBottom: 10,
  },
  topProductImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  headerTitle: {
    fontSize: 21,
    fontWeight: 'bold',
    marginHorizontal: 20,
  },
  timer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  clockIcon: {
    width: 20,
    height: 25,
    marginRight: 16,
    resizeMode: 'contain',
  },
  timerText: {
    backgroundColor: '#000',
    color: '#fff',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
    marginLeft: 2,
    marginRight: 15,
    fontSize: 12,
    fontWeight: '600',
  },
  flashItem: {
    width: '30%',
    aspectRatio: 1,
    borderRadius: 8,
    position: 'relative',
  },

  flashImage: {
    width: '100%',
    height: '100%',
    borderRadius: 8,
  },

  discountBadge: {
    position: 'absolute',
    top: 6,
    right: 6,
    backgroundColor: 'red',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 4,
    zIndex: 2,
  },

  discountText: {
    color: '#fff',
    fontSize: 10,
    fontWeight: 'bold',
  },
});
