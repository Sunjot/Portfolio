import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

class Header extends Component {

  constructor() {
    super();

    this.state = {
      me: "header-link",
      proj: "header-link",
      cn: "header-link"
    }
  }

  componentDidMount() {
    const history = createHistory();

    if (history.location.pathname === "/me") {
      this.setState({
        me: "header-link hdr-active"
      });
    }
    if (history.location.pathname === "/projects") {
      this.setState({
        proj: "header-link hdr-active"
      });
    }
    if (history.location.pathname === "/contact") {
      this.setState({
        cn: "header-link hdr-active"
      });
    }
  }

  buttonClick = (b) => {
    if (b === "me") {
      this.setState({
        me: "header-link hdr-active",
        proj: "header-link",
        cn: "header-link"
      });
    }
    if (b === "projects") {
      this.setState({
        me: "header-link",
        proj: "header-link hdr-active",
        cn: "header-link"
      });
    }
    if (b === "contact") {
      this.setState({
        me: "header-link",
        proj: "header-link",
        cn: "header-link hdr-active"
      });
    }
    if (b === "home") {
      this.setState({
        me: "header-link",
        proj: "header-link",
        cn: "header-link"
      });
    }
  }

  render() {
    return (
      <div id="header">
        <div id="header-link-collect">
          <div id="hl1">
            <Link to="/" onClick={() => this.buttonClick("home")} id="hl1-a" className="header-link" key="hl1">Home</Link>
          </div>
          <div id="hl2">
            <Link to="/me" onClick={() => this.buttonClick("me")} id="hl2-a" className={this.state.me} key="hl1">About Me</Link>
          </div>
          <div id="hl3">
            <Link to="/projects" onClick={() => this.buttonClick("projects")} id="hl3-a" className={this.state.proj} key="hl1">Projects</Link>
          </div>
          <div id="hl4">
            <Link to="/contact" onClick={() => this.buttonClick("contact")} id="hl4-a" className={this.state.cn} key="hl1">Get in Touch</Link>
          </div>
        </div>
        <div id="header-line"/>
      </div>
    );
  }
}

export default Header;
