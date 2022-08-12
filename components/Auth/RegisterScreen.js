import { Button, View, Text, Image, ScrollView, StyleSheet, StatusBar, Dimensions, ActivityIndicator, SafeAreaView, TextInput, Touchable, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import RangeSlider, { Slider } from 'react-native-range-slider-expo';
import 'react-native-gesture-handler';

const RegisterScreenComponent = ({ navigation }) => {

    const goToLogin = () => {
        navigation.navigate('AuthScreen')
    }
    const goToRecovery = () => {
        navigation.navigate('RecoveryScreen')
    }

    const [fromValue, setFromValue] = useState(0);
    const [toValue, setToValue] = useState(0);
    const [value, setValue] = useState(0);

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white', alignItems: 'center' }}>
            <Image
                style={{ width: 165, height: 55, marginTop: 105, marginBottom: 100 }}
                source={require('../../assets/images/pilot-logo-blue.png')}
            />
            <TextInput
                style={styles.input}
                placeholder='Email as login'
            />
            <TextInput
                style={styles.input}
                placeholder='Password'
                secureTextEntry={true}
            />
            <View style={{width:245, marginTop:10,marginBottom:20}}>
            <Text>I agree with the terms of use</Text>
            </View>
            <TouchableOpacity style={styles.blueBotton} >
                <Text style={{ color: 'white', fontSize: 16, lineHeight: 19 }}>Register</Text>
            </TouchableOpacity>
            <View style={{ width: 245, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 13 }}>
                <TouchableOpacity
                    onPress={() => goToLogin()}
                >
                    <Text style={styles.links}>Login</Text>
                </TouchableOpacity>
                <View style={styles.grayLine}></View>
                <TouchableOpacity
                    onPress={() => goToRecovery()}
                >
                    <Text style={styles.links} >Password recovery</Text>
                </TouchableOpacity>
                <View style={styles.grayLine}></View>
                <TouchableOpacity>
                    <Text style={styles.links} >Rules</Text>
                </TouchableOpacity>
            </View>

            <Image
                style={{ width: 101, height: 13, marginTop: 240 }}
                source={require('../../assets/images/zis-logo.png')}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    input: {
        width: 245,
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderColor: '#10BCCE'
    },
    inputSmall: {
        width: 187,
        height: 40,
        margin: 5,
        borderWidth: 1,
        padding: 10,
        borderColor: '#10BCCE',
        marginRight: 20
    },
    blueBotton: {
        width: 245,
        height: 40,
        backgroundColor: '#004B84',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    grayLine: {
        width: 1,
        height: 15,
        backgroundColor: '#BDBDBD'
    },
    links: {
        fontSize: 12,
        lineHeight: 15,
        color: '#004B84',
        fontWeight: '400'
    }
})

export default RegisterScreenComponent