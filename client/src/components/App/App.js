import React, { Component } from 'react';
import { Provider } from 'react-redux'
import configStore from 'bootstrap/configStore'
import Register from '../Register/Register'
import './App.css';

const store = configStore()

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Register />
      </Provider>
    )
  }
}

export default App;
