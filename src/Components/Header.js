import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import createHistory from "history/createBrowserHistory";

class Header extends Component {

  constructor() {
    super();
    this.changeColor = this.changeColor.bind(this);
    this.checkPath = this.checkPath.bind(this);

    this.state = {
      headerColor: 'trp',
      headerLinkColor: 'header-link white-link'
    }
  }

  componentDidMount(){
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
  }

  changeColor(e) {
    if (e === "0") {
      this.setState({
        headerColor: "trp",
        headerLinkColor: "header-link white-link"
      });
    }
    if (e === "1") {
      this.setState({
        headerColor: "hdr-colored",
        headerLinkColor: "header-link black-link"
      });
    }
  }

  render() {
    return (
      <div id="header" className={this.state.headerColor}>
        <div id="header-link-collect">
          <Link id="hl1" className={this.state.headerLinkColor} to="/"
            onClick={() => this.changeColor("0")}>Home</Link>
          <Link id="hl2" className={this.state.headerLinkColor} to="/me"
            onClick={() => this.changeColor("1")}>About Me</Link>
          <Link id="hl3" className={this.state.headerLinkColor} to="/"
            onClick={() => this.changeColor("1")}>My Projects</Link>
          <Link id="hl4" className={this.state.headerLinkColor} to="/"
            onClick={() => this.changeColor("1")}>Get in Touch</Link>
        </div>
        <div id="header-line"/>
      </div>
    );
  }
}

export default Header;
