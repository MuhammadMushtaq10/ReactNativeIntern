import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import {React, useState} from 'react';
import indexstyle from './indexstyle';

const EditAddress = ({navigation, route}) => {
  const {shippingAddress: initialAddress} = route.params;
  const [address, setAddress] = useState(initialAddress);

  const handleSave = () => {
    navigation.navigate('Cart', {updatedAddress: address});
  };
  return (
    <View style={indexstyle.container}>
      <Text>Edit Address</Text>
      <TextInput
        value={address}
        onChangeText={setAddress}
        style={indexstyle.input}
        placeholder="Enter new address"
      />
      <TouchableOpacity onPress={handleSave} style={indexstyle.button}>
        <Text>Save</Text>
      </TouchableOpacity>
    </View>
  );
};

export default EditAddress;
