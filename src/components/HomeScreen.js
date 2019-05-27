import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import VendorContext from '../VendorContext';
import Button from './Button';
import styles from '../styles';

export default function HomeScreen({ navigation }) {
  const { vendors } = useContext(VendorContext);

  function openVendorMenu(title, menu) {
    navigation.navigate('VendorMenu', { title, menu });
  }

  return (
    <View style={styles.items}>
      {/* eslint-disable-next-line react/no-array-index-key */}
      {vendors.map((vendor, index) => <Vendor key={index} vendorData={vendor.data} onPress={openVendorMenu} />)}
    </View>
  );
}

function Vendor({ vendorData, onPress }) {
  function onButtonPress() {
    onPress(vendorData.name, vendorData.menu);
  }

  const testId = `createOrder ${vendorData.name}`;

  return (
    <View style={styles.row}>
      <Text style={styles.rowItem}>{vendorData.name}</Text>
      <Button onPress={onButtonPress} testID={testId}>Create order</Button>
    </View>
  );
}

HomeScreen.navigationOptions = {
  title: 'Zhderilla',
};
