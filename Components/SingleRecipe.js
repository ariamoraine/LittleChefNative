import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
} from 'react-native';
import store from '../configureStore';
import { getTheme } from 'react-native-material-kit';
import { MAINFONT, SECONDFONT } from '../assets/styles/theme';
const defaultImage = require('../assets/photos/food-1050813_960_720.jpg');


export default class singleRecipe extends Component {

  constructor (props) {
    super(props);
    this.state = store.getState(); //add in current recipe to the state?
  }

  componentDidMount () {
    this.unsubscribe = store.subscribe(() => {
      this.setState(store.getState());
    });
  }

  componentWillUnmount () {
    this.unsubscribe();
  }

  render () {
    let { title, allIngredients, directions, photoUri} = this.props.navigation.state.params.currentRecipe;
    const theme = getTheme();
    photoUri = photoUri ? {uri: photoUri} : defaultImage;
    return (
      <View style={{
          flex: 1,
          width: null,
          height: null,
          justifyContent: 'center',
          flexDirection: 'column',
          alignItems: 'center',
        }}>
        <View style={theme.cardStyle}>
          <Image source={photoUri} style={theme.cardImageStyle} />
          <Text style={theme.cardTitleStyle}>{title}</Text>
          <Text style={{fontSize: 20, top: 10, left: 8}}>{`Ingredients: \n`}</Text>
          <Text style={theme.cardContentStyle}>
            {
              allIngredients.map((ingredient, index) => {
                return <Text key={index}>{`${ingredient}\n`}</Text>
              })
            }
          </Text>
          <Text style={{ fontSize: 20, top: 10, left: 8}}>Directions:</Text>
          <Text style={theme.cardContentStyle}>{directions}</Text>
        </View>
      </View>
    );
  }
}
