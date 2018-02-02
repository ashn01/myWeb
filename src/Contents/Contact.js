import React, { Component } from 'react';

const roundStyle =
{
  width:'50px',
  border:'5px solid red'
}

const emailIStyle =
{
  fontSize:'20px'
}

const phoneIStyle =
{
  fontSize:'35px'
}

const gitIStyle =
{
  fontSize:'25px'
}

class Contact extends Component {
  render() {
    return (
      <div className="w3-container">
        <h1 className="w3-xxxlarge w3-text-red"><b>Contact.</b></h1>
        <hr style={roundStyle} className="w3-round"/>
        <p>Do you feel I am a suitable candidate? Then, contact me :)</p>

        <i className="fa fa-envelope" style={emailIStyle}></i>&nbsp;&nbsp;<a href="mailto:midvalue@gmail.com"> midvalue@gmail.com </a><br/>
        <i className="fa fa-mobile" style={phoneIStyle}></i>&nbsp;&nbsp; (+1) 647 - 207 - 9790<br/>
        <i className="fa fa-github" style={gitIStyle}></i>&nbsp;&nbsp; <a href ="https://github.com/ashn01/">https://github.com/ashn01/</a>
      </div>
    );
  }
}

export default Contact;
