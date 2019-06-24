import React from 'react';

import {
  createStackNavigator,
  createAppContainer,
} from 'react-navigation';


import Home from './pages/Home/Home';
import ListaF1 from './pages/ListaF1/ListaF1';
import Races from './pages/Races/races';
import Race from './pages/Race/race';
import Drivers from './pages/Drivers'
import Driver from './pages/Driver/Driver';
import Categories from './components/Categories'


const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: Home,
    },

    ListaF1: {
      screen: ListaF1,
    },

    Races: {
      screen: Races,
    },

    Race: {
      screen: Race,
    },

    Driver: {
      screen: Driver,
    },

    Drivers: {
      screen: Drivers,
    },
    Categories: {
      screen: Categories
    }

  },


  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#000000',
      },
      headerTintColor: '#ffffff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  }
);

export default createAppContainer(AppNavigator);



