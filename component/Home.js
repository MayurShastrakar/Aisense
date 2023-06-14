import { StyleSheet, Text, View, FlatList, Alert, Modal, Pressable, ScrollView, Image } from 'react-native'
import CheckBox from '@react-native-community/checkbox';
import React, { useState } from 'react';



const Home = () => {


    const [modalVisible, setModalVisible] = useState(false);
    const [agreed, setAgreed] = useState(false);
    var accept = false;

    const TandC = () => {
        console.log("Welcome");
        Alert.alert("Welcome to Aisense you'r redirect in Login page..!!")
       
    }

    const handleAgree = () => {
    
        setAgreed(true);
        setModalVisible(!modalVisible);
    };

   

    return (




        <View style={styles.container} >
            {/* <ScrollView> */}
                <View style={styles.top}>
                    <Text style={styles.consentH}> Important Discloser & User Consent</Text>
                    <Text style={styles.consentO}>Before we proceed, I would like to confirm that you understand and agree to the terms of
                        <Text style={{ color: 'black', fontSize: 13, fontWeight: 'bold', }} > Voice Collection For The Disease Screening. </Text>Your participation is completely voluntary, and you have the right to decline or withdraw your consent at any time without any negative consequences.</Text>
                </View>
                <View style={styles.mid}>
                    <Text style={{ color: 'black', fontSize: 13, fontWeight: 'bold', }} >By continuing with this activity and providing your verbal consent, you explicitly acknowledge and agree to the following:- </Text>
                    {/* <Text style={{ color: 'black', fontSize: 14, }}> • Your voice will be recorded and used for the specified purpose.</Text>
                <Text style={{ color: 'black', fontSize: 14, }}> • The recordings may be stored, processed, and potentially shared as described.</Text>
                <Text style={{ color: 'black', fontSize: 14, }}> • Your personal information and identity will be handled confidentially and in accordance with applicable privacy laws.</Text> */}
                </View>
                {/* <ScrollView horizontal={true} style={{ width: "100%" }}> */}
                <View style={{ paddingLeft: 12 }}>
                    <FlatList
                        data={[
                            { key: 'Your voice will be recorded and used for the specified purpose.' },
                            { key: 'The recordings may be stored, processed, and potentially shared as described.' },
                            { key: 'Your personal information and identity will be handled confidentially and in accordance with applicable privacy laws.' },

                        ]}
                        renderItem={({ item }) => {
                            return (
                                <View style={{ marginBottom: 0.5 }}>
                                    <Text style={{ padding: 2, fontSize: 15, marginRight: 2 }}> •
                                        <Text style={{ fontSize: 14 }}>  {item.key}</Text>
                                    </Text>
                                </View>
                            );
                        }}
                    />
                </View>
                {/* </ScrollView> */}
                <View style={{ margin: 5, padding: 5, }}>
                    <Text style={{ color: 'black', fontSize: 13, fontWeight: '500', }}>If you have any questions or concerns, please don't hesitate to ask. However, if you are comfortable with the terms and would like to proceed, please indicate your agreement by Terms and Conditions.</Text>

                    <Pressable
                        onPress={() => setModalVisible(true)}>
                        <Text style={{ color: 'blue', fontSize: 13, fontWeight: '500', marginTop: 5, }}>Terms & Conditions.* <Text style={{ color: 'red', fontSize: 9, }}>(You need to Agreed Terms & Condition  for further process)</Text></Text>

                    </Pressable>
                </View>

                <View style={styles.TandC}>
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={modalVisible}
                        onRequestClose={() => {
                            setModalVisible(!modalVisible);
                        }}>
                        <View style={styles.modalView}>
                            {/* <ScrollView> */}


                            <Text style={{ color: 'black', fontSize: 14, fontWeight: '500', color: 'red', marginBottom: 15, }}>Please read these terms and conditions carefully before using our Voice Collection and Disease Screening App ("Aisense"). By accessing or using the App, you agree to be bound by these terms and conditions. If you do not agree with any part of these terms and conditions, you should not use the App.</Text>

                            <FlatList
                                data={[
                                    { key: 'The App is designed to collect voice samples for disease screening and analysis purposes. It aims to provide users with an initial assessment and general information regarding potential health conditions based on their voice patterns. The App is not a substitute for professional medical advice, diagnosis, or treatment.' },
                                    { key: 'A Data Collection By using the App, you consent to the collection, storage, and processing of your voice samples and related data for disease screening and research purposes. Your personal information, such as name and contact details, may also be collected, but it will be kept confidential and anonymized during analysis.' },
                                    { key: 'Collected data may be used for statistical analysis, research, and to improve the accuracy and effectiveness of the App. Aggregated and anonymized data may be shared with third parties for research purposes, but your identity will remain protected.' },
                                    { key: 'We take data security seriously and implement reasonable measures to protect your information. However, please understand that no data transmission or storage system can be guaranteed to be 100% secure, and we cannot guarantee the security of any information you transmit to us.' },
                                    // { key: 'The App is disease screening assessment is based on voice analysis algorithms and patterns, but it does not provide a definitive diagnosis. The results are for informational purposes only and should not be considered a substitute for professional medical advice.' },
                                    // { key: 'You acknowledge that the App is results are not guaranteed to be accurate or complete. You are solely responsible for interpreting and using the information provided by the App. Consult a qualified healthcare professional for an accurate diagnosis and medical advice.' },


                                ]}
                                renderItem={({ item }) => {
                                    return (
                                        <View style={{ marginBottom: 0.5 }}>
                                            <Text style={{ padding: 2, fontSize: 20, marginRight: 2 }}> •
                                                <Text style={{ fontSize: 16 }}>  {item.key}</Text>
                                            </Text>
                                        </View>
                                    );
                                }}
                            />

                            {/* <Text style={{ padding: 5, fontSize: 20, marginRight: 2 }}> •
                                    <Text style={{ fontSize: 16 }}>  The App is designed to collect voice samples for disease screening and analysis purposes. It aims to provide users with an initial assessment and general information regarding potential health conditions based on their voice patterns. The App is not a substitute for professional medical advice, diagnosis, or treatment.</Text>

                                </Text> */}

                            {/* <Text style={{ padding: 5, fontSize: 20, marginRight: 2 }}> •
                                    <Text style={{ fontSize: 16 }}>  A Data Collection By using the App, you consent to the collection, storage, and processing of your voice samples and related data for disease screening and research purposes. Your personal information, such as name and contact details, may also be collected, but it will be kept confidential and anonymized during analysis.</Text>

                                </Text>

                                <Text style={{ padding: 5, fontSize: 20, marginRight: 2 }}> •
                                    <Text style={{ fontSize: 16 }}>  Collected data may be used for statistical analysis, research, and to improve the accuracy and effectiveness of the App. Aggregated and anonymized data may be shared with third parties for research purposes, but your identity will remain protected.</Text>

                                </Text>

                                <Text style={{ padding: 5, fontSize: 20, marginRight: 2 }}> •
                                    <Text style={{ fontSize: 16 }}>  We take data security seriously and implement reasonable measures to protect your information. However, please understand that no data transmission or storage system can be guaranteed to be 100% secure, and we cannot guarantee the security of any information you transmit to us.</Text>

                                </Text>

                                <Text style={{ padding: 5, fontSize: 20, marginRight: 2 }}> •
                                    <Text style={{ fontSize: 16 }}> The App is disease screening assessment is based on voice analysis algorithms and patterns, but it does not provide a definitive diagnosis. The results are for informational purposes only and should not be considered a substitute for professional medical advice.</Text>

                                </Text>

                                <Text style={{ padding: 5, fontSize: 20, marginRight: 2 }}> •
                                    <Text style={{ fontSize: 16 }}> You acknowledge that the App is results are not guaranteed to be accurate or complete. You are solely responsible for interpreting and using the information provided by the App. Consult a qualified healthcare professional for an accurate diagnosis and medical advice.</Text>

                                </Text> */}

                            <Pressable
                                style={{ margin: 10, backgroundColor: 'blue', padding: 10, borderRadius: 20, }}
                                onPress={handleAgree}>
                                <Text style={{ textAlign: 'center', color: 'white', fontWeight: '500' }}>I Accept The Terms And Conditions</Text>
                            </Pressable>
                            {/* </ScrollView> */}
                        </View>
                    </Modal>

                </View>
                {/* <ScrollView > */}
                <Modal
                    transparent={false}
                    visible={agreed}
                    onRequestClose={() => {
                        setModalVisible(!agreed);
                    }}>
                    <Text style={{ textAlign: 'center', color: 'black', fontWeight: '500', marginTop: 50, fontSize: 25, }}>Welcome to Aisense</Text>

                    <View style={{ margin: 20, top: 20, }}>
                        <Image style={styles.ImageAl} source={require('../assets/mic.png')}></Image>
                    </View>

                    <Text style={{ textAlign: 'center', color: 'black', fontWeight: '500', marginTop: 20, fontSize: 18, }}>" Your Voice Our Technology "</Text>
                    <Text style={{ textAlign: 'center', color: 'black', fontSize: 15, margin: 5, padding: 20, }}>" Unleash the power of your voice! Record it, and unlock a comprehensive disease screening analysis. With cutting-edge technology, you can detect potential health issues early on, all through the sound of your own voice. So speak up, and discover the secrets your voice holds for a healthier tomorrow! "</Text>

                    <Pressable
                        style={{ top: 100, margin: 10, backgroundColor: 'blue', padding: 15, borderRadius: 25, }}
                        onPress={TandC}>
                        <Text style={{ textAlign: 'center', color: 'white', fontWeight: '500' }}>Get Started</Text>
                    </Pressable>
                </Modal>
                {/* </ScrollView> */}
                <View style={styles.ImageV}>
                    <Image style={{
                        width: 350,
                        height: 200,
                    }} source={require('../assets/Positive.png')}></Image>
                </View>
                <Pressable
                    style={{ margin: 10, backgroundColor: '#f56738', padding: 10, borderRadius: 20, }}
                    onPress={handleAgree}>
                    <Text style={{ textAlign: 'center', color: 'white', fontWeight: '500' }}>I Accept The Terms And Conditions</Text>
                </Pressable>
            {/* </ScrollView> */}
        </View>
    )
}

// <CheckBox
// disabled={false}
// value={toggleCheckBox}
// onValueChange={(newValue) => setToggleCheckBox(newValue)}
// />
export default Home

const styles = StyleSheet.create({

    container: {
        margin: 5,
    },
    top: {
        margin: 5,
        padding: 10,
        backgroundColor: '#89c0fa',
        borderRadius: 20,
    },
    mid: {
        padding: 8,
    },
    ImageAl: {
        width: 350,
        height: 300,
    },
    ImageV: {
        borderColor: 'red',
        margin: 10,
        padding: 8,
        backgroundColor: '#3855f5',
        borderRadius: 30,
    },
    consentO: {
        fontSize: 14,
        // fontFamily: 'arial',
    },
    consentH: {
        fontSize: 15,
        textAlign: 'center',
        marginBottom: 10,
        fontWeight: 'bold',

    },

    // ******
    modalView: {
        margin: 8,
        marginTop: 65,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 13,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 1.55,
        shadowRadius: 8,
        elevation: 20,
    },
    GetStart: {
        marginTop: 50,
    }
    // button: {
    //     borderRadius: 20,
    //     padding: 10,
    //     elevation: 2,
    // },
    // buttonOpen: {
    //     backgroundColor: '#F194FF',
    // },
    // buttonClose: {
    //     backgroundColor: '#2196F3',
    // },
    // textStyle: {
    //     color: 'white',
    //     fontWeight: 'bold',
    //     textAlign: 'center',
    // },
    // modalText: {
    //     marginBottom: 15,
    //     textAlign: 'center',
    // },
})