import {StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cartText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  cartCountContainer: {
    backgroundColor: '#EEE',
    borderRadius: 20,
    paddingHorizontal: 8,
    paddingVertical: 2,
    marginLeft: 8,
    
  },
  cartCount: {
    fontSize: 14,
  },
  shippingContainer: {
    marginTop: 20,
    backgroundColor: '#f4f4f4',
    padding: 16,
    borderRadius: 12,
    position: 'relative',
  },
  shippingTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
  },
  shippingText: {
    fontSize: 14,
    color: '#444',
  },
  editButton: {
    position: 'absolute',
    right: 16,
    top: 16,
  },
  iconContainer: {
    alignItems: 'center',
    marginVertical: 40,
  },
  iconCircle: {
    backgroundColor: '#fff',
    borderRadius: 60,
    width: 120,
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: {width: 0, height: 4},
    shadowRadius: 8,
    elevation: 3,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderTopWidth: 1,
    borderColor: '#BBBBF2',
    backgroundColor : 'red',
    //position : 'absolute',
    top : 370 , 
  },
  totalText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  checkoutButton: {
    backgroundColor: '#111',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
  },
  checkoutText: {
    color: '#fff',
    fontSize: 16,
  },
}
)