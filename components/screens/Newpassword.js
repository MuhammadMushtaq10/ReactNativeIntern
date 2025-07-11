import React, {useState, useRef} from 'react';
import {Image, Text, TextInput, TouchableOpacity, View} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Newpassword = ({navigation}) => {
  const [password, Setpassword] = useState('');
  const [IsPasswordSecure, SetIsPasswordSecure] = useState(true);
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
          Set up New Password
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
          Please, setup a new password for {'\n'}your account{' '}
        </Text>
      </View>
      <View
        style={{
          position: 'absolute',
          top: 450,
          left: -10,
          alignSelf: 'center',
          width: '90%',
          flexDirection: 'row-reverse',
          alignItems: 'center',
        }}>
        <TextInput
          placeholder="new password"
          value={password}
          onChangeText={text => Setpassword(text)}
          secureTextEntry={IsPasswordSecure}
          textContentType="password"
          style={styles.newpasswordTextBox}></TextInput>
        <TouchableOpacity
          style={{flexDirection: 'row-reverse'}}
          onPress={() => SetIsPasswordSecure(!IsPasswordSecure)}>
          <MaterialCommunityIcons
            name={IsPasswordSecure ? 'eye-off' : 'eye'}
            size={24}
            color="black"></MaterialCommunityIcons>
        </TouchableOpacity>
      </View>
      <View
        style={{
          position: 'absolute',
          top: 540,
          left: 60,
          alignSelf: 'center',
          width: '90%',
        }}>
        <TextInput
          placeholder=" confirm new password"
          secureTextEntry={IsPasswordSecure}
          textContentType="password"
          style={styles.newpasswordTextBox}></TextInput>
      </View>
    </View>
  );
};

export default Newpassword;
