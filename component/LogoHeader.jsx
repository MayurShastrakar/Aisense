import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

const LogoHeader = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/HLogo.png')} style={styles.logo} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor:"blue"
  },
  logo: {
    width: 200, // Adjust the width and height according to your logo size
    height: 100,
    marginTop:30,
  },
});

export default LogoHeader;
