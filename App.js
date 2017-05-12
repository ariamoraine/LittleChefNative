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
        recipes: ""
      }
    }

    componentDidMount () {
      AsyncStorage.getItem('recipes')
      .then(returnedRecipes => {
        this.setState({'recipes': returnedRecipes})
      })
      .done();
    }

    // getInitialState () {
    //   return {'recipes': " "};
    // }

    saveData (value) {
      AsyncStorage.setItem('recipes', value);
      this.setState({"recipes": this.state.recipes + value});
    }

  render() {
    console.log(this.state.recipes)
    let recipes = this.state.recipes || " ";
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Text>All your recipes</Text>
        <Text>{this.state.recipes}</Text>
        <View>
          <TextInput
            onChangeText={text => this.saveData(text)}
            value=""
          />
        </View>
        <Text>
          Next time we open it will load the saved data
        </Text>
        <Button
          // onPress=saveData()
          onPress={() => navigate('AddRecipe')}
          title="Add a new recipe!"
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
