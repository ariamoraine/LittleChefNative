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
import { saveNewRecipe } from '../actions';

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
      photoInfo: '',
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
    console.log("PHOTO INFO", text, type)
    this.setState({
      [type]: text
    });
  }

  saveData() {
    const newRecipeObj = {
      title: this.state.title,
      allIngredients: this.state.allIngredients,
      directions: this.state.directions
    };

    store.dispatch(saveNewRecipe(newRecipeObj));
  }

  setModalVisible (isVisible) {
    this.setState({modalVisible: isVisible});
    this.takePicture = this.takePicture.bind(this);
  }

  takePicture() {
    this.camera.capture()
    .then(data => {
      console.log(data)
      //data is the photo object with the mediaUri and the path
      //next I want to pass back information for the photo object to the add
      //recipe component
      // this.props.navigation.state.params.handleInput(data, "photoInfo")
      // this.props.navigation.navigate('AddRecipe')
      this.handleInput(data, "photoInfo")
      this.setModalVisible(!this.state.modalVisible);
    })
    .catch(err => console.trace(err));
  }

  render () {
    const { navigate } = this.props.navigation;
    console.log("THIS IS STATE IN ADD RECIPE", this.state);
    const photoURI = this.state.photoInfo.mediaUri
    console.log("Photo uri", photoURI)

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
        { !this.state.photoInfo ?
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
            source={{uri: photoURI}}
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
