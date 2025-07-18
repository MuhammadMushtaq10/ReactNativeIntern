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
  SafeAreaView,
  Modal,
} from 'react-native';
import {Alert} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import indexstyle from './indexstyle';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import axios from 'axios';
import BASE_URL from '../../api';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {ScrollView} from 'react-native-gesture-handler';

const Signup = ({navigation}) => {
  const [name, setName] = useState('');
  const [email, Setemail] = useState('');
  const [phone, Setphone] = useState('');
  const [password, Setpassword] = useState('');
  const [IsPasswordSecure, SetIsPasswordSecure] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const [modalTitle, setModalTitle] = useState('');
  const [isErrorModal, setIsErrorModal] = useState(false);

  const registerUser = async () => {
    try {
      const res = await axios.post(`${BASE_URL}/api/auth/register`, {
        name,
        email,
        phone,
        password,
      });
      if (res.status === 201) {
        setModalTitle('Success');
        setModalMessage(res.data.message);
        setIsErrorModal(false);
        setModalVisible(true);
      } else {
        setModalTitle('Error');
        setModalMessage('Unexpected response');
        setIsErrorModal(true);
        setModalVisible(true);
      }
    } catch (err) {
      console.error('Registration failed', err);
      setModalTitle('Error');
      setModalMessage(err.response?.data?.message || 'Something went wrong');
      setIsErrorModal(true);
      setModalVisible(true);
    }
  };

  //const {bottom, top} = useSafeAreaInsets();
  return (
    <SafeAreaView style={[indexstyle.container]}>
      <ScrollView>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          keyboardVerticalOffset={Platform.OS === 'ios' ? 60 : 0}
          style={{flex: 1}}>
          <Modal
            visible={modalVisible}
            transparent
            animationType="fade"
            onRequestClose={() => setModalVisible(false)}>
            <View
              style={{
                flex: 1,
                backgroundColor: 'rgba(0,0,0,0.5)',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <View
                style={{
                  width: '80%',
                  backgroundColor: 'white',
                  borderRadius: 10,
                  padding: 20,
                  alignItems: 'center',
                }}>
                <Text
                  style={{fontSize: 22, fontWeight: 'bold', marginBottom: 10}}>
                  {modalTitle}
                </Text>
                <Text
                  style={{
                    fontSize: 16,
                    textAlign: 'center',
                    marginBottom: 20,
                    color: isErrorModal ? 'red' : 'black',
                  }}>
                  {modalMessage}
                </Text>
                <TouchableOpacity
                  style={{
                    backgroundColor: isErrorModal ? '#FF4D4D' : '#0057FF',
                    paddingVertical: 10,
                    paddingHorizontal: 20,
                    borderRadius: 8,
                  }}
                  onPress={() => {
                    setModalVisible(false);
                    if (!isErrorModal) {
                      navigation.navigate('Login');
                    }
                  }}>
                  <Text style={{color: '#fff', fontSize: 16}}>
                    {isErrorModal ? 'OK' : 'Continue'}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>

          <ImageBackground
            style={indexstyle.backgroundImage}
            resizeMode="stretch"
            source={require('../../Logos/Bubbles.png')}></ImageBackground>
          <Text style={indexstyle.heading}>Create {'\n'}Account</Text>
          <View style={indexstyle.uploadWrapper}>
            <Image source={require('../../Logos/UploadPhoto.png')}></Image>
          </View>
          <View style={[indexstyle.input]}>
            <TextInput
              placeholder="Full Name"
              value={name}
              onChangeText={text => setName(text)}
              style={{fontSize: hp('2%')}}
            />
          </View>
          <View style={[indexstyle.input]}>
            <TextInput
              placeholder="Email"
              value={email}
              onChangeText={text => Setemail(text)}
            />
          </View>
          <View style={[indexstyle.input]}>
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
              onPress={() => SetIsPasswordSecure(!IsPasswordSecure)}
              style={indexstyle}>
              <MaterialCommunityIcons
                name={IsPasswordSecure ? 'eye-off' : 'eye'}
                size={24}
                color="black"
              />
            </TouchableOpacity>
          </View>
          <View style={[indexstyle.input]}>
            <TextInput
              placeholder="Your number"
              value={phone}
              onChangeText={text => Setphone(text)}
              keyboardType="phone-pad"
              style={indexstyle.phoneInput}
            />
          </View>
          <TouchableOpacity
            style={indexstyle.doneButton}
            onPress={registerUser}>
            <Text style={indexstyle.doneButtonText}>Done</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={indexstyle.cancelText}
            onPress={registerUser}>
            <Text style={indexstyle.cancelText}>cancel</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Signup;
