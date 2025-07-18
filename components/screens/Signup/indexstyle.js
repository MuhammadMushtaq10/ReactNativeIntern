import {Dimensions, StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const indexstyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  backgroundImage: {
    top: 0,
    width: '100%',
    position: 'absolute',
    height: Dimensions.get('screen').height / 2.7,
    resizeMode: 'contain',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    paddingTop: hp('10%'),
  },
  heading: {
    fontSize: 50,
    fontWeight: 'bold',
    //alignSelf: "flex-start",
    marginLeft: wp('10%'),
    marginBottom: hp('4%'),
    marginTop : hp('10%')
  },
  uploadWrapper: {
    width: wp('30%'),
    height: wp('30%'),
    //borderRadius: wp('15%'),
    //borderWidth: 0,
    borderColor: '#0066FF',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: hp('4%'),
    marginLeft : wp('5%')
  },
  input: {
    width: ('90%'),
    height: ('6.5%'),
    backgroundColor: '#A8F4F8',
    borderRadius: 20,
    paddingHorizontal: wp('4%'),
    marginBottom: hp('2%'),
    fontSize: hp('2%'),
    marginLeft : wp('5%')
  },
  passwordContainer: {
    width: wp('80%'),
    height: hp('6.5%'),
    backgroundColor: '#F5F5F5',
    borderRadius: 12,
    paddingHorizontal: wp('4%'),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: hp('2%'),
  },
  passwordInput: {
    flex: 1,
    fontSize: hp('2%'),
  },
  phoneContainer: {
    width: wp('80%'),
    height: hp('6.5%'),
    backgroundColor: '#F5F5F5',
    borderRadius: 12,
    paddingHorizontal: wp('4%'),
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: hp('4%'),
  },
  flagIcon: {
    width: wp('6%'),
    height: wp('4%'),
    resizeMode: 'contain',
    marginRight: wp('2%'),
  },
  phoneInput: {
    flex: 1,
    fontSize: hp('2%'),
  },
  doneButton: {
    width: ('80%'),
    height: ('6.5%'),
    backgroundColor: '#0066FF',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: hp('2%'),
    marginLeft : wp('10%')
  },
  doneButtonText: {
    color: '#FFFFFF',
    fontSize: hp('2.2%'),
    fontWeight: 'bold',
  },
  cancelText: {
    color: '#000000',
    fontSize: hp('2%'),
    textDecorationLine: 'underline',
    marginLeft : wp('22%')
  },
});

export default indexstyle;
