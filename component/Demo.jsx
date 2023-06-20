import React, { useState, useEffect } from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';
import { Audio } from 'expo-av';

const Demo = () => {
  const [recording, setRecording] = React.useState();
  const [uri, setUri] = React.useState('');
  const [sound, setSound] = useState();

  

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


  return (
    <View style={styles.container}>
      <Button
        title={recording ? 'Stop Recording' : 'Start Recording'}
        onPress={recording ? stopRecording : startRecording}
      />
      {uri ? (
        <Text style={styles.text}>Recorded File: {uri}</Text>
      ) : null}

      {sound && (
        <Button title="Play Sound" onPress={playSound} />
      )}
    </View>
  );
};

export default Demo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 10,
  },
});
