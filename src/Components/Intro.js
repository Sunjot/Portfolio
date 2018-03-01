import React, { Component } from 'react';
import ReactSVG from 'react-svg';
import Name from '../Images/name.svg';

class Intro extends Component {
  render() {
    return (
      <div id="intro" className={this.props.anim}>
        <div id="intro-cover"></div>
        <div id="intro-desc">
          <div id="name">
            <ReactSVG
                path={Name}
              />
          </div>
          <div><p id="role">A <span id="span-dev">front-end developer</span> based in Toronto.</p></div>
          <div><p id="line">I build clean and responsive websites with minimalist design in mind.</p></div>
        </div>
      </div>
    );
  }
}

export default Intro;
