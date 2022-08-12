import { Button, View, Text, Image, ScrollView, StyleSheet, StatusBar, Dimensions, ActivityIndicator, SafeAreaView, TextInput, Touchable, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';




const RecoveryScreenComponent = ({ navigation }) => {
    const goToLogin = () => {
        navigation.navigate('AuthScreen')
    }

    const goToRegister = () => {
        navigation.navigate('RegisterScreen')
    }


    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white', alignItems: 'center' }}>

            <Image
                style={{ width: 165, height: 55, marginTop: 105 }}
                source={require('../../assets/images/pilot-logo-blue.png')}
            />
            <Text style={{ width: 245, fontSize: 12, lineHeight: 15, textAlign: 'justify', color: '#4A4A4A', marginTop: 110, marginBottom: 10 }}>
                A link to reset your password will be sent to your email. Follow the link in the email and set a new password. Then log in to the app.
            </Text>

            <View style={{ width: 245, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginRight: 10 }}>
                <TextInput
                    style={styles.inputSmall}
                    placeholder='Email as login'
                />
                <TouchableOpacity style={styles.blueBotton} >
                    <Image
                        style={{ width: 14, height: 8, transform: [{ rotate: '270deg' }] }}
                        source={require('../../assets/images/Fill-35.png')} />
                </TouchableOpacity>
            </View>

            <View style={{ width: 245, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 13 }}>
                <TouchableOpacity
                    onPress={() => goToRegister()}
                >
                    <Text style={styles.links}>Registration</Text>
                </TouchableOpacity>
                <View style={styles.grayLine}></View>
                <TouchableOpacity
                    onPress={() => goToLogin()}
                >
                    <Text style={styles.links} >Login</Text>
                </TouchableOpacity>
                <View style={styles.grayLine}></View>
                <TouchableOpacity>
                    <Text style={styles.links} >Rules</Text>
                </TouchableOpacity>
            </View>

            <Image
                style={{ width: 101, height: 13, marginTop: 290 }}
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
        width: 40,
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

export default RecoveryScreenComponent