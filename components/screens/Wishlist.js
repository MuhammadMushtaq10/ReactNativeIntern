import { useState } from "react"
import { View ,Text} from "react-native"
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Wishlist = ({navigation}) => {
    return(
        <View style = {{flex : 1 , justifyContent  : 'center' , alignItems : 'center'}}>
            <View>
                <Text>Welcome to Wishlist</Text>
            </View>
        </View>
    )
}

export default Wishlist;