import { Button, View, Text, Image, ScrollView, StyleSheet, StatusBar, Dimensions, ActivityIndicator, SafeAreaView, TextInput, Touchable, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import DropDown from '../DropDown';


let languages = [
    {
        id: 1,
        language: 'English',
        image: require('../../assets/images/engflag.png')
    },
    {
        id: 2,
        language: 'Russian',
        image: require("../../assets/images/rusflag.png")
    }

]



export default function AuthScreenComponent({ navigation }) {
    const [selectItem, setSelectItem] = useState(null)

    const onSelect = (item) => {
        setSelectItem(item)
    }
    const goToRecovery = () => {
        navigation.navigate('RecoveryScreen')
    }

    const goToRegister = () => {
        navigation.navigate('RegisterScreen')
    }
    const goToMyDevice = () => {
        navigation.navigate('MyDeviceScreen')
    }




    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white', alignItems: 'center' }}>

            <Image
                style={{ width: 165, height: 55, marginTop: 105 }}
                source={require('../../assets/images/pilot-logo-blue.png')}
            />



            <DropDown
                value={selectItem}
                data={languages}
                onSelect={onSelect}
            />

            <TextInput
                style={styles.input}
                placeholder='Email as login'
            />

            <View style={{ width: 245, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginRight: 10 }}>
                <TextInput
                    style={styles.inputSmall}
                    placeholder='Password'
                    secureTextEntry={true}
                />
                <TouchableOpacity 
                onPress={()=> goToMyDevice()}
                style={styles.blueBotton} >
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
                style={{ width: 101, height: 13, marginTop: 250 }}
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