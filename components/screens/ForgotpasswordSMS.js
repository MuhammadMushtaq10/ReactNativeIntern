import React, {useState, useRef} from 'react';
import {Image, Text, TextInput, TouchableOpacity, View} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const ForgotpasswordSMS = ({navigation}) => {
  const [otp, setOtp] = useState(['', '', '', '']);

  const input1 = useRef();
  const input2 = useRef();
  const input3 = useRef();
  const input4 = useRef();

  const handlechange = (text, index) => {
    const newotp = [...otp];
    newotp[index] = text;
    setOtp(newotp);

    if (text !== '') {
      if (index === 0) input2.current.focus();
      if (index === 1) input3.current.focus();
      if (index === 2) input4.current.focus();
    }
  };
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
          Enter 4-digits code we sent you {'\n'}on your phone number
        </Text>
      </View>
      <View
        style={{
          position: 'absolute',
          top: 420,
          right: 30,
          alignSelf: 'center',
          width: '80%',
        }}>
        <Text style={{fontSize: 19, textAlign: 'center', fontWeight: 'bold'}}>
          +92********78{' '}
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          position: 'absolute',
          bottom: 350,
          left: 90,
        }}>
        <TextInput
          maxLength={1}
          keyboardType="number-pad"
          textAlign="center"
          style={styles.OTP}
          ref={input1}
          onChangeText={text => handlechange(text, 0)}></TextInput>
        <TextInput
          maxLength={1}
          keyboardType="number-pad"
          textAlign="center"
          style={styles.OTP}
          ref={input2}
          onChangeText={text => handlechange(text, 1)}></TextInput>

        <TextInput
          maxLength={1}
          keyboardType="number-pad"
          textAlign="center"
          style={styles.OTP}
          ref={input3}
          onChangeText={text => handlechange(text, 2)}></TextInput>

        <TextInput
          maxLength={1}
          keyboardType="number-pad"
          textAlign="center"
          style={styles.OTP}
          ref={input4}
          onChangeText={text => handlechange(text, 3)}
          onSubmitEditing={() => navigation.navigate('NewPassword')}
          onEndEditing={() => navigation.navigate('NewPassword')}></TextInput>
      </View>
      <View style={styles.bottomView}>
        <TouchableOpacity style={styles.sendagainbutton}>
          <Text style={{fontSize: 22, color: '#FFFFFF'}}>Send Again</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ForgotpasswordSMS;
