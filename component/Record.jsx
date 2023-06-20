import { StyleSheet, Text, View, Button, PermissionsAndroid, ScrollView, Pressable } from 'react-native'
import React, { useState, useEffect } from 'react';
import AudioRecorderPlayer from 'react-native-audio-recorder-player';
import { Audio } from 'expo-av';

const Record = () => {

    // ********************************//
    const [recording, setRecording] = React.useState();
    const [uri, setUri] = React.useState('');
    const [sound, setSound] = useState();

    //   ************************************//

    async function startRecording() {
        try {
            console.log('Requesting permissions..');
            await Audio.requestPermissionsAsync();
            await Audio.setAudioModeAsync({
                allowsRecordingIOS: true,
                playsInSilentModeIOS: true,
            });
            console.log('Starting recording..');
            const recording = new Audio.Recording();
            await recording.prepareToRecordAsync(Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY);
            await recording.startAsync();
            setRecording(recording);
            console.log('Recording started');
        } catch (err) {
            console.error('Failed to start recording', err);
        }
    }

    async function stopRecording() {
        console.log('Stopping recording..');
        setRecording(undefined);
        await recording.stopAndUnloadAsync();
        const uri = recording.getURI();

        setUri(uri); // Store the URI in state
        const { sound } = await recording.createNewLoadedSoundAsync(); // Create a sound object from the recorded file
        setSound(sound); // Store the sound object in state
        async function playSound() {
            console.log('Playing sound..');
            await sound.playAsync(); // Play the recorded sound
        }
        console.log('Recording stopped and stored at', uri);
    }

    async function playSound() {
        console.log('Playing sound..');
        await sound.playAsync(); // Play the recorded sound
    }

    //   **********************************************//
    const [time, setTime] = useState(0);

    // state to check stopwatch running or not
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        let intervalId;
        if (isRunning) {
            // setting time from 0 to 1 every 10 milisecond using javascript setInterval method
            intervalId = setInterval(() => setTime(time + 6), 10);
        }
        return () => clearInterval(intervalId);
    }, [isRunning, time]);

    // Hours calculation
    const hours = Math.floor(time / 360000);

    // Minutes calculation
    const minutes = Math.floor((time % 360000) / 6000);

    // Seconds calculation
    const seconds = Math.floor((time % 6000) / 100);

    // Milliseconds calculation
    const milliseconds = time % 100;

    // Method to start and stop timer
    const startAndStop = () => {
        setIsRunning(!isRunning);
        setTime(0);
    };

    // Method to reset timer back to 0
    const reset = () => {
        setTime(0);
    };


    return (
        <ScrollView>


            <View style={{ margin: 10, padding: 5, }}>
                <Text style={{ margin: 5, fontSize: 20, fontWeight: '900', textAlign: 'center' }}>Start the Recording & Read the Script in Loud</Text>
                <Text style={{ margin: 5, fontSize: 16, fontWeight: '500', textAlign: 'center' }}>(रेकॉर्डिंग सुरू करा आणि मोठ्या आवाजात स्क्रिप्ट वाचा)</Text>
                <View style={{ backgroundColor: '#3855f5', borderRadius: 20, marginTop: 25, margin: 20, }}>
                    <Text style={{ fontSize: 18, fontWeight: '700', textAlign: 'center', color: 'white', marginTop: 10, margin: 20, padding: 15, lineHeight: 30 }}>" आई आई ये इकडे {"\n"}
                        आपण दोघे मिळुन जाऊ तिकडे {"\n"} सुंदर माझे गाव {"\n"} सुंदर माझे घर {"\n"} सगळे मिळून आणखी बनवु आपण त्याला आणखी सुंदर {"\n"} स्वच्छ असेल आपले गाव आणि घर {"\n"} तर आजार आपणहून जाणार दूर {"\n"} तर मग मजा मोठी करू {"\n"} मायेने माझ्या मस्तीने मुलायम करू {"\n"} आपली मजा आणेल रंगत {"\n"} सगळे होऊन जाऊ आनंदी {"\n"} आणि कामात दंग..!"</Text>
                </View>

                <View style={styles.container}>
                    <View style={{justifyContent:'center', margin:10,}}>
                        <Text style={{textAlign:'center', fontSize:20}}>
                           {minutes.toString().padStart(2, "0")}:
                            {seconds.toString().padStart(2, "0")}:
                            {milliseconds.toString().padStart(2, "0")}
                        </Text>
                    </View>
                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                        <Pressable
                            style={{ margin: 5, backgroundColor: '#ff4136', padding: 12, borderRadius: 5, }}
                            onPress={() => {
                                startAndStop();
                                startRecording();
                            }}>
                            <Text style={{ textAlign: 'center', color: 'white', fontWeight: '500', }}>Start</Text>
                        </Pressable>
                        <Pressable
                            style={{ margin: 5, backgroundColor: '#ff4136', padding: 12, borderRadius: 5, marginLeft: 20 }}
                            onPress={() => {
                                stopRecording();
                                startAndStop();
                            }}>
                            <Text style={{ textAlign: 'center', color: 'white', fontWeight: '500', }}>Stop </Text>
                        </Pressable>
                    </View>
                    {/* <Button
                        title={'stop Recording'}
                        onPress={stopRecording}
                    /> */}



                    {sound && (
                        <Pressable
                            style={{ margin: 15, backgroundColor: '#3855f5', padding: 12, borderRadius: 5, marginTop: 20 }}
                            onPress={playSound}>
                            <Text style={{ textAlign: 'center', color: 'white', fontWeight: '500', }}>Play </Text>
                        </Pressable>
                    )}
                    <View style={{ margin: 20, backgroundColor: 'black', color: 'white' }}>

                        {uri ? (
                            <Text style={{ color: 'white', padding: 5 }}>Recorded File: {uri}</Text>
                        ) : null}
                    </View>
                </View>

            </View>
        </ScrollView>


    )
}

export default Record

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        // justifyContent: 'space-around',
        backgroundColor: '#ecf0f1',
        padding: 10,
    },
})