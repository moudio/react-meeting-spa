import React, { useState } from 'react';
import Home from './Home';
import Welcome from './Welcome';
import Navigation from './Navigation';
import { Router } from '@reach/router';
import firebase from './Firebase';
import Login from './Login';
import Register from './Register';
import Meetings from './Meetings';

import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: null,
    };
  }

  componentDidMount() {
    const ref = firebase.database().ref('user');
    ref.on('value', (snapshot) => {
      let FBUser = snapshot.val();
      this.setState({
        user: FBUser,
      });
    });
  }

  render() {
    return (
      <div>
        <Navigation user={this.state.user} />
        {this.state.user && <Welcome user={this.state.user} />}
        <Router>
          <Home path="/" user={this.state.user} />
          <Login path="/login" />
          <Meetings path="/meetings" />
          <Register path="/register" />
        </Router>
      </div>
    );
  }
}

export default App;
