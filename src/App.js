import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  state = { loggedIn: null }

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyDtLUGWtr5lW3Fjj-Qqm7l1p_ap1O1Z528',
      authDomain: 'authentication-79dd2.firebaseapp.com',
      databaseURL: 'https://authentication-79dd2.firebaseio.com',
      projectId: 'authentication-79dd2',
      storageBucket: 'authentication-79dd2.appspot.com',
      messagingSenderId: '419546060640'
    });

    firebase.auth().onAuthStateChanged((user) => {
      // checks the on/off state of auth() and see whether user is signed in or not.
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
      return (
        <Button onPress={() => firebase.auth().signOut()}>
          Log Out
        </Button>
      );
      case false:
      return <LoginForm />;
      default:
      return <Spinner size="large" />;
    }
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;
