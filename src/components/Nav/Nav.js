import React, { Component } from "react";

import { Link } from 'react-router-dom';

import userContext from '../../context/userContext';


class Nav extends Component {
  render() {
    return (
      <userContext.Consumer>
        {({ user, setUser }) => user.name
          ? (
            <ul className="Nav">
              <li className="Nav--li"><Link to="/"><span>Home</span></Link></li>
              <li className="Nav--li"><Link to="/form"><span>Crear noticias</span></Link></li>
              <li className="Nav--li"><Link to="/list"><span>Noticias</span></Link></li>
              <li className="Nav--li"><span className="span-username">Hola, {user.name}</span></li>
            </ul>)
          : (
            <ul className="Nav">
              <li className="Nav--li"><Link to="/"><span>Home</span></Link></li>
              <li className="Nav--li"><Link to="/form"><span>Crear noticias</span></Link></li>
              <li className="Nav--li"><Link to="/list"><span>Noticias</span></Link></li>
            </ul>)
        }
      </userContext.Consumer>
    )
  }
}

export default Nav;