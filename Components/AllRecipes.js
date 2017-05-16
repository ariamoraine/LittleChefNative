import React, { Component } from 'react';
import {
  Text,
  View,
  Button,
  AsyncStorage,
  TextInput,
} from 'react-native';


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
      .then(()=> console.log("I got recipes"))
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
      console.log("Inside saveData func with text ->", text)
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
        <View>
          <TextInput
            onChangeText={text => {
              console.log("RECIPES", this.state.recipes);
              console.log("TextToUpdate", this.state.textToUpdate);
              console.log("In onChange text is ->", text)
                this.setState({
                  textToUpdate: text
                })
            }}
            value={this.state.textToUpdate}
          />
        </View>
        <Text>
          Next time we open it will load the saved data
        </Text>
        <Button
          onPress={() => {
            //since saveData is an async function we need to .then off it to
            //catch errors
            this.saveData(this.state.textToUpdate)
            .then(()=>this.fetchData())
            this.setState({textToUpdate: ''})

          }}
          title="Save"

        />
        <Button
          onPress={() => navigate('CameraPage')}
          title="Camera Page"
        />
      </View>
    );
  }
}
