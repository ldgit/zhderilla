import React, { useContext } from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Storija from './src/vendors/storija.json';
import HomeScreen from './src/components/HomeScreen';
import VendorListScreen from './src/components/VendorListScreen';
import VendorContext from './src/VendorContext';

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

export default function App({ vendors }) {
  const vendorContext = useContext(VendorContext);
  vendorContext.vendors = vendors ? vendors : [Storija];
  
  return <AppContainer />;
}
