import React, { Component } from 'react';
import { View, Button, Text, TextInput } from 'react-native';

export default class AddRecipe extends Component {

  constructor (props) {
    super(props);
    this.state = {
      inputText: ''
    };
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput (text) {
    console.log(text);
    this.setState({
      inputText: text
    });
  }

  render () {
    console.log('state text', this.state.inputText);
    return (
      <View>
        <Text>Add a recipe here!</Text>
        <View>
          <TextInput
            onChangeText={this.handleInput}
            value={this.state.textToUpdate}
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
