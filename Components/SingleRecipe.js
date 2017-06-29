import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  Dimensions,
  Li
} from 'react-native';
import store from '../configureStore';
import { getTheme } from 'react-native-material-kit';
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
    console.log(photoUri);
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
          <Text style={theme.cardContentStyle}>
            {
              allIngredients.map(ingredient => {
                console.log("test")
                return <Text>{`${ingredient}\n`}</Text>
              })
            }
          </Text>
          <Text style={theme.cardActionStyle}>{directions}</Text>
        </View>
      </View>
    );
  }
}
/*

<View style={{
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#000',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 7, height: 8 },
        elevation: 5,
        shadowOpacity: 1,
        shadowRadius: 2,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10}}>
        <Text>TESTING</Text>
      </View>


<View>
        <Image
          style={{width: 300, height: 300}}
          source={{uri: photoUri}}
        />
        <Text>{title}</Text>
        {
          allIngredients.map(ingredient => {
            return <Text>{ingredient}</Text>
          })
        }
        <Text>{directions}</Text>
      </View>
*/
