import React, { Component } from 'react';
import './Stylesheets/App.css';
import Header from './Components/Header';
import Intro from './Components/Intro';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Intro/>
      </div>
    );
  }
}

export default App;
