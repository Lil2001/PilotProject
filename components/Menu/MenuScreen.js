import { Button, View, Text, Image, ScrollView, StyleSheet, StatusBar, Dimensions, ActivityIndicator, SafeAreaView, TextInput, Touchable, TouchableOpacity, Modal } from 'react-native';
import React, { useState } from 'react';
import Svg, { Rect, Path } from "react-native-svg"

const MenuScreenComponent = ({ navigation,
    handleClick = () =>{

    }

}) => {

    const goToMyDevice = (modalVisible) => {
        navigation.navigate('MyDeviceScreen')
        handleClick(!modalVisible)
    }
    const goToNewDevice = (modalVisible) => {
        navigation.navigate('NewDeviceScreen')
        handleClick(!modalVisible)
    }



    return (
        <SafeAreaView 
         style={{ flex: 1, backgroundColor: 'white' }}>
            <View style={styles.navBarDiv} >
                <Image
                    style={{ width: 155, height: 52, marginTop: 20 }}
                    source={require('../../assets/images/pilotlogowhite.png')}
                />
                <View style={styles.inputMail}>
                    <Text style={styles.mailText}>username@gmail.com</Text>
                    <TouchableOpacity>
                        <Svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <Path d="M12.7969 16.7344H1.26562V1.26562H12.7969V0.140625H0.140625V17.8594H12.7969V16.7344Z" fill="white" />
                            <Path d="M6.75 8.4375H5.625V9.5625H6.75V8.4375Z" fill="white" />
                            <Path d="M12.7688 13.6125L17.3953 9L12.7688 4.3875L11.9812 5.175L15.2297 8.4375H8.15625V9.5625H15.2297L11.9812 12.825L12.7688 13.6125Z" fill="white" />
                        </Svg>
                    </TouchableOpacity>
                </View>

                <View style={styles.linksDiv} >
                    <TouchableOpacity onPress={() => goToMyDevice() }>
                        <Text style={styles.linkText}>My devices</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => goToNewDevice() }>
                        <Text style={styles.linkText}>Add a new device</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={styles.linkText}>Manual</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={styles.linkText}>Offline Setup</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={styles.linkText}>Settings</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.mailDiv}>
                    <TouchableOpacity>
                        <Text style={styles.number} >+7 (495) 984-21-01</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={styles.email}>pilot@zis.ru</Text>
                    </TouchableOpacity>
                </View>
                <Image
                    style={{ width: 101, height: 13, marginTop: 20, marginLeft: 10 }}
                    source={require('../../assets/images/zislogowhite.png')}
                />
            </View>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    navBarDiv: {
        width: 266,
        height: '100%',
        backgroundColor: '#004B84',
        flexDirection: 'column',
        padding: 20
    },
    inputMail: {
        width: 199,
        height: 49,
        borderWidth: 1,
        borderColor: 'white',
        marginTop: 28,
        marginLeft: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10
    },
    mailText: {
        fontSize: 12,
        lineHeight: 15,
        color: 'white',
        fontWeight: '400'
    },
    linksDiv: {
        marginTop: 40,
        height: 220,
        width: 142,
        marginLeft: 10
    },
    linkText: {
        color: 'white',
        fontSize: 16,
        lineHeight: 20,
        fontWeight: '400',
        marginBottom: 15
    },
    mailDiv: {
        marginTop: 200,
        width: '100%',
        marginLeft: 10
    },
    number: {
        fontSize: 24,
        lineHeight: 29,
        color: 'white',
        fontWeight: '700',
        marginBottom: 2
    },
    email: {
        color: 'white',
        fontSize: 16,
        lineHeight: 20,
        fontWeight: '400',
        marginBottom: 15,

    }
})

export default MenuScreenComponent