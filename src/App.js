import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyDtLUGWtr5lW3Fjj-Qqm7l1p_ap1O1Z528',
      authDomain: 'authentication-79dd2.firebaseapp.com',
      databaseURL: 'https://authentication-79dd2.firebaseio.com',
      projectId: 'authentication-79dd2',
      storageBucket: 'authentication-79dd2.appspot.com',
      messagingSenderId: '419546060640'
    });
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <LoginForm />
      </View>
    );
  }
}

export default App;
