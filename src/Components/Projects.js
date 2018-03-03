import React, { Component } from 'react';
import Tv from '../Images/tv.jpg';
import Got from '../Images/therealm.jpg';
import ProjSection from './ProjSection';

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

    let tv = {
      name: "Tv Tracker",
      desc: `A website that allows you to build a collection of your past
        and presently watched TV shows. Discover new series based on what you've seen already
        and keep tabs on what is scheduled to be on-air in the coming week. Dynamic website
        built using Ruby on Rails and powered by The Movie DB.`,
      link: "https://tv.imalwayssunny.xyz"
    };

    let got = {
      name: "The Realm",
      desc: `A website that serves as a simplified introduction to the series, 'Game of Thrones'.
        Review the important locations, social rankings, big-time players, and the events prior to
        the show that set up the current state in the series. Static website built using React JS.`,
      link: "https://therealm.imalwayssunny.xyz"
    };

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
            <ProjSection anim={this.state.projAnim} func={this.backClick} content={tv}/>
          }
          {this.state.selectedProj === "got" &&
            <ProjSection anim={this.state.projAnim} func={this.backClick} content={got} />
          }
        </div>
      </div>
    );
  }
}

export default Projects;
