import React, { Component } from 'react';

const containerStyle =
{
  marginTop:'75px',
  paddingRight:'58px'
}

class Contact extends Component {
  render() {
    return (
      <div className="w3-light-grey w3-container w3-padding-32" style={containerStyle}>
        <p className="w3-left"> Youngmin Kim </p>
        <p className="w3-right">Powered by <a href="https://www.w3schools.com/w3css/default.asp" title="W3.CSS" target="_blank" rel="noopener noreferrer" className="w3-hover-opacity">w3.css</a></p>
      </div>

    );
  }
}

export default Contact;
