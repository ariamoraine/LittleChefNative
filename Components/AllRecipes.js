import React, { Component } from 'react';
import {
  Text,
  View,
  Button,
  AsyncStorage,
  TextInput,
} from 'react-native';


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

    //Have to label the function as async if we want to use await.
    async saveData (text) {
      try {
        await AsyncStorage.setItem('recipes', this.state.recipes + text)
      } catch (error) {
        console.log(error)
      }
    }

  render() {
    let recipes = this.state.recipes || " ";
    const { navigate } = this.props.navigation;

    return (
      <View>
        <Text>All your recipes</Text>
        <Text>{`Recipes: ${this.state.recipes}`}</Text>
        {/*
        <View>
          <TextInput
            onChangeText={text => {
                this.setState({
                  textToUpdate: text
                })
            }}
            value={this.state.textToUpdate}
          />
        </View>
        */
        }
        <Text>
          These are all your saved recipes. If you would like to add another one. Click on the button below.
        </Text>
        {
        /*
        <Button
          onPress={() => {
            //since saveData is an async function we need to .then off it to
            //catch errors
            this.saveData(this.state.textToUpdate)
            .then(() => this.fetchData())
            .then(this.setState({textToUpdate: ''}))
            .catch(console.log);
          }}
          title="Save"
        />
        */
        }
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
