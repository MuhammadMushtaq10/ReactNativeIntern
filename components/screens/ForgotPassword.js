import React, {useState} from 'react';
import {Alert, Image, Text, TouchableOpacity, View} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const ForgotPassword = ({navigation}) => {
  const [SelectedOption, setSelectedOption] = useState(null);

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
          How would you like to restore{'\n'}your password?
        </Text>

        <TouchableOpacity
          style={[
            styles.optionBox,
            SelectedOption === 'SMS' && styles.selectedBox,
            {
              marginTop: 30,
              flexDirection: 'row-reverse',
              justifyContent: 'space-between',
            },
          ]}
          onPress={() => setSelectedOption('SMS')}>
          <View style={styles.radioCircle}>
            {SelectedOption === 'SMS' && (
              <MaterialIcons name="check" size={16} color="#4e9bde" />
            )}
          </View>
          <Text style={{flex: 1, textAlign: 'center'}}>SMS</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.optionBox,
            SelectedOption === 'Email' && styles.selectedBox,
            {
              marginTop: 30,
              flexDirection: 'row-reverse',
              justifyContent: 'space-between',
            },
          ]}
          onPress={() => setSelectedOption('Email')}>
          <View style={styles.radioCircle}>
            {SelectedOption === 'Email' && (
              <MaterialIcons name="check" size={16} color="#4e9bde" />
            )}
          </View>
          <Text style={{flex: 1, textAlign: 'center'}}>Email</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bottomView}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            if (SelectedOption === 'SMS') {
              navigation.navigate('ForgetPasswordSMS');
            } else if (SelectedOption === 'Email') {
              navigation.navigate('ForgetpasswordEmail');
            } else {
              Alert('Please Select an option First');
            }
          }}>
          <Text style={{fontSize: 22, color: '#FFFFFF'}}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ForgotPassword;
