import { Button, View, Text, Image, ScrollView, StyleSheet, StatusBar, Dimensions, ActivityIndicator, SafeAreaView, TextInput, Touchable, TouchableOpacity, Modal, Pressable } from 'react-native';
import React, { useState } from 'react';
import Svg, { Rect, Line } from "react-native-svg"
import MenuScreenComponent from '../Menu/MenuScreen';

let data = [
    {
        id: 1,
        image: require('../../assets/images/active.png'),
        name: 'Some Name',
        title: 'Smart Outlet'
    },
    {
        id: 2,
        image: require('../../assets/images/activeAnother.png'),
        name: 'Some Name',
        title: 'Smart Outlet'
    },
    {
        id: 3,
        image: require('../../assets/images/offcomponet.png'),
        name: 'Some Name',
        title: 'Smart Outlet'
    },
    {
        id: 4,
        image: require('../../assets/images/active.png'),
        name: 'Some Name',
        title: 'Smart Outlet'
    }
]

const MyDeviceComponent = ({ navigation }) => {
    const [modalVisible, setModalVisible] = useState(false);

    const goToNewDevice = () => {
        navigation.navigate('NewDeviceScreen')
    }

    const handleClick = (modalVisible) => {
        setModalVisible(!modalVisible)
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
            <Modal
                animationType="slide"
                transparent={false}
                visible={modalVisible}
            >
                <Pressable
                    style={{ flex: 1, backgroundColor: 'white' }}
                    onPress={() => setModalVisible(!modalVisible)} >
                    <MenuScreenComponent navigation={navigation} handleClick={handleClick} />
                </Pressable>
            </Modal>
            <View style={styles.naviBarDiv}>
                <Text style={{ fontSize: 24, color: '#004B84', lineHeight: 29, fontWeight: '400' }}>My devices</Text>

                <TouchableOpacity
                    onPress={() => setModalVisible(true)}
                >
                    <Svg width="28" height="25" viewBox="0 0 28 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <Rect width="28" height="3" fill="#004B84" />
                        <Rect y="11" width="28" height="3" fill="#004B84" />
                        <Rect y="22" width="28" height="3" fill="#004B84" />
                    </Svg>
                </TouchableOpacity>

            </View>
            <ScrollView >
                <View style={styles.deviceDiv} >
                    <View style={{ flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', padding: 15 }}>
                        {data.map((res, index) => {
                            return (
                                <View
                                    style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: 10 }}
                                    key={index}>
                                    <Image
                                        style={{ width: 109, height: 101, marginTop: 10 }}
                                        source={res.image} />
                                    <Text
                                        style={styles.deviceTextFirst}
                                    > {res.name}</Text>
                                    <Text
                                        style={styles.deviceTextSecond}
                                    >{res.title}</Text>
                                </View>
                            )
                        })}
                    </View>
                    <TouchableOpacity
                        onPress={() => { goToNewDevice() }}
                        style={{ position: 'absolute', top: 210, left: 150, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', }}>
                        <View style={{ width: 109, height: 101, borderWidth: 1, borderColor: '#10BCCE', borderStyle: "dashed", flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                            <Svg width="52" height="52" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <Line x1="11.5" y1="2.18557e-08" x2="11.5" y2="22" stroke="#10BCCE" />
                                <Line x1="22" y1="11.5" x2="-4.37114e-08" y2="11.5" stroke="#10BCCE" />
                            </Svg>

                        </View>
                        <Text style={{ color: '#004B84', fontSize: 12, lineHeight: 15, marginTop: 10 }}>Add new</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView >
    )
}


const styles = StyleSheet.create({
    naviBarDiv: {
        width: '100%',
        height: 100,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 30,
        borderBottomWidth: 1,
        borderBottomColor: '#004B84'
    },
    deviceTextFirst: {
        color: '#004B84',
        fontSize: 12,
        lineHeight: 15,
        marginRight: 15,
        marginTop: 15
    },
    deviceTextSecond: {
        color: '#10BCCE',
        fontSize: 8,
        lineHeight: 10,
        marginRight: 15,
        marginTop: 15
    },
    deviceDiv: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        position: 'relative'
    }
})

export default MyDeviceComponent