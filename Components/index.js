import React, { Component } from 'react';
import {
  View,
  Text,
  Button
} from 'react-native';
import { connect } from 'react-redux'
import { fetchAllRecipes } from '../actions'

class HomeScreen extends Component {
  render() {
    return (
      <View>
        <Text>Need a Little Chef?</Text>
        <Button
          onPress={() => {
            this.props.fetchAllRecipes()
            // this.props.navigation.navigate('AllRecipes')
          }}
          // onPress={() => this.props.fetchAllRecipes()}
          title="Yes Please!"
        />
      </View>
    );
  }
}

function mapStateToProps (state) {
  return {
    recipes: state.recipesReducer.recipes
  };
}

function mapDispatchToProps (dispatch) {
  return {
    fetchAllRecipes: () => dispatch(fetchAllRecipes())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
