import React from 'react';
import { Platform } from 'react-native';
import { TabNavigator } from 'react-navigation';
import { SimpleLineIcons } from '@expo/vector-icons';

import ScannerScreen from '../screens/scannerScreen';
import AccountScreen from '../screens/accountScreen';


const EventsTabIcon = ({ tintColor }) => (
  <SimpleLineIcons
    name="camera"
    color={tintColor}
    size={Platform.OS === 'ios' ? 22 : 23}
  />
);

const AccountTabIcon = ({ tintColor }) => (
  <SimpleLineIcons
    name="wallet"
    color={tintColor}
    size={Platform.OS === 'ios' ? 22 : 23}
  />
);

export default TabNavigator({
  home: {
    screen: ScannerScreen,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: EventsTabIcon,
    },
  },
  account: {
    screen: AccountScreen,
    navigationOptions: {
      tabBarLabel: 'Balance',
      tabBarIcon: AccountTabIcon,
    },
  },
}, {
  initialRouteName: 'home',
  tabBarPosition: 'bottom',
  animationEnabled: Platform.OS !== 'ios',
  swipeEnabled: Platform.OS !== 'ios',
  tabBarOptions: {
    showIcon: true,
    showLabel: true,
    activeTintColor: '#E8787B',
    inactiveTintColor: '#999',
    style: {
      backgroundColor: '#FFF',
      padding: Platform.OS === 'ios' ? 5 : 0,
    },
    indicatorStyle: {
      backgroundColor: '#FFF',
    },
    labelStyle: {
      fontSize: 12,
    },
  },
});