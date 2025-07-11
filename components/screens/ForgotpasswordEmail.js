import React, {useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import styles from './styles'; // assuming your common styles are here
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const ForgotpasswordEmail = ({navigation}) => {
  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <View style={{position: 'absolute', right: 0, top: 0}}>
        <Image source={require('../Logos/Bubbles4.png')} />
      </View>
      <View style={{position: 'absolute', top: 150, left: 130}}>
        <Image
          style={styles.logo5}
          source={require('../Logos/artist-21.png')}
        />
      </View>

      <View style={{position: 'absolute', top: 320, alignSelf: 'center'}}>
        <Text style={{fontSize: 21, fontWeight: 'bold'}}>
          Password Recovery
        </Text>
      </View>

      <View
        style={{
          position: 'absolute',
          top: 360,
          alignSelf: 'center',
          width: '80%',
        }}>
        <Text style={{fontSize: 19, textAlign: 'center'}}>
          Enter 4-digits code we sent you {'\n'}on your phone Email
        </Text>
      </View>
    </View>
  );
};

export default ForgotpasswordEmail;
