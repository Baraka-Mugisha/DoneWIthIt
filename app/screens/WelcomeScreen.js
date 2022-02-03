import React from 'react';
import {
  ImageBackground, StyleSheet, View, StatusBar, Platform, Image, Text
} from 'react-native';

function WelcomeScreen(props) {
  return (
    <ImageBackground
      source={require('../assets/background.jpg')}
      style={styles.background}>
      <View style={styles.logoContainer}>
        <Image source={require('../assets/logo-red.png')} style={styles.logo} />
        <Text>Sell what you don't need</Text>
      </View>
      <View style={styles.login} />
      <View style={styles.registerButton} />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    paddingTop: Platform.OS == "android" && StatusBar.currentHeight || 0,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  login: {
    width: '100%',
    height: 70,
    backgroundColor: "#fc5c65"
  },
  registerButton: {
    width: '100%',
    height: 70,
    backgroundColor: "#4ecdc4"
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoContainer: {
    position: 'absolute',
    top: 70,
    alignItems: 'center'
  }
})
export default WelcomeScreen;