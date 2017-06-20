import React, { Component } from 'react';
import { Provider } from 'react-redux';
import configureStore from '../configureStore';
import HomeScreen from '../Components';


export default class Home extends Component {

  render() {
    const store = configureStore();

    return (
      <Provider store={store}>
        <HomeScreen />
      </Provider>
    );
  }
}
