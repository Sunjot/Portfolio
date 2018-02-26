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

  /*componentDidMount(){
    const history = createHistory();

    this.checkPath(history.location); // when a page is loaded on address bar enter

    history.listen((location) => { // when a page is loaded through back button
      this.checkPath(location);
    });
  }

  checkPath(p) {
    if (p.pathname === "/") // when a page is loaded on address bar enter
      this.changeColor("0");
    else
      this.changeColor("1");
  }*/

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
    }, 750);
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
