import React, { Component } from 'react';

class Me extends Component {
  render() {
    return (
      <div id="me">
        <div className="title">
          <p className="heading">More About Me</p>
          <div id={this.props.activate} className="divider"/>
        </div>
        <p className="desc">I'm a 23-year-old recent graduate who took up programming as a
        freshman in high school. By the time I went to University, I knew that web development
        and design was what I wanted to do. While I currently consider myself to mostly be a
        front-end developer, I have dabbled in servers and databases and hope to one day
        become a full-stack developer. Below are some of the languages, frameworks, and tools
        I have utilized in my projects.</p>
      </div>
    );
  }
}

export default Me;
