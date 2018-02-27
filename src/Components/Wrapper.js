import React, { Component } from 'react';
import Me from './Me';
import Projects from './Projects';

class Wrapper extends Component {

  constructor() {
    super();

    this.state = {
      currentSec: "",
      meDivider: ""
    }
  }

  componentWillReceiveProps(nextProps) {

    if (this.props.section !== "me" && nextProps.section === "me") {
      this.setState({
        currentSec: "me",
        meDivider: "act-div"
      });
    }
    if (this.props.section !== "projects" && nextProps.section === "projects") {
      this.setState({
        currentSec: "projects"
      });
    }
    if (this.props.section !== "intro" && nextProps.section === "intro") {
      setTimeout(() => {
        this.setState({
          currentSec: ""
        });
      }, 1000);
    }
  }

  render() {

    return (
      <div id="wrapper">
        {this.state.currentSec === "me" &&
          <Me activate={this.state.meDivider}/>
        }
        {this.state.currentSec === "projects" &&
          <Projects/>
        }
      </div>
    );
  }
}

export default Wrapper;
