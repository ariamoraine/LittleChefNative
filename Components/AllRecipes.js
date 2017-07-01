import React, { Component } from 'react';
import {
  Text,
  ScrollView,
  View,
  Image,
  TouchableOpacity,
  TouchableHighlight,
  StyleSheet
} from 'react-native';
import { getTheme } from 'react-native-material-kit';
import store from '../configureStore';
import { MAINFONT, TEXTHEADERSIZE } from '../assets/styles/theme';
const defaultImage = require('../assets/photos/food-1050813_960_720.jpg');

const styles = StyleSheet.create({
  main: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default class AllRecipes extends Component {

    constructor (props) {
      super(props);
      this.state = store.getState();
    }

    componentDidMount () {
      this.unsubscribe = store.subscribe(() => {
        this.setState(store.getState());
      });
    }

    componentWillUnmount () {
      this.unsubscribe();
    }

  render() {
    let recipes = this.state.recipesReducer.recipes;
    const { navigate } = this.props.navigation;
    const theme = getTheme();

    return (
      <View style={{flex: 1}}>
        <ScrollView contentContainerStyle={styles.main}>
          <Text style={{top: 10, fontFamily: MAINFONT, fontSize: TEXTHEADERSIZE}}>ALL RECIPES </Text>
          <Text />
          {
            //break this out into a recipe component
            recipes.map((recipe, index) => {
              const photoSource = recipe.photoUri ? {uri: recipe.photoUri} : defaultImage;
              return (
                <View style={theme.cardStyle} key={index}>
                <TouchableOpacity onPress={() => navigate('SingleRecipe', {currentRecipe: recipe})}>
                    <Image source={photoSource} style={theme.cardImageStyle}/>
                    <Text style={theme.cardTitleStyle}>{recipe.title}</Text>
                </TouchableOpacity>
                </View>
              );
            })
          }
        </ScrollView>
        <TouchableHighlight
          style={{backgroundColor: 'rgb(117, 117, 117)', position: 'absolute', padding: 10, left: 0, right: 0, bottom: 0}}
          onPress={() => navigate('AddRecipe')}
        >
        <Text style={{fontFamily: MAINFONT, color: 'white', textAlign: 'center'}}>ADD NEW RECIPE</Text>
        </TouchableHighlight>
      </View>
    );
  }
}
