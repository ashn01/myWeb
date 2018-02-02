import React, { Component } from 'react';
import SideBar from '../MenuBar/SideBar';
import Home from './Home';
import Footer from './Footer';


class MainContainer extends Component {
  render() {
    return (
      <div>
        <SideBar/> {/* bar */}
        <Home/> {/* Main Contents */}
        <Footer/>
      </div>
    );
  }
}

export default MainContainer;
