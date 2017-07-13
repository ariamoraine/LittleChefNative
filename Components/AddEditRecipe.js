import React, { Component } from 'react';
import {
  View,
  Button,
  Text,
  TextInput,
  StyleSheet,
  Modal,
  Dimensions,
  Image
} from 'react-native';
import Camera from 'react-native-camera';
import store from '../configureStore';
import { saveNewRecipe, updateRecipe } from '../actions';

//temp styles just to mark a little bit
const styles = StyleSheet.create({
  lines: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: 'black',
    width: 400,
  },
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
});

export default class AddRecipe extends Component {
  constructor (props) {
    super(props);
    this.state = {
      title: '',
      allIngredients: [],
      currentIngredient: '',
      directions: '',
      inputText: '',
      photoUri: '',
      allrecipes: store.getState().recipesReducer.recipes,
      modalVisible: false,
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleIngInput = this.handleIngInput.bind(this);
    this.setModalVisible = this.setModalVisible.bind(this);
  }

  componentDidMount () {
    this.unsubscribe = store.subscribe(() => {
      this.setState(store.getState());
    });
    if (this.props.navigation.state.params) { //if we passed in a recipe to edit
      let {key, title, allIngredients, directions, photoUri} = this.props.navigation.state.params.currentRecipe;
      this.setState({
        title,
        allIngredients,
        directions,
        photoUri,
        key
      });
    }
  }

  componentWillUnmount () {
    this.unsubscribe();
  }

  handleIngInput () {
    this.setState({
      allIngredients: [...this.state.allIngredients, this.state.currentIngredient],
      currentIngredient: ''
    });
  }

  handleInput (text, type) {
    this.setState({
      [type]: text
    });
  }

  saveData() {
    const recipeObjToSave = {
      title: this.state.title,
      allIngredients: this.state.allIngredients,
      directions: this.state.directions,
      photoUri: this.state.photoUri
    };

    if (this.state.key) { //if the state has a key that means we are editing a old recipe
      store.dispatch(updateRecipe(this.state.key, recipeObjToSave))
    } else {
      store.dispatch(saveNewRecipe(recipeObjToSave));
    }
  }

  setModalVisible (isVisible) {
    this.setState({modalVisible: isVisible});
    this.takePicture = this.takePicture.bind(this);
  }

  takePicture() {
    this.camera.capture()
    .then(data => {
      this.handleInput(data.mediaUri, 'photoUri');
      this.setModalVisible(!this.state.modalVisible);
    })
    .catch(err => console.trace(err));
  }

  render () {
    const { navigate } = this.props.navigation;
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
          <Text>Ingredients List :</Text>
          {this.state.allIngredients.map((ing, index) => <Text key={index}>{` -> ${ing}`}</Text>)}
          <TextInput
            onChangeText={(ingredient) => this.handleInput(ingredient, "currentIngredient")}
            value={this.state.currentIngredient}
          />
          <Button
            title="ADD"
            onPress={this.handleIngInput}
          />
        </View>

        {/* Directions input area */}
        <View
          style={styles.lines}>
          <TextInput
            placeholder="Directions"
            onChangeText={(text) => this.handleInput(text, "directions")}
            value={this.state.directions}
            multiline={true}
          />
        </View>
        {/* Photo display or modal to add one */}
        { !this.state.photoUri ?
          <View>
            <Modal
              animationType={'slide'}
              transparent={false}
              visible={this.state.modalVisible}
              onRequestClose={() => {
                this.setModalVisible(!this.state.modalVisible);
              }}
              >
              <Camera
                ref={(cam) => {
                  this.camera = cam;
                }}
                style={styles.preview}
                aspect={Camera.constants.Aspect.fill}>
                <Text
                  style={styles.capture}
                  onPress={
                    this.takePicture
                  }>[SNAP!]</Text>
              </Camera>
            </Modal>

            <Button
              onPress={() => {
              this.setModalVisible(true);
            }}
            title="Add A Photo"
            />
          </View>
          :
          <Image
            style={{width: 100, height: 100}}
            source={{uri: this.state.photoUri}}
          />
        }
        <Button
          onPress={() => {
            this.saveData();
            navigate('AllRecipes');
          }}
          title="SAVE AND ADD"
        />
      </View>
    );
  }
}
