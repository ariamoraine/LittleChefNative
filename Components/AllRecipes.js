import React, { Component } from 'react';
import {
  Text,
  ScrollView,
  View,
  Button,
  Image,
  TouchableHighlight,
  StyleSheet
} from 'react-native';
import { getTheme } from 'react-native-material-kit';
import store from '../configureStore';
import { MAINFONT, TEXTHEADERSIZE, PHOTOSIZE } from '../assets/styles/theme';
const defaultImage = require('../assets/photos/food-1050813_960_720.jpg');

const styles = StyleSheet.create({
  main: {
    // display: 'flex',
    // flexDirection: 'column',
    // justifyContent: 'center',
    // backgroundColor: 'silver',
    // alignItems: 'center'
  },
  photos: {
    width: PHOTOSIZE,
    height: PHOTOSIZE,
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
      <ScrollView contentContainerStyle={styles.main}>
        <Text style={{fontFamily: MAINFONT, fontSize: TEXTHEADERSIZE}}>Here are all your recipes</Text>
        <Text style={{fontFamily: MAINFONT}}>{`Total recipe count: ${recipes.length}`}</Text>
        {
          //break this out into a recipe component
          recipes.map((recipe, index) => {
            const photoSource = recipe.photoUri ? {uri: recipe.photoUri} : defaultImage;
            return (
              <TouchableHighlight onPress={() => navigate('SingleRecipe', {currentRecipe: recipe})} key={index}>
              <View style={theme.cardStyle}>
                <Image source={photoSource} style={theme.cardImageStyle} />
                <Text style={theme.cardTitleStyle}>{recipe.title}</Text>
              </View>
              </TouchableHighlight>
            );
          })
        }
        <Button
          style={{fontFamily: MAINFONT}}
          onPress={() => navigate('AddRecipe')}
          title="Add a new Recipe?"
        />
      </ScrollView>
    );
  }
}

// <TouchableHighlight onPress={() => navigate('SingleRecipe', {currentRecipe: recipe})} key={index}>
//                 <View>
//                   <Text style={{fontFamily: MAINFONT}}>{`Title: ${recipe.title}`}</Text>
//                   <Image
//                     style={styles.photos}
//                     source={photoSource}
//                   />
//                 </View>
//               </TouchableHighlight>
