import { StyleSheet, Text, View, Image, Pressable, Alert, ScrollView, Button } from 'react-native'
import React from 'react'

const Welcome = ({navigation}) => {
    const TandC = () => {
        Alert.alert('Welcome', 'You are redirect on the Recording Page')
         navigation.navigate('Record')
    }
    return (


        // <View style={{ backgroundColor: 'white', }}>
            <ScrollView >
                <Text style={{ textAlign: 'center', color: 'black', fontWeight: '500', marginTop: 50, fontSize: 25, }}>Welcome to Aisense</Text>

                <View style={{ margin: 20, top: 20, }}>
                    <Image style={styles.ImageAl} source={require('../assets/mic.png')}></Image>
                </View>

                <Text style={{ textAlign: 'center', color: 'black', fontWeight: '500', marginTop: 20, fontSize: 18, }}>" Your Voice Our Technology "</Text>
                <Text style={{ textAlign: 'center', color: 'black', fontSize: 15, margin: 5, padding: 20, }}>" Unleash the power of your voice! Record it, and unlock a comprehensive disease screening analysis. With cutting-edge technology, you can detect potential health issues early on, all through the sound of your own voice. So speak up, and discover the secrets your voice holds for a healthier tomorrow! "</Text>

                <Pressable
                    style={{ top: 10, margin: 10, backgroundColor: '#3855f5', padding: 15, borderRadius: 25, }}
                    onPress={TandC}>
                    <Text style={{ textAlign: 'center', color: 'white', fontWeight: '500' }} >Get Started</Text>
                </Pressable>
                <Text> {"\n"} {"\n"} </Text>
                

            </ScrollView>
        // </View>
    )
}

export default Welcome

const styles = StyleSheet.create({
    ImageAl: {
        width: 350,
        height: 300,
    },
})