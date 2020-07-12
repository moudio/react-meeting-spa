import React, { useState } from 'react';
import Home from './Home';

import './App.css';
import Welcome from './Welcome';
import Navigation from './Navigation';
import { Router } from '@reach/router';
import Login from './Login';
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: 'Mouha',
    };
  }
  render() {
    return (
      <div>
        <Navigation user={this.state.user} />
        {this.state.user && <Welcome user={this.state.user} />}
        <Router>
          <Home path="/" user={this.state.user} />
          <Login path="/login" />
        </Router>
      </div>
    );
  }
}

export default App;
