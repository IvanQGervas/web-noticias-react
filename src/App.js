import Head from './components/Head'
import Main from './components/Main'
import Footer from './components/Footer'

import userContext from './context/userContext';

import { BrowserRouter } from 'react-router-dom';

import './App.css';

import React, { Component } from 'react'

class App extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       user: {}
    }
  }
  
  render() {
    return (
      <div className="App">
      <userContext.Provider value={this.state.user}>
        <BrowserRouter>
          <Head />
          <Main />
        </BrowserRouter>
      </userContext.Provider>
      <Footer />
    </div>
    )
  }
}
export default App;
