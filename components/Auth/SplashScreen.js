import { Button, View, Text, Image, ScrollView, StyleSheet, StatusBar, Dimensions, ActivityIndicator, SafeAreaView } from 'react-native';
import React from 'react';

export default function SplashScreen() {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
            <View style={{ justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                <Image
                    style={{ width: 165, height: 55 }}
                    source={require('../../assets/images/pilot-logo-blue.png')}
                />
                <Image
                    style={{ width: 101, height: 13,marginTop:14 }}
                    source={require('../../assets/images/zis-logo.png')}
                />
            </View>
        </SafeAreaView>
    )
}