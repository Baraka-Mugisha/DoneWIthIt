import React from 'react';
import Constants from 'expo-constants';
import { SafeAreaView, StyleSheet } from 'react-native';
import { Children } from 'react/cjs/react.production.min';

function Screen({ children }) {
  return (
    <SafeAreaView style={styles.screen}>{children}</SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.statusBarHeight
  }
});

export default Screen;
