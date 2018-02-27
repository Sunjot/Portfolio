import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import createHistory from "history/createBrowserHistory";

class Header extends Component {

  constructor() {
    super();

    this.state = {
      headerColor: 'trp',
      headerLinkColor: 'header-link white-link'
    }
  }

  changeComp = (code, comp) => {

    this.props.compFunc(comp);

    setTimeout(() => {
      if (code === "0") {
        this.setState({
          headerColor: "trp",
          headerLinkColor: "header-link white-link"
        });
      }
      if (code === "1") {
        this.setState({
          headerColor: "hdr-colored",
          headerLinkColor: "header-link black-link"
        });
      }
    }, 1000);
  }

  render() {
    return (
      <div id="header" className={this.state.headerColor}>
        <div id="header-link-collect">
          <p id="hl1" className={this.state.headerLinkColor} to="/"
            onClick={() => this.changeComp("0", "intro")}>Home</p>
          <p id="hl2" className={this.state.headerLinkColor} to="/me"
            onClick={() => this.changeComp("1", "me")}>About Me</p>
          <p id="hl3" className={this.state.headerLinkColor} to="/"
            onClick={() => this.changeComp("1", "projects")}>My Projects</p>
          <p id="hl4" className={this.state.headerLinkColor} to="/"
            onClick={() => this.changeComp("1", "contact")}>Get in Touch</p>
        </div>
        <div id="header-line"/>
      </div>
    );
  }
}

export default Header;
