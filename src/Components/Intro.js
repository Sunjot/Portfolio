import React, { Component } from 'react';
import ReactSVG from 'react-svg';
import Name from '../Images/name.svg';
import Github from '../Images/icons_github.svg';
import Linkedin from '../Images/icons_linkedin.svg';

class Intro extends Component {
  render() {
    return (
      <div id="intro" className={this.props.anim}>
        <div id="intro-desc">
          <div id="name"> <ReactSVG path={Name}/></div>
          <div><p id="role">A <span id="span-dev">web developer</span> based in Toronto.</p></div>
        </div>
        <div id="social-links">
          <a target="_blank" rel="noopener noreferrer" href="https://github.com/Sunjot"><ReactSVG path={Github} /></a>
          <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/sunjotsingh/"><ReactSVG path={Linkedin} /></a>
        </div>
      </div>
    );
  }
}

export default Intro;
