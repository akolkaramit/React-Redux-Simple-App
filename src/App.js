import React, { Component } from 'react';
import './App.css';

import ComponentOne from './ComponentOne/ComponentOne.js';
import ComponentTwo from './ComponentTwo/ComponentTwo.js';
import ComponentThree from './ComponentThree/ComponentThree.js';

class App extends Component {
  render() {
    return (
      <div className="App">
          <ComponentOne />
          <ComponentTwo />
          <ComponentThree />
      </div>
    );
  }
}

export default App;
