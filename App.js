import Constants from 'expo-constants';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import CardList from "./components/CardList";

export default function App() {
  
  const items = [
    { id: 0, author: 'Bob Ross' },
    { id: 1, author: 'Chuck Norris' },
  ];
  
  return (
    <View style={styles.container}>
      <CardList items={items} />
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
