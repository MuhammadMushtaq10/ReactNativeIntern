import {StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  input: {borderWidth: 1, padding: 8, marginVertical: 12},
  button: {backgroundColor: '#ccc', padding: 12, alignItems: 'center'},
});
