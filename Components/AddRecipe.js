import React, { Component } from 'react';
import { View, Button, Text, TextInput } from 'react-native';

export default class AddRecipe extends Component {

  constructor (props) {
    super(props);
    this.state = {
      title: '',
      ingredients: [],
      directions: '',
      inputText: ''
    };
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput (text, type) {
    console.log(text);
    console.log(type)
    this.setState({
      [type]: text
    });
  }

  render () {
    console.log('state text', this.state);
    console.log('state. text to update', this.state.textToUpdate)
    return (
      <View>
        <Text>Add a recipe here!</Text>
        <View>
          <TextInput
            onChangeText={(text) => this.handleInput(text, "title")}
            value={this.state.title}
          />
        </View>
        <Button
          onPress={() => this.props.navigation.navigate('AllRecipes')}
          title="Save and add"
        />
      </View>
    );
  }
}
