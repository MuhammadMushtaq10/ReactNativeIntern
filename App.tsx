import React, {Component, useEffect, useState} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';

import {
  Button,
  Text,
  View,
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import Loginpage from './components/screens/Loginpage';
import styles from './components/screens/styles';
import Signup from './components/screens/Signup';
import Start from './components/screens/Start';
import ForgotPassword from './components/screens/ForgotPassword';
import Passwordpage from './components/screens/Passwordpage';
import Home from './components/screens/Home';
import ForgotpasswordEmail from './components/screens/ForgotpasswordEmail';
import ForgotpasswordSMS from './components/screens/ForgotpasswordSMS';
import Newpassword from './components/screens/Newpassword';
import Cart from './components/screens/Cart';
import Wishlist from './components/screens/Wishlist';
import Profile from './components/screens/Profile';
import Setting from './components/screens/settings/Setting';
import Unknown from './components/screens/Unknown';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Vouchers from './components/screens/vouchers/Vouchers';
import ProductDetail from './components/screens/ProductDetail/ProductDetail';
import Reviews from './components/screens/Reviews/index';
import SeeAllitems from './components/screens/SeeAllitems';
import EditAddress from './components/screens/Editaddress';
import ProductVariations from './components/screens/ProductVariation';

const Stack = createNativeStackNavigator();
const HomeStack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <HomeStack.Screen
        name="ProductDetail"
        component={ProductDetail}
        options={{
          headerShown: false,
        }}
      />
      <HomeStack.Screen
        name="Reviews"
        component={Reviews}
        options={{headerShown: false}}
      />
    </HomeStack.Navigator>
  );
}

function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarIcon: ({color, size}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = 'home-outline';
          } else if (route.name === 'Wishlist') {
            iconName = 'heart-outline';
          } else if (route.name === 'Cart') {
            iconName = 'cart-outline';
          } else if (route.name === 'Profile') {
            iconName = 'person-outline';
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#007bff',
        tabBarInactiveTintColor: 'gray',
      })}>
      <Tab.Screen name="Home" component={HomeStackScreen} />
      <Tab.Screen name="Wishlist" component={Wishlist} />
      <Tab.Screen name="Cart" component={Cart} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}

const App = () => {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <NavigationContainer>
        <Stack.Navigator /*initialRouteName="MainTabs"*/>
          <Stack.Screen
            name="Start"
            component={Start}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Signup"
            component={Signup}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Login"
            component={Loginpage}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Password"
            component={Passwordpage}
            options={{headerShown: false}}
          />

          <Stack.Screen
            name="ForgotPassword"
            component={ForgotPassword}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Home"
            component={Home}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="ForgetpasswordEmail"
            component={ForgotpasswordEmail}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="ForgetPasswordSMS"
            component={ForgotpasswordSMS}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="NewPassword"
            component={Newpassword}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="MainTabs"
            component={MainTabs}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="settings"
            component={Setting}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="vouchers"
            component={Vouchers}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="ProductDetail"
            component={ProductDetail}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="SeeAllitems"
            component={SeeAllitems}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="EditAddress"
            component={EditAddress}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="ProductVariation"
            component={ProductVariations}
            options={{headerShown: false}}
          />
          {
            <Stack.Screen
              name="Reviews"
              component={Reviews}
              options={{headerShown: false}}
            />
          }
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};

export default App;
