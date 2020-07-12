import React, { useState } from 'react';
import Home from './Home';

import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: 'Mouha',
    };
  }
  render() {
    return <Home user={this.state.user} />;
  }
}

export default App;
