import React, { Component } from "react";

import { Link } from 'react-router-dom';

import userContext from '../../context/userContext';


class Nav extends Component {
  render() {
    return (
      <userContext.Consumer>
        {({ user, setUser }) => user.name
          ? (<ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/form">Crear noticias</Link></li>
            <li><Link to="/list">Noticias</Link></li>
            <li><span>{user.name}</span></li>
          </ul>)
          : (<ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/form">Crear noticias</Link></li>
            <li><Link to="/list">Noticias</Link></li>
          </ul>)
        }
      </userContext.Consumer>
    )
  }
}

export default Nav;
