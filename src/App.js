/*eslint linebreak-style: ["error", "windows"]*/
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyAMVNJJyETAn_zxpk5rA8-Qeem2nt3CP74',
      authDomain: 'manager-65eb1.firebaseapp.com',
      databaseURL: 'https://manager-65eb1.firebaseio.com',
      storageBucket: 'manager-65eb1.appspot.com',
      messagingSenderId: '989231437205'
    };
    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
