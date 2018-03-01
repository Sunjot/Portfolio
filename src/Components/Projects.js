import React, { Component } from 'react';
import Tv from '../Images/tv.jpg';

class Projects extends Component {
  render() {
    return (
      <div id="projects-cont">
        <div id="projects">
          <p className="heading">My Work</p>
          <div id="act-div" className="divider"/>
          <div id="tv-cont">
            <img id="tv-pic" src={Tv}/>
            <div id="tv-desc">
              <p className="title">TV Tracker</p>
              <p className="desc">TV Tracker allows you to create a collection of all your past- and
              presently-watched TV shows in order to keep track of everything, including what's
              airing in the coming week. Built using Ruby on Rails and powered by the The Movie DB.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
