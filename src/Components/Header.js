import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div id="header">
        <div id="header-link-collect">
          <p id="hl1" className="header-link">home</p>
          <p id="hl2" className="header-link">my projects</p>
          <p id="hl3" className="header-link">get in touch</p>
        </div>
        <div id="header-line"/>
      </div>
    );
  }
}

export default Header;
