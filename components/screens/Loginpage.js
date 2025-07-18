import React, {useState} from 'react';
import axios from 'axios';
import BASE_URL from '../api';
import {Alert} from 'react-native';
import {
  TextInput,
  TouchableOpacity,
  View,
  Text,
  Image,
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import styles from './styles';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const Loginpage = ({navigation}) => {
  const [email, Setemail] = useState('');
  const stack = createNativeStackNavigator();

  const goToPasswordScreen = () => {
    if (email.trim()) {
      navigation.navigate('Password', {email});
    } else {
      Alert.alert('Error', 'Please enter your email');
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 60 : 0}
      style={{flex: 1}}>
      <View style={{flex: 1, justifyContent: 'center'}}>
        <View style={{flex: 1}}>
          <ImageBackground
            style={styles.backgroundImage2}
            source={require('../Logos/Bubbles2.png')}></ImageBackground>
        </View>
        <View style={{position: 'absolute', left: 30}}>
          <Text style={{fontSize: 52, fontWeight: 'bold'}}>Login</Text>
        </View>
        <View style={{position: 'absolute', bottom: 400, left: 30}}>
          <Text style={{fontSize: 19}}>Good to see you back! 🖤</Text>
        </View>

        <View style={{flex: 1, position: 'absolute', left: 40, bottom: 180}}>
          <TouchableOpacity
            style={[styles.Emailbutton, {position: 'absolute', bottom: 50}]}>
            <TextInput
              placeholder="Email"
              value={email}
              onChangeText={text => Setemail(text)}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.bottomView}>
          <TouchableOpacity style={styles.button} onPress={goToPasswordScreen}>
            <Text style={{fontSize: 22, color: '#FFFFFF'}}>Next</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Loginpage;
