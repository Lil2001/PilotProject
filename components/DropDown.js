import { Button, View, Text, Image, ScrollView, StyleSheet, StatusBar, Dimensions, ActivityIndicator, SafeAreaView, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';


const DropDown = ({
    data = [],
    value = {},
    onSelect = () => {

    }
}) => {
    // console.log(!!value, 'selected');
    const [showOption, setShowOption] = useState(false)

    const onSelectItem = (res) => {
        setShowOption(false)
        onSelect(res)
    }



    return (
        <View>
            <TouchableOpacity
                style={styles.dropdownStyle}
                onPress={() => setShowOption(!showOption)}
            >
                {!!value ?
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                        <View style={{ flexDirection: 'row', width: 100, justifyContent: 'space-evenly', alignItems: 'center' }}>
                            <Image
                                style={{ width: 26, height: 17 }}
                                source={value?.image} />

                            <Text style={styles.textColor}> {value?.language} </Text>

                        </View>
                        <Image
                            style={{ width: 14, height: 8, transform: [{ rotate: showOption ? '180deg' : '0deg' }] }}
                            source={require('../assets/images/Fill-35.png')} />
                    </View>
                    :
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                        <View style={{ flexDirection: 'row', width: 100, justifyContent: 'space-evenly', alignItems: 'center' }}>
                            <Image
                                style={{ width: 26, height: 17 }}
                                source={require('../assets/images/engflag.png')} />
                            <Text style={styles.textColor}> {data[0].language} </Text>

                        </View>
                        <Image
                            style={{ width: 14, height: 8, transform: [{ rotate: showOption ? '180deg' : '0deg' }] }}
                            source={require('../assets/images/Fill-35.png')} />
                    </View>

                }
            </TouchableOpacity>
            {showOption && (
                <View style={styles.dropbox}>
                    {data.map((res, index) => {
                        return (
                            <TouchableOpacity
                                onPress={() => onSelectItem(res)}
                                key={index}
                                style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%', padding: 10 }}
                            >
                                {
                                    res.language !== value?.language &&
                                    (
                                        <View style={{ flexDirection: 'row', width: 100, justifyContent: 'space-evenly', alignItems: 'center' }}>
                                            <Image
                                                key={index}
                                                style={{ width: 26, height: 17 }}
                                                source={res.image} />
                                            <Text style={styles.textColor}> {res.language} </Text>
                                        </View>
                                    )
                                }
                            </TouchableOpacity>
                        )
                    })}
                </View>)}
        </View>
    )
}


const styles = StyleSheet.create({
    dropdownStyle: {
        width: 245,
        height: 40,
        backgroundColor: '#004B84',
        marginTop: 102,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        position: 'relative'
    },
    textColor: {
        fontSize: 16,
        lineHeight: 20,
        color: '#FFFFFF'
    },
    dropbox: {
        position: 'absolute',
        top: '100%',
        width: 246,
        height: 100,
        backgroundColor: '#004B84',
        zIndex: 1,
        borderWidth: 1,
        borderColor: 'white'
    }
})

export default DropDown

