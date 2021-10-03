import React, { Component } from "react";
// import { collection, addDoc } from "firebase/firestore";

import userContext from '../../context/userContext'
// import { db } from '../../firebase/configFirebase'
import { TextField, Button } from '@mui/material';

import { Redirect } from 'react-router-dom'



class Home extends Component {

  constructor(props) {
    super(props)
    this.inputName = React.createRef()
  }

  state = {
    inputNombre: ''
  }

  handleSubmit = (event) => {
    event.preventDefault()
  }

  handleChangeInput = (event) => {
    this.setState({ inputNombre: event.target.value })
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />
    }
    return (
      <userContext.Consumer>
        {({ user, setUser }) => user.name
          ?
          <div className="home">
            <div className="home--container container-small">
              <h1>{user.name}, puedes visitar la sección crear noticias.</h1>
              <Button variant="contained" onClick={() => this.setState({redirect: '/form'})}>Visitar</Button>
            </div>
            <div className="home--container container-small">
              <h1>También puedes ver las noticias ya disponibles.</h1>
              <Button variant="contained" onClick={() => this.setState({redirect: '/list'})}>Visitar</Button>
            </div>
          </div>
          :
          <div className="home">
            <div className="home--container">
              <h1 className="home--container-h1">Bienvenido/a!<br />Dinos tu nombre para asociarte a las noticias creadas por ti</h1>
              <form onSubmit={this.handleSubmit} className="home--container-form">
                <TextField id="nombre" label="Nombre" variant="standard" onChange={this.handleChangeInput} />
                <Button color="primary" type="submit" variant="contained" onClick={() => setUser(this.state.inputNombre)}>Enviar</Button>
              </form>
            </div>
          </div>
        }
      </userContext.Consumer>
    )
  }
}

export default Home;
