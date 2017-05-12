import React from 'react';
import {
  AppRegistry,
  Text,
  View,
  Button,
  AsyncStorage,
  TextInput,
} from 'react-native';

import { StackNavigator } from 'react-navigation';

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };

  render() {
    const { navigate } = this.props.navigation;

    return (
      <View>
        <Text>Need a Little Chef?</Text>
        <Button
          onPress={() => navigate('AllRecipes')}
          title="Yes Please!"
        />
      </View>
    );
  }
}

class AllRecipes extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: `Recipes`
  })

    constructor (props) {
      super(props);
      this.state = {
        recipes: "",
        textToUpdate: '',
      }
    }

    async componentDidMount () {
      try {
        const foundRecipes = await AsyncStorage.getItem('recipes');
        if (foundRecipes !== null) {
          console.log("I found these recipes -> ", foundRecipes)
          this.setState({
            recipes: foundRecipes
          })
        }
      } catch (error) {
        console.log(error)
      }
    }

    // getInitialState () {
    //   return {'recipes': " "};
    // }

    async saveData (text) {
      console.log("Inside save data func with text ->", text)
      try {
        await AsyncStorage.setItem('recipes', this.state.textToUpdate)
        this.setState({"recipes": this.state.textToUpdate + value});
      } catch (error) {
        console.log(error)
      }
    }

  render() {
    console.log(this.state.recipes)
    let recipes = this.state.recipes || " ";
    const { navigate } = this.props.navigation;

    return (
      <View>
        <Text>All your recipes</Text>
        <Text>{`Recipes: ${this.state.recipes}`}</Text>
        <View>
          <TextInput
            onChangeText={text => {
              console.log("RECIPES", this.state.recipes);
              console.log("TextToUpdate", this.state.textToUpdate);
              console.log("In onChange text is ->", text)
              if (this.state.textToUpdate === null) {
                console.log('Inside if in onChange')
                this.setState({
                  textToUpdate: text
                })
              } else {
                console.log('Inside else in onChange')
                this.setState({
                  textToUpdate: this.state.textToUpdate += text
                })
              }
            }}
            // value={this.state.textToUpdate}
          />
        </View>
        <Text>
          Next time we open it will load the saved data
        </Text>
        <Button
          onPress={() => {
            console.log("In onpress", this.state.textToUpdate)
            this.saveData(this.state.textToUpdate)
          }}
          title="Save"
          // onPress={() => navigate('AddRecipe')}
          // title="Add a new recipe!"
        />
      </View>
    );
  }
}

class AddRecipe extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Add a recipe'
  })

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
    )
  }
}

const littleChef = StackNavigator({
  Home: { screen: HomeScreen },
  AllRecipes: { screen: AllRecipes},
  AddRecipe: { screen: AddRecipe}
});

AppRegistry.registerComponent('littleChef', () => littleChef);
