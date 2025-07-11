import React, {useState} from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SafeAreaView} from 'react-native-safe-area-context';
import styles from './styles';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const stack = createNativeStackNavigator();
const Passwordpage = ({navigation}) => {
  const [password, Setpassword] = useState('');
  const [IsPasswordSecure, SetIsPasswordSecure] = useState(true);
  return (
    <View style={{flex: 1}}>
      <View style={{flex: 1, position: 'absolute', top: -1}}>
        <ImageBackground
          style={styles.backgroundImage3}
          source={require('../Logos/Bubbles3.png')}></ImageBackground>
      </View>
      <View style={[styles.logo3, {position: 'absolute', top: 150, left: 130}]}>
        <Image
          style={styles.logo5}
          source={require('../Logos/artist-21.png')}></Image>
      </View>
      <View style={{position: 'absolute', top: 320, right: 100}}>
        <Text style={{fontSize: 28, fontWeight: 'bold'}}>
          Hello, Madison!!{' '}
        </Text>
      </View>
      <View style={{position: 'absolute', top: 400, right: 120}}>
        <Text style={{fontSize: 19}}>Type your password</Text>
      </View>
      <View
        style={[
          styles.Emailbutton,
          {
            position: 'absolute',
            top: 500,
            right: 50,
            flexDirection: 'row',
            alignItems: 'center',
          },
        ]}>
        <TextInput
          style={{flex: 1}}
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
      <View style={{position: 'absolute', bottom: 280, right: 120}}>
        <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
          <Text style={{fontSize: 15}}>Forgot your password?</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bottomView}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('MainTabs')}>
          <Text style={{fontSize: 22, color: '#FFFFFF'}}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Passwordpage;
