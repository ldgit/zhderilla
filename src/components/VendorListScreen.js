import React, { useContext } from 'react';
import { Button, View } from 'react-native';
import VendorContext from '../VendorContext';
import styles from '../styles';

export default function VendorListScreen({ navigation }) {
  const { vendors } = useContext(VendorContext);

  function openVendorMenu(menu) {
    navigation.navigate('VendorMenu', { menu });
  }

  return (
    <View style={styles.container}>
      {/* eslint-disable-next-line react/no-array-index-key */}
      {vendors.map((vendor, index) => <Vendor key={index} vendorData={vendor.data} onPress={openVendorMenu} />)}
    </View>
  );
}

function Vendor({ vendorData, onPress }) {
  function onButtonPress() {
    onPress(vendorData.menu);
  }

  return <Button title={vendorData.name} onPress={onButtonPress} />;
}
