import React, { Component } from "react";
import Home from '../Home'
import Form from '../Form'
import ListNews from '../ListNews'

import { Route, Switch } from 'react-router-dom';


class Main extends Component {

  state = {
    news: []
  }

  handleStateNews = (newNew) => { // Función para modificar el state, pasada al Form
    this.setState({ news: [...this.state.news, newNew] })
  }

  render() {
    return (
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/form" component={() => <Form handleStateNews={this.handleStateNews} />} />
          <Route path='/list' component={() => <ListNews news={this.state.news} />} />
          <Route component={Error} />
        </Switch>
      </main>
    )
  }
}

export default Main;
