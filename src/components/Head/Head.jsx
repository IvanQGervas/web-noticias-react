import React, { Component } from "react";
import Nav from '../Nav'

class Head extends Component {
  render() {
    return (
      <header className="header">
      <div className="header--content">
        <span className="header--content-logo">LOGO</span>
        <Nav />
      </div>
      </header>
    );
  }
}

export default Head;
