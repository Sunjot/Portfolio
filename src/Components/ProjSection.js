import React, { Component } from 'react';
import { ExternalLink } from 'react-feather';
import { ArrowLeftCircle } from 'react-feather';

class ProjSection extends Component {


  render() {
    return (
      <div id={this.props.anim} className="proj-cont">
        <div className="heading-cont">
          <p className="heading">{this.props.content.name}</p>
          <a target="_blank" rel="noopener noreferrer" href={this.props.content.link}>
            <ExternalLink className="feather-icon" color="white" size={28} />
          </a>
        </div>
        <p className="desc">{this.props.content.desc}</p>
        <ArrowLeftCircle onClick={this.props.func} id="arrow-icon" className="feather-icon" color="white" size={35} />
      </div>
    );
  }
}

export default ProjSection;
