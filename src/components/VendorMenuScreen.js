import React from 'react';
import { View, Text } from 'react-native';
import styles from '../styles';
import Button from './Button';

export default function VendorMenuScreen({ navigation }) {
  const vendorMenu = navigation.getParam('menu');

  function renderVendorMenu(menu) {
    function addItemToOrder(item) {
      navigation.navigate('Condiments', { condiments: menu.condiments, item });
    }

    return menu.items.map((item, index) => (
      <MenuItemRow
        item={item}
        // eslint-disable-next-line react/no-array-index-key
        key={index}
        style={styles.row}
        onAddButtonPress={addItemToOrder}
      />
    ));
  }

  return <View style={styles.items}>{renderVendorMenu(vendorMenu)}</View>;
}

function MenuItemRow({ item, onAddButtonPress }) {
  const addMenuItem = () => onAddButtonPress(item);

  return (
    <View style={styles.row}>
      <Text style={styles.rowItem}>{item.name}</Text>
      <Text style={styles.rowItem}>{item.price}</Text>
      <Button onPress={addMenuItem} testID={`add ${item.name}`}>
        Add
      </Button>
    </View>
  );
}

VendorMenuScreen.navigationOptions = ({ navigation }) => ({
  title: `Menu - ${navigation.getParam('title')}`,
});
