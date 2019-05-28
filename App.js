import React from 'react';

import {
  createStackNavigator,
  createAppContainer,
} from 'react-navigation';

import HomeScreen from './pages/Home/Home';
import ListaF1 from './pages/ListaF1/ListaF1';


const AppNavigator = createStackNavigator(
  {
    Home: {
    screen: HomeScreen,
    },

    ListaF1: {
      screen: ListaF1,
    }
  },

  {
    initiaRouterName: 'ListaF1',
      defaultNavigationOptions: {
        headerStyle: {
          backgroundColor: '#FF4500',
        },
        headerTintColor: '#ffffff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      },
  }
);

export default createAppContainer(AppNavigator);



