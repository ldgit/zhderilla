import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  function createOrder() {
  }

  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Welcome to Zhderilla!</Text>
      <Button title="Create order" onPress={createOrder} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});
