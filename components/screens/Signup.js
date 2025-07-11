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

const Signup = ({navigation}) => {
  const [email, Setemail] = useState('');
  const [Phonenumber, Setphonenumber] = useState('');
  const [password, Setpassword] = useState('');
  const [IsPasswordSecure, SetIsPasswordSecure] = useState(true);
  return (
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
            value={Phonenumber}
            onChangeText={text => Setphonenumber(text)}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.bottomView}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Login')}>
          <Text style={{fontSize: 22, color: '#FFFFFF'}}>Done</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Signup;
