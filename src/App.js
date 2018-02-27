import React, { Component } from 'react';
import './Stylesheets/App.css';
import Header from './Components/Header';
import Intro from './Components/Intro';
import Wrapper from './Components/Wrapper';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { CSSTransitionGroup } from 'react-transition-group';

class App extends Component {

  constructor() {
    super();

    this.state = {
      compChoice: "intro",
      introAnim: ""
    };
  }

  selectComp = (c) => {
    if (this.state.compChoice === "intro") {
      this.setState({
        introAnim: "intro-out" // activates animation for leaving intro comp
      });

      setTimeout(() => { // delay the render so the intro animation can finish before rending me comp
        this.setState({
          compChoice: c
        });
      }, 1000);
    }
    if (c === "intro") {
      this.setState({
        introAnim: "intro-in", // activates animation for entering intro comp
        compChoice: c
      });
    }
    if (c !== "intro" && this.state.compChoice !== "intro") {
      this.setState({
        compChoice: c
      });
    }
  }

  render() {
    return (
      <div className="App">
        <Header compFunc={this.selectComp}/>
        <Intro anim={this.state.introAnim}/>
        <Wrapper section={this.state.compChoice}/>
      </div>
    );
  }
}

export default App;
