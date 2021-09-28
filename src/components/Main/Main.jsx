import React, { Component } from "react";
import Home from '../Home'
import Form from '../Form'
import ListNews from '../ListNews'

import { Route, Switch } from 'react-router-dom';


class Main extends Component {
  render() {
    return (
      <main>
        <Switch>
          <Route path='/' component={Home} exact />
          <Route path='/form' component={Form}  />
          <Route path='/list' component={ListNews}  />
          <Route component={Error}  />
        </Switch>
      </main>
    )
  }
}

export default Main;
