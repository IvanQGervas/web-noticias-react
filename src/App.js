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

  setUser = (value) => {
    this.setState({user: {name: value}})
  }
  
  render() {
    const value = {
      user: this.state.user,
      setUser: this.setUser,
    }
    return (
      <div className="App">
      <userContext.Provider value={value}>
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
