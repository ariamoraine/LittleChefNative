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
      allIngredients: [],
      currentIngredient: '',
      directions: '',
      inputText: ''
    };
    this.handleInput = this.handleInput.bind(this);
  }

  addIngredientButton (ingredient) {
    //this button is called when user wants to add another ingredient to
    //their recipe
    //it takes the current ingredient,
    //pushes that into the allIngredient array
    //clears the current ingredient so they can add more if wanted.
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
        {/* Title input area */}
        <View
          style={styles.lines}>
          <TextInput
            placeholder="Title"
            onChangeText={(text) => this.handleInput(text, "title")}
            value={this.state.title}
          />
        </View>

        {/* Ingredient input area */}
        <View
          style={styles.lines}>
          <Text>Ingredients :</Text>
          <TextInput
            onChangeText={(ingredient) => this.handleInput(ingredient, "ingredients")}
            value={this.state.ingredients}
          />
        </View>

        {/* Directions input area */}
        <View
          style={styles.lines}>
          <Text>Directions :</Text>
          <TextInput
            onChangeText={(text) => this.handleInput(text, "directions")}
            value={this.state.directions}
            multiline={true}
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
