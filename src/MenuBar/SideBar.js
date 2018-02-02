import React, { Component } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';


const navStyle =
{
    zIndex:'3',
    width:'300px',
    fontWeight:'bold'
}

const navStyleSmall =
{
      display:'block',
      zIndex:'3',
      width:'300px',
      fontWeight:'bold'
}

const OverlayStyle =
{
  cursor : 'pointer'
}

const OverlayStyleSmall =
{
  display:'block',
  cursor : 'pointer'
}

const CloseMenuStyle =
{
  width:'100%',
  fontSize:'22px'
}

class SideBar extends Component {
  constructor(props)
  {
    super();
    this.state =
    {
      open : false
    }
    this.item = null;
    this.openSide = this.openSide.bind(this);
    this.closeSide = this.closeSide.bind(this);
  }
  openSide()
  {
    this.setState({open:true});
  }
  closeSide()
  {
    this.setState({open:false});
  }
  render() {
    return (
      <div>
        <nav className="w3-sidebar w3-red w3-collapse w3-top w3-large w3-padding" style= {this.state.open ? navStyleSmall: navStyle} ref={(ref)=>{this.item=ref}}><br/>
          <a onClick={this.closeSide} className="w3-button w3-hide-large w3-display-topleft" style={CloseMenuStyle}>Close Menu</a>
          <div className="w3-container">
            <h3 className="w3-padding-64"><b>Youngmin Kim<br/>Webpage</b></h3>
          </div>
          <div className="w3-bar-block">
            <div onClick={this.closeSide}>
              <AnchorLink href="#root" className="w3-bar-item w3-button w3-hover-white">Home</AnchorLink>
            </div>
            <div onClick={this.closeSide}>
              <AnchorLink href="#project" onClick={this.closeSide} className="w3-bar-item w3-button w3-hover-white">Project</AnchorLink>
            </div>
            <div onClick={this.closeSide}>
              <AnchorLink href="#aboutme" onClick={this.closeSide} className="w3-bar-item w3-button w3-hover-white">About Me</AnchorLink>
            </div>
            <div onClick={this.closeSide}>
              <AnchorLink href="#timeline" onClick={this.closeSide} className="w3-bar-item w3-button w3-hover-white">TimeLine</AnchorLink>
            </div>
            <div onClick={this.closeSide}>
              <AnchorLink href="#contact" onClick={this.closeSide} className="w3-bar-item w3-button w3-hover-white">Contact</AnchorLink>
            </div>
          </div>
        </nav>

        <header className="w3-container w3-top w3-hide-large w3-red w3-xlarge w3-padding">
          <a  className="w3-button w3-red w3-margin-right" onClick={this.openSide}>☰</a>
          <span>Youngmin Kim</span>
        </header>

        <div className="w3-overlay w3-hide-large" onClick={this.closeSide} style= {this.state.open ? OverlayStyleSmall : OverlayStyle} title="close side menu" id="myOverlay"></div>
      </div>
    );
  }
}

export default SideBar;
