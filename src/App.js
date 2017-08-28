import React, { Component } from 'react';
import { Provider } from 'react-redux';

import List from './List';
import createStore from './state/store';

import './App.css';


const store = createStore();


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <List />
      </Provider>
    );
  }
}

export default App;
