import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {

  constructor() {
    super();
    this.

    this.state = {
      bActive: ""
    }
  }


  render() {
    return (
      <div id="header">
        <div id="header-link-collect">
          <div id="hl1">
            <Link to="/" id="hl1-a" className="header-link" key="hl1">Home</Link>
          </div>
          <div id="hl2" onClick={() => this.}>
            <Link to="/me" id="hl2-a" className="header-link" key="hl1">About Me</Link>
          </div>
          <div id="hl3">
            <Link to="/projects" id="hl3-a" className="header-link" key="hl1">Projects</Link>
          </div>
          <div id="hl4">
            <Link to="/contact" id="hl4-a" className="header-link" key="hl1">Get in Touch</Link>
          </div>
        </div>
        <div id="header-line"/>
      </div>
    );
  }
}

export default Header;
