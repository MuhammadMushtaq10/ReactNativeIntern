import React, {useState} from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import {Alert} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SafeAreaView} from 'react-native-safe-area-context';
import styles from '../styles';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import axios from 'axios';
import BASE_URL from '../../api';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const Signup = ({navigation}) => {
  const [name, setName] = useState('');
  const [email, Setemail] = useState('');
  const [phone, Setphone] = useState('');
  const [password, Setpassword] = useState('');
  const [IsPasswordSecure, SetIsPasswordSecure] = useState(true);

  const registerUser = async () => {
    try {
      const res = await axios.post(`${BASE_URL}/api/auth/register`, {
        name,
        email,
        phone,
        password,
      });
      if (res.status === 201) {
        Alert.alert('Success', res.data.message);
        navigation.navigate('Login'); // optional: navigate to Login screen
      } else {
        Alert.alert('Error', 'Unexpected response');
      }
    } catch (err) {
      console.error('Registration failed', err);
      Alert.alert(
        'Error',
        err.response?.data?.message || 'Something went wrong',
      );
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 60 : 0}
      style={{flex: 1}}>
      <View style={styles.Signup}>
        <ImageBackground
          style={styles.backgroundImage}
          source={require('../Logos/Bubbles.png')}></ImageBackground>
        <Text
          style={{
            fontSize: 50,
            fontWeight: 'bold',
            position: 'absolute',
            left: 40,
            top: 130,
          }}>
          Create {'\n'}Account
        </Text>
        <View style={{flex: 1, position: 'absolute', left: 40, bottom: 530}}>
          <Image source={require('../Logos/UploadPhoto.png')}></Image>
        </View>
        <View
          style={{
            flex: 1,
            position: 'absolute',
            left: wp('10%'),
            bottom: hp('55%'),
          }}>
          <TouchableOpacity
            style={[
              styles.Emailbutton,
              {position: 'absolute', bottom: hp('6%')},
            ]}>
            <TextInput
              placeholder="Full Name"
              value={name}
              onChangeText={text => setName(text)}
              style={{fontSize: hp('2%')}}
            />
          </TouchableOpacity>
        </View>
        <View style={{flex: 1, position: 'absolute', left: 40, bottom: 380}}>
          <TouchableOpacity
            style={[styles.Emailbutton, {position: 'absolute', bottom: 50}]}>
            <TextInput
              placeholder="Email"
              value={email}
              onChangeText={text => Setemail(text)}
            />
          </TouchableOpacity>
        </View>
        <View style={{flex: 1, position: 'absolute', left: 40, bottom: 320}}>
          <View
            style={[
              styles.Emailbutton,
              {flexDirection: 'row', alignItems: 'center'},
            ]}>
            <TextInput
              style={{flex: 1, height: 50}}
              placeholder="Password"
              value={password}
              onChangeText={text => Setpassword(text)}
              secureTextEntry={IsPasswordSecure}
              autoCorrect={false}
              textContentType="password"
            />
            <TouchableOpacity
              onPress={() => SetIsPasswordSecure(!IsPasswordSecure)}>
              <MaterialCommunityIcons
                name={IsPasswordSecure ? 'eye-off' : 'eye'}
                size={24}
                color="black"
              />
            </TouchableOpacity>
          </View>
        </View>

        <View style={{flex: 1, position: 'absolute', left: 40, bottom: 220}}>
          <TouchableOpacity style={styles.Emailbutton}>
            <TextInput
              placeholder="Your number"
              value={phone}
              onChangeText={text => Setphone(text)}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.bottomView}>
          <TouchableOpacity style={styles.button} onPress={registerUser}>
            <Text style={{fontSize: 22, color: '#FFFFFF'}}>Done</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Signup;
