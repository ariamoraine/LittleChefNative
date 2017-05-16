import React, { Component } from 'react';
import { View, Button, Text } from 'react-native';

export default class AddRecipe extends Component {

  render () {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Text>Add a recipe here!</Text>
        <Button
          onPress={() => navigate('AllRecipes')}
          title="Save and add"
        />
      </View>
    );
  }
}
