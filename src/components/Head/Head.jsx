import React, { Component } from "react";
import Nav from '../Nav'

import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

class Head extends Component {

  render() {
    return (
      <header className="header">
        <div className="header--content">
          <span className="header--content-logo">LOGO</span>
          <Nav/>
        </div>
      </header>
    );
  }
}

export default Head;
