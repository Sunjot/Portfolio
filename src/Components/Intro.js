import React, { Component } from 'react';

class Intro extends Component {
  render() {
    return (
      <div id="intro">
        <div id="intro-cover"></div>
        <div id="intro-desc">
          <div><p id="role">A <span id="span-dev">developer</span> and <span>des<span id="span-des">i</span>gner</span> based in Toronto.</p></div>
          <div><p id="name">Hi, I'm Sunjot.</p></div>
        </div>
      </div>
    );
  }
}

export default Intro;
