import React, { useContext } from 'react';
import { Button, View } from 'react-native';
import VendorContext from '../VendorContext';
import styles from '../styles';

export default function VendorListScreen() {
  const { vendors } = useContext(VendorContext);

  return (
    <View style={styles.container}>
      {vendors.map((vendor, index) => <Button key={index} title={vendor.data.name} />)}
    </View>
  );
}
