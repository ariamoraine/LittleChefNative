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
  SingleRecipe: {
    screen: SingleRecipe,
    navigationOptions: {
      title: 'Single Recipe'
    }
  }
});

AppRegistry.registerComponent('littleChef', () => littleChefRouter);
