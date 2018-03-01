import React, { Component } from 'react';

class Me extends Component {
  render() {
    let icons = [
      {class: "devicon-html5-plain", name: "html5"}, {class: "devicon-css3-plain", name: "css3"},
      {class: "devicon-sass-original", name: "sass"}, {class: "devicon-javascript-plain", name: "javascript"},
      {class: "devicon-react-original", name: "react"}, {class: "devicon-ruby-plain", name: "ruby"},
      {class: "devicon-rails-plain", name: "rails"}, {class: "devicon-mysql-plain", name: "mysql"},
      {class: "devicon-postgresql-plain", name: "psql"}, {class: "devicon-git-plain", name: "git"},
      {class: "devicon-nginx-original", name: "nginx"}];

    return (
      <div id="me-cont">
        <div id="me">
          <div className="title">
            <p className="heading">More About Me</p>
            <div id="act-div" className="divider"/>
          </div>
          <p className="desc">I'm a recent graduate who took up programming as a
          freshman in high school. By the time I went to University, I knew that building websites
          was what I wanted to do. While I am more well-versed in front-end development,
          I have dabbled in servers and databases and my goal is to one day become a full-stack developer.
          Below are some of the languages, frameworks, and tools I have utilized in my projects.</p>
          <div id="icons">
            {icons.map(i => {
              return <div key={i.name} id="icon-cont"><i className={i.class}></i><p>{i.name}</p></div>
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Me;
