import React from 'react';
import { View, Text } from 'react-native';
import styles from '../styles';
import Button from './Button';

export default function VendorMenuScreen({ navigation }) {
  const vendorMenu = navigation.getParam('menu');

  function renderVendorMenu(menu) {
    return menu.items.map((item, index) => (
      // eslint-disable-next-line react/no-array-index-key
      <View key={index} style={styles.row}>
        <Text style={styles.rowItem}>{item.name}</Text>
        <Text style={styles.rowItem}>{item.price}</Text>
        <Button>Add</Button>
      </View>
    ));
  }

  return (
    <View style={styles.items}>
      {renderVendorMenu(vendorMenu)}
    </View>
  );
}

VendorMenuScreen.navigationOptions = ({ navigation }) => ({
  title: `Menu - ${navigation.getParam('title')}`,
});
