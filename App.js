import React, { Component } from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginView from './src/LoginView';

const scenes = Actions.create(
  <Scene key="root">
    <Scene key="login" component={LoginView} hideNavBar />
  </Scene>
);

export default class App extends Component {
  render() {
    return <Router scenes={scenes} />;
  }
}
