import React, { useContext } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Storija from './src/vendors/storija.json';

const VendorContext = React.createContext({ vendors: [] });

const AppNavigator = createStackNavigator(
  {
    Home: { screen: HomeScreen,  },
    VendorsList: { screen: VendorListScreen },
  },
  {
    initialRouteName: 'Home'
  },
);

const AppContainer = createAppContainer(AppNavigator);

function HomeScreen({ navigation }) {
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

function VendorListScreen() {
  const { vendors } = useContext(VendorContext);

  return (
    <View style={styles.container}>
      {vendors.map((vendor, index) => <Button key={index} title={vendor.data.name} />)}
    </View>
  );
}

export default function App({ vendors }) {
  const vendorContext = useContext(VendorContext);
  vendorContext.vendors = vendors ? vendors : [Storija];
  
  return <AppContainer />;
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
