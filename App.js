import React from 'react';
import {
  AppRegistry,
  Text,
  View,
  Button,
  AsyncStorage,
  TextInput,
  Dimensions
} from 'react-native';
import Camera from 'react-native-camera';
import { StackNavigator } from 'react-navigation';

const styles = {
  preview: {
   flex: 1,
   justifyContent: 'flex-end',
   alignItems: 'center',
   height: Dimensions.get('window').height,
   width: Dimensions.get('window').width
 },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    color: '#000',
    padding: 10,
    margin: 40
  }
}

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
      // .then(results => {
      //     console.log("I found these recipes -> ", results)
      // })
      // .catch(console.log);
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
          // onPress={() => navigate('AddRecipe')}
          // title="Add a new recipe!"

        />
        <Button
          onPress={() => navigate('CameraPage')}
          title="Camera Page"
        />
      </View>
    );
  }
}

class CameraPage extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Camera Page'
  })

  takePicture() {
    this.camera.capture()
    .then(data => console.log(data))
    .catch(err => console.error(err))
  }

  render () {
    const { navigate } = this.props.navigation;
    return (
      <Camera
        ref={(cam) => {
          this.camera = cam;
        }}
        style={styles.preview}
        aspect={Camera.constants.Aspect.fill}>
        <Text style={styles.capture} onPress={
          this.takePicture.bind(this)}>[CAPTURE]</Text>
      </Camera>
    )
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
  AddRecipe: { screen: AddRecipe},
  CameraPage: { screen: CameraPage}
});

AppRegistry.registerComponent('littleChef', () => littleChef);
