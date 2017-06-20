import React from 'react';
import { AppRegistry } from 'react-native';
import { StackNavigator } from 'react-navigation';

import CameraPage from './Components/CameraPage';
import AllRecipes from './Components/AllRecipes';
import AddRecipe from './Components/AddRecipe';
import Home from './Containers';

const littleChefRouter = StackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      title: 'Welcome to LittleChef!'
    }
   },
  AllRecipes: {
    screen: AllRecipes,
    navigationOptions: {
      title: 'All recipes'
    }
  },
  AddRecipe: {
    screen: AddRecipe,
    navigationOptions: {
      title: 'Add a recipe'
    }
  },
  CameraPage: {
    screen: CameraPage,
    navigationOptions: {
      title: 'Camera Page'
    }
  }
});

AppRegistry.registerComponent('littleChef', () => littleChefRouter);
