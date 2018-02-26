import React, { Component } from 'react';
import './Stylesheets/App.css';
import Header from './Components/Header';
import Intro from './Components/Intro';
import Me from './Components/Me';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { CSSTransitionGroup } from 'react-transition-group';

class App extends Component {

  constructor() {
    super();

    this.state = {
      compChoice: "intro",
      introAnim: "",
      meAnim: ""
    };
  }

  selectComp = (c) => {

    if (this.state.compChoice === "intro" && c === "me") {
      this.setState({
        introAnim: "intro-out",
        meAnim: "me-act"
      });

      setTimeout(() => {
        this.setState({
          compChoice: c
        });
      }, 1000);
    }
    if (this.state.compChoice === "me" && c === "intro") {
      this.setState({
        introAnim: "intro-in",
        compChoice: c
      });
    }
  }

  render() {
    return (
      <div className="App">
        <Header compFunc={this.selectComp}/>
        { this.state.compChoice === "intro" &&
          <Intro anim={this.state.introAnim}/>
        }
        <Me activate={this.state.meAnim}/>
      </div>
    );
  }
}

export default App;
