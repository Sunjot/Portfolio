import React, { Component } from 'react';

class Header extends Component {

  constructor() {
    super();
    this.headerScroll = this.headerScroll.bind(this);

    this.state = {
      headerColor: 'trp'
    }
  }

  componentDidMount(){
    window.addEventListener('scroll', this.headerScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.headerScroll);
  }

  headerScroll(e) {
    if (window.pageYOffset > 0 && this.state.headerColor === "trp") {
      this.setState({
        headerColor: 'hdr-colored'
      });
    }
    if (window.pageYOffset === 0) {
      this.setState({
        headerColor: 'trp'
      });
    }
  }

  render() {
    return (
      <div id="header" className={this.state.headerColor}>
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
