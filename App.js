import Constants from 'expo-constants';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AuthorRow from "./components/AuthorRow";

export default function App() {
  return (
    <View style={styles.container}>
      <AuthorRow linkText={'Comments'} fullName={'First Last'} onPressLinkText={() => console.log('Pressed Link!!')} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch'
  },
});
