import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {

  render() {
    return (
      <div id="header">
        <div id="header-link-collect">
          <Link to="/" id="hl1" className="header-link" key="hl1">Home</Link>
          <Link to="/me" id="hl2" className="header-link" key="hl1">About Me</Link>
          <Link to="/projects" id="hl3" className="header-link" key="hl1">Projects</Link>
          <Link to="/contact" id="hl4" className="header-link" key="hl1">Get in Touch</Link>
        </div>
        <div id="header-line"/>
      </div>
    );
  }
}

export default Header;
