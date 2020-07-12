import React, { useState } from 'react';
import Home from './Home';

import './App.css';
import Welcome from './Welcome';

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
        {this.state.user && <Welcome user={this.state.user} />}
        <Home user={this.state.user} />
      </div>
    );
  }
}

export default App;
