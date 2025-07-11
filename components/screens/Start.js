import React, {useState} from 'react';
import {
  TextInput,
  TouchableOpacity,
  View,
  Text,
  Image,
  StatusBar,
  Dimensions,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import styles from './styles';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Background} from '@react-navigation/elements';

const Start = ({navigation}) => {
  return (
    <View style={styles.Start}>
      <StatusBar
        animated={true}
        backgroundColor="#FFFFFF"
        barStyle="dark-content"
      />
      <View style={styles.logo}>
        <Image
          style={styles.logo1}
          source={require('../Logos/Shoppe.png')}></Image>
      </View>
      <Text style={styles.heading}>Shoppe</Text>
      <Text style={styles.text}>
        Beautiful eCommerce UI Kit {'\n'}for your online store
      </Text>

      <View style={styles.bottomView}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Signup')}>
          <Text style={{fontSize: 22, color: '#FFFFFF'}}>
            Let's get started
          </Text>
        </TouchableOpacity>
        <View style={{flexDirection: 'row'}}>
          <Text
            style={{
              fontSize: 15,
              color: '#202020',
              alignContent: 'center',
              justifyContent: 'center',
            }}>
            {'\n'}I already have an account{' '}
          </Text>

          <View>
            <TouchableOpacity
              style={styles.button2}
              onPress={() => navigation.navigate('Login')}>
              <Text
                style={{
                  fontSize: 12,
                  color: '#FFFFFF',
                  alignContent: 'center',
                  justifyContent: 'center',
                }}>
                {'->'}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Start;
