import React, { Component } from 'react';
import Tv from '../Images/tv.jpg';
import Got from '../Images/therealm.jpg';

class Projects extends Component {
  render() {
    return (
      <div id="projects-cont">
        <div id="projects">
          <p className="heading">My Work</p>
          <div id="act-div" className="divider"/>

          <div id="tv-cont" className="proj-cont">
            <img id="tv-pic" className="proj-pic" src={Tv}/>
            <div id="tv-desc" className="desc-cont">
              <p className="title">TV Tracker</p>
              <p className="desc">TV Tracker allows you to create a collection of all your past- and
              presently-watched TV shows in order to keep track of what's
              airing in the coming week and more. Built using Ruby on Rails and powered by the
              The Movie DB.</p>
            </div>
          </div>
          <div id="got-cont" className="proj-cont">
            <img id="got-pic" className="proj-pic" src={Got}/>
            <div id="got-desc" className="desc-cont">
              <p className="title">The Realm</p>
              <p className="desc">TV Tracker allows you to create a collection of all your past- and
              presently-watched TV shows in order to keep track of what's
              airing in the coming week and more. Built using Ruby on Rails and powered by the
              The Movie DB.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
