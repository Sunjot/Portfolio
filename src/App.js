import React, { Component } from 'react';
import './Stylesheets/App.css';
import Header from './Components/Header';
import Intro from './Components/Intro';
import Me from './Components/Me';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Intro/>
        <Me/>
      </div>
    );
  }
}

export default App;
