import React from 'react';
import { AppRegistry } from 'react-native';
import { StackNavigator } from 'react-navigation';

import SingleRecipe from './Components/SingleRecipe';
import AllRecipes from './Components/AllRecipes';
import AddRecipe from './Components/AddRecipe';
import HomeScreen from './Components';

const littleChefRouter = StackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      header: null
    }
   },
  AllRecipes: {
    screen: AllRecipes,
    navigationOptions: {
      title: 'All recipes',
      header: null
    }
  },
  AddRecipe: {
    screen: AddRecipe,
    navigationOptions: {
      title: 'Add a recipe',
      header: null
    }
  },
  SingleRecipe: {
    screen: SingleRecipe,
    navigationOptions: {
      title: 'Single Recipe',
      header: null
    }
  }
});

AppRegistry.registerComponent('littleChef', () => littleChefRouter);
