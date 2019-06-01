import React, { useContext } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import VendorContext from '../VendorContext';
import styles from '../styles';

export default function HomeScreen({ navigation }) {
  const { vendors } = useContext(VendorContext);

  function openVendorMenu(title, menu) {
    navigation.navigate('VendorMenu', { title, menu });
  }

  return (
    <View style={styles.items}>
      <Text style={styles.subtitle}>Choose a vendor to create order</Text>
      {vendors.map((vendor, index) => (
        /* eslint-disable-next-line react/no-array-index-key */
        <Vendor key={index} vendorData={vendor.data} onPress={openVendorMenu} />
      ))}
    </View>
  );
}

function Vendor({ vendorData, onPress }) {
  function onButtonPress() {
    onPress(vendorData.name, vendorData.menu);
  }

  const testId = `createOrder ${vendorData.name}`;

  return (
    <TouchableOpacity
      testID={testId}
      style={{ ...styles.vendorRow }}
      onPress={onButtonPress}
    >
      <Text style={styles.rowItem}>
        <Text>{vendorData.name}</Text>
        {'\n'}
        <Text style={{ color: 'grey', fontWeight: 'normal', fontSize: 15 }}>
          {vendorData.phone}
        </Text>
      </Text>
      <Text style={styles.rowArrow}>{'>'}</Text>
    </TouchableOpacity>
  );
}

HomeScreen.navigationOptions = {
  title: 'Zhderilla',
};
