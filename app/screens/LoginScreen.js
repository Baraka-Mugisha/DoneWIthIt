import React from 'react';
import { Image, StyleSheet } from 'react-native';
import Screen from '../components/Screen';

function LoginScreen({ props }) {
  return (
    <Screen>
      <Image source={require("../assets/logo-red.png")} style={StyleSheet.logo} />
    </Screen>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: 80,
    height: 80,
    alignContent: 'center',
    marginTop: 50,
    marginBottom: 20
  }
});

export default LoginScreen;
