import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Text,
  View,
  Button,
  AsyncStorage,
  TextInput,
} from 'react-native';
import { getRecipes } from '../actions'


//this component should get all the recipes from the DB and display a thumbnail.
//from each recipe you should be able to click on it and go to a single recipe component
export default class AllRecipes extends Component {

    constructor (props) {
      super(props);
      this.state = {
        recipes: '',
        textToUpdate: '',
      }
    }

    componentDidMount () {
      this.fetchData()
      .then(() => console.log("I got recipes"))
      .catch(console.log)
    }

    async fetchData () {
      const foundRecipes = await AsyncStorage.getItem('recipes');
      try {
        this.setState({
          recipes: foundRecipes
        });
      } catch (err) {
        console.log(err)
      }
    }

  render() {
    let recipes = this.state.recipes || " ";
    const { navigate } = this.props.navigation;

    return (
      <View>
        <Text>All your recipes</Text>
        <Text>{`Recipes: ${this.state.recipes}`}</Text>
        <Text>
          These are all your saved recipes. If you would like to add another one. Click on the button below.
        </Text>
        <Button
          onPress={() => navigate('AddRecipe')}
          title="Add a new Recipe?"
        />
        {/*// <Button
        //   onPress={() => navigate('CameraPage')}
        //   title="Camera Page"
        // />*/}
      </View>
    );
  }
}

// export default connect(mapStateToProps, mapDispatchToProps)(AllRecipes)
