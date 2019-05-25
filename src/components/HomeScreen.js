import React from 'react';
import { Button, Text, View } from 'react-native';
import styles from '../styles';

export default function HomeScreen({ navigation }) {
  function createOrder() {
    navigation.navigate('VendorsList');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Welcome to Zhderilla!</Text>
      <Button title="Create order" onPress={createOrder} />
    </View>
  );
}
