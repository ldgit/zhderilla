import React from 'react';
import {
  View,
  Text,
  Switch,
  TouchableOpacity,
} from 'react-native';
import styles from '../styles';

export default function CondimentsScreen({ navigation }) {
  const condiments = navigation.getParam('condiments');

  function toggleCondiment() {
  }

  return (
    <View style={{ flex: 1 /* Needed so user can press on TouchableOpacity  */ }}>
      <Text style={styles.subtitle}>Choose condiments:</Text>
      <View style={styles.items}>
        {condiments.map(
          // eslint-disable-next-line react/no-array-index-key
          (condiment, index) => <CondimentCheckbox key={index} onPress={toggleCondiment} condiment={condiment} />,
        )}
      </View>
    </View>
  );
}

function CondimentCheckbox({ onPress, condiment }) {
  return (
    <TouchableOpacity style={styles.condimentRow} onPress={onPress}>
      <Text style={styles.condimentDescription}>{condiment.name}</Text>
      <Switch style={styles.condimentCheckbox} value="true" />
    </TouchableOpacity>
  );
}

CondimentsScreen.navigationOptions = ({ navigation }) => ({
  title: `${navigation.getParam('item').name}`,
});
