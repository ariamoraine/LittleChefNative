import React, { Component } from 'react';
import { View, Button, Text, TextInput, StyleSheet} from 'react-native';

  const styles = StyleSheet.create({
    lines: {
      borderTopWidth: 1,
      borderBottomWidth: 1,
      borderColor: 'black',
      width: 400,
    }
  })

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
    console.log('Text, type', text, type);

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
        <View
          style={styles.lines}>
          <Text>Title :</Text>
          <TextInput
            placeholder=""
            onChangeText={(text) => this.handleInput(text, "title")}
            value={this.state.title}
          />
        </View>
        <View
          style={styles.lines}>
          <Text>Ingredients :</Text>
          <TextInput
            onChangeText={(ingredient) => this.handleInput(ingredient, "ingredients")}
            value={this.state.ingredients}
          />
        </View>
        <View
          style={styles.lines}>
          <Text>Directions :</Text>
          <TextInput
            onChangeText={(text) => this.handleInput(text, "directions")}
            value={this.state.directions}
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
