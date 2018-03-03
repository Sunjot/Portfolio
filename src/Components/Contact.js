import React, { Component } from 'react';

class Contact extends Component {


  render() {
    return (
      <div id="contact-cont">
        <div id="contact">
          <p className="heading">Get in Touch</p>
          <div id="act-div" className="divider"/>
          <p className="desc">If there is an opportunity available and you think we're a fit, send me an e-mail
          and I'll get back to you.</p>
          <form id="contact-form" method="POST" action="https://formspree.io/sunjot.10@gmail.com">
            <input className="input-field" id="name" type="name" name="name" placeholder="Full Name"/>
            <input className="input-field" id="email" type="email" name="email" placeholder="Email"/>
            <textarea className="input-field" id="message" name="message" placeholder="Message"></textarea>
            <button id="form-button" type="submit">Send</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Contact;
