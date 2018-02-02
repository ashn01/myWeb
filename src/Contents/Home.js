import React, { Component } from 'react';
import Header from './Header';
import PhotoGrid from './PhotoGrid';
import AboutMe from './AboutMe';
import Contact from './Contact';
import TimeLine from './TimeLine';

const mainStyle =
{
  marginLeft:'340px',
  marginRight:'40px'
}
const divStyle =
{
  height:'75px'
}

class Home extends Component {
  render() {
    return (
      <div className="w3-main" style={mainStyle}>
        <div id="top" style={divStyle}/>
        <Header/>
        <div id="project" style={divStyle}/>
        <PhotoGrid/>
        <div id="aboutme" style={divStyle}/>
        <AboutMe/>
        <div id="timeline" style={divStyle}/>
        <TimeLine/>
        <div id="contact" style={divStyle}/>
        <Contact/>
      </div>
    );
  }
}

export default Home;
