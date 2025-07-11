import { useState } from "react";
import { View,Text } from "react-native";
import settingstyle from "./settingstyle";
import { SafeAreaView } from "react-native-safe-area-context";



const Setting = ({navigation}) => {
    return (
        <SafeAreaView style = {settingstyle.container}>
            <View>
                <Text>Welcome to settings</Text>
            </View>
        </SafeAreaView>
    )
}

export default Setting