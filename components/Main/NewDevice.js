import { Button, View, Text, Image, ScrollView, StyleSheet, StatusBar, Dimensions, ActivityIndicator, SafeAreaView, TextInput, Touchable, TouchableOpacity, Modal, Pressable } from 'react-native';
import React, { useState } from 'react';
import Svg, { Rect, Line, Path } from "react-native-svg"
import MenuScreenComponent from '../Menu/MenuScreen';

const NewDeviceComponent = ({ navigation }) => {
    const [modalVisible, setModalVisible] = useState(false);

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
                <Text style={styles.headerText}>Adding new</Text>

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
                <View style={{ flex: 1 }}>
                    <View style={styles.imageDiv}>
                        <Image
                            style={{ width: 350, height: 240 }}
                            source={require('../../assets/images/Searching.png')}
                        />
                    </View>
                    <View style={styles.textView}>
                        <Text style={styles.searchText}>Searching...</Text>
                    </View>
                    <View style={{ width: '100%', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row', padding: 20, marginTop: 20, paddingLeft: 25, paddingRight: 30 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }} >
                            <Image
                                style={{ width: 51, height: 51 }}
                                source={require('../../assets/images/citcly.png')}
                            />
                            <View style={{ marginLeft: 20 }}>
                                <Text style={{ color: '#004B84', fontSize: 12, lineHeight: 15 }} >4423:A3EE:994B</Text>
                                <Text style={{ color: '#10BCCE', fontSize: 8, lineHeight: 10 }}>Smart Outlet v2.44</Text>
                            </View>
                        </View>
                        <TouchableOpacity style={styles.blueBottonMedium}>
                            <Text style={{ color: 'white', fontSize: 16, lineHeight: 19 }}>Add</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.inputDiv}>
                        <TextInput
                            style={styles.inputSmall}
                            placeholder='Enter Device Number'
                        />
                        <TouchableOpacity
                            style={styles.blueBottonSmall} >
                            <Svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <Path d="M10.8203 18.3984C6.64063 18.3984 3.20312 15 3.20312 10.7812C3.20312 6.60156 6.60156 3.16406 10.8203 3.16406C15.0391 3.16406 18.4375 6.5625 18.4375 10.7812C18.3984 15 15 18.3984 10.8203 18.3984ZM10.8203 4.29687C7.22656 4.29687 4.29687 7.22656 4.29687 10.8203C4.29687 14.4141 7.22656 17.3437 10.8203 17.3437C14.4141 17.3437 17.3437 14.4141 17.3437 10.8203C17.3047 7.22656 14.375 4.29687 10.8203 4.29687Z" fill="white" />
                                <Path d="M20.9766 21.7969L15.6641 16.5234L16.5234 15.6641L21.7969 20.9766L20.9766 21.7969Z" fill="white" />
                            </Svg>
                        </TouchableOpacity>
                    </View>
                    <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 25 }}>
                        <TouchableOpacity style={styles.blueBotton} >
                            <Text style={styles.blueButtonText}>Manual</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.blueBotton} >
                            <Text style={styles.blueButtonText}>Device setup page</Text>
                        </TouchableOpacity>
                    </View>
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
    headerText: {
        fontSize: 24,
        color: '#004B84',
        lineHeight: 29,
        fontWeight: '400'
    },
    imageDiv: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50
    },
    textView: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    searchText: {
        fontSize: 16,
        color: '#10BCCE',
        lineHeight: 19,
        fontWeight: '400'
    },
    blueBotton: {
        width: '90%',
        height: 40,
        backgroundColor: '#004B84',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: 10
    },
    inputSmall: {
        width: 270,
        height: 40,
        margin: 5,
        borderWidth: 1,
        padding: 10,
        borderColor: '#10BCCE',
        marginRight: 20
    },
    blueBottonSmall: {
        width: 40,
        height: 40,
        backgroundColor: '#004B84',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    blueBottonMedium: {
        width: 60,
        height: 40,
        backgroundColor: '#004B84',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    blueButtonText: {
        color: 'white',
        fontSize: 16,
        lineHeight: 19
    },
    inputDiv: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginRight: 10,
        paddingLeft: 25,
        paddingRight: 35,
        marginTop: 5
    }
})

export default NewDeviceComponent