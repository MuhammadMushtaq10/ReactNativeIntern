import { useState } from "react";
import { View,Text } from "react-native";
import vouchersstyle from "./vouchersstyle";
import { SafeAreaView } from "react-native-safe-area-context";



const Vouchers = ({navigation}) => {
    return (
        <SafeAreaView style = {vouchersstyle.container}>
            <View>
                <Text>Welcome to Vouchers</Text>
            </View>
        </SafeAreaView>
    )
}

export default Vouchers