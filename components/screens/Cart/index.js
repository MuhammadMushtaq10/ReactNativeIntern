import {useState , useEffect} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import indexstyle from './indexstyle';
import {SafeAreaView} from 'react-native-safe-area-context';

const Cart = ({route, navigation}) => {
  useEffect(() => {
    if (route.params?.updatedAddress) {
      setshippingAddress(route.params.updatedAddress);
    }
  }, [route.params?.updatedAddress]);
  const [cartCount, setCartCount] = useState(0);
  const [shippingAddress, setShippingAddress] = useState(
    'ABC , 123 , XYZ , Karachi',
  );


  return (
    <SafeAreaView style={indexstyle.container}>
      <View style={indexstyle.header}>
        <Text style={indexstyle.cartText}>Cart</Text>
        <View style={indexstyle.cartCountContainer}>
          <Text style={indexstyle.cartCount}>{cartCount}</Text>
        </View>
      </View>

      <View style={indexstyle.shippingContainer}>
        <Text style={indexstyle.shippingTitle}>Shipping Address</Text>
        <Text style={indexstyle.shippingText}>{shippingAddress}</Text>
        <TouchableOpacity
          style={indexstyle.editButton}
          onPress={() => navigation.navigate('EditAddress', {shippingAddress})}>
          <Image source={require('../../Logos/Edit.png')}></Image>
        </TouchableOpacity>
      </View>

      <View style={indexstyle.iconContainer}>
        <View style={indexstyle.iconCircle}>
          <Image
            source={require('../../Logos/Ellipse.png')}
            style={{width: 50, height: 50}}
          />
        </View>
      </View>

      <View style={indexstyle.footer}>
        <Text style={indexstyle.totalText}>Total $0,00</Text>
        <TouchableOpacity style={indexstyle.checkoutButton}>
          <Text style={indexstyle.checkoutText}>Checkout</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Cart;
