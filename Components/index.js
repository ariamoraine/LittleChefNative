import React, { Component } from 'react';
import {
  View,
  Text,
  Button,
  Image
} from 'react-native';
import { fetchAllRecipes } from '../actions';
import store from '../configureStore';

export default class HomeScreen extends Component {

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

  loadRecipes () {
    store.dispatch(fetchAllRecipes());
  }

  render() {
    return (
      <Image source={require('../public/main_food.jpg')}
        style={{
          flex: 1,
          width: null,
          height: null,
          resizeMode: 'cover',
          justifyContent: 'center',
          flexDirection: 'column'}
        }>

      <Text style={{
        textAlign: 'center',
        color: 'white',
        backgroundColor: 'rgba(0,0,0,0)',
        fontSize: 32,
        }}>Want a little chef?</Text>
      </Image>
    );
  }
}
      //<View>
        //      <Text>Need a Little Chef?</Text>
          //    <Button
            //    onPress={() => {
              //    this.loadRecipes();
                //  this.props.navigation.navigate('AllRecipes')
                //}}
                //title="Yes Please!"
              ///>
            //</View>
