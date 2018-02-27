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
        introAnim: "intro-out", // activates animation for leaving intro comp
        meAnim: "me-act" // activates divider animation for entering me comp
      });

      setTimeout(() => { // delay the render so the intro animation can finish before rending me comp
        this.setState({
          compChoice: c
        });
      }, 1000);
    }
    if (this.state.compChoice === "me" && c === "intro") {
      this.setState({
        introAnim: "intro-in", // activates animation for entering intro comp
        compChoice: c, // no delay in rendering bc intro comp has no critical leaving animation
        meAnim: "me-off" // animation to collapse divider 
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
