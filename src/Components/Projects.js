import React, { Component } from 'react';
import Tv from '../Images/tv.jpg';
import Got from '../Images/therealm.jpg';
import { ExternalLink } from 'react-feather';
import { ArrowLeftCircle } from 'react-feather';

class Projects extends Component {

  constructor() {
    super();
    this.state = {
      selectedProj: "",
      tvAnim: "tv-in",
      gotAnim: "got-in",
      projAnim: "proj-in"
    }
  }

  projClick = (e) => {

    this.setState({
      tvAnim: "tv-out",
      gotAnim: "got-out",
      projAnim: "proj-in"
    })

    if (e === "tv") {
      setTimeout(() => {
        this.setState({
          selectedProj: "tv"
        });
      }, 1000);
    }
    if (e === "got") {
      setTimeout(() => {
        this.setState({
          selectedProj: "got"
        });
      }, 1000);
    }
  }

  backClick = () => {
    this.setState({
      projAnim: "proj-out"
    });

    setTimeout(() => {
      this.setState({
        selectedProj: "",
        tvAnim: "tv-in",
        gotAnim: "got-in"
      });
    }, 500);
  }

  render() {
    return (
      <div id="projects-cont">
        <div id="projects">
          <p className="heading">My Work</p>
          <div id="act-div" className="divider"/>
          {this.state.selectedProj === "" &&
            <div id="pic-list">
              <img className={this.state.tvAnim} src={Tv} onClick={() => this.projClick("tv")} alt="tv"/>
              <img className={this.state.gotAnim} src={Got} onClick={() => this.projClick("got")} alt="got"/>
            </div>
          }
          {this.state.selectedProj === "tv" &&
            <div id={this.state.projAnim} className="proj-cont">
              <div className="heading-cont">
                <p className="heading">Tv Tracker</p>
                <a target="_blank" rel="noopener noreferrer" href="https://tv.imalwayssunny.xyz">
                  <ExternalLink className="feather-icon" color="white" size={28} />
                </a>
              </div>
              <p className="desc">A website that allows you to build a collection of your past
                and presently watched TV shows. Discover new series based on what you've seen already
                and keep tabs on what is scheduled to be on-air in the coming week. Built using Ruby
                on Rails and powered by The Movie DB.
              </p>
              <ArrowLeftCircle onClick={() => this.backClick()} id="arrow-icon" className="feather-icon" color="white" size={35} />
            </div>
          }
          {this.state.selectedProj === "got" &&
            <div id={this.state.projAnim} className="proj-cont">
              <p className="heading">The Realm</p>
              <p className="desc"></p>
            </div>
          }
        </div>
      </div>
    );
  }
}

export default Projects;
