// Dependencias
import React, { Component } from "react";
import { Redirect } from 'react-router-dom';
import cogoToast from 'cogo-toast';

// Context usuario
import userContext from "../../context/userContext";

// Material UI
import { TextField, Button } from '@mui/material';

class Form extends Component {

  constructor(props) {
    super(props)

    this.state = {
      redirect: false,
      newNews: {}
    }
  }


  handleSubmit = (event) => {
    event.preventDefault()

    const title = event.target.titulo.value
    const urlToImage = event.target.url.value
    const content = event.target.contenido.value
    console.log(title, urlToImage, content );
    const newNews = {
      title,
      urlToImage,
      content,
      author: this.context.user ? this.context.user.name : 'Anonimo'
    }

    cogoToast.success("Noticia creada con exito!");
    this.setState({ redirect: true, newNews })
  }

  render() {
    if (!this.state.redirect) {
      return (
        <div className="form">
          <div className="form--container">
            <h2>Añade una nueva noticia</h2>

            <form onSubmit={this.handleSubmit}>
              <TextField required name="titulo" className="inputs" id="" label="Titulo" variant="standard" />

              <TextField required name="url" className="inputs" id="" label="Url imagen" variant="standard" defaultValue="https://..."/>

              <TextField
                required
                name="contenido"
                className="inputs"
                id="standard-multiline-static"
                label="Contenido"
                multiline
                rows={4}
                defaultValue="Contenido..."
                variant="standard"
              />

              <Button color="primary" type="submit" variant="contained">Enviar</Button>
            </form>
          </div>
        </div>
      )
    } else {
      this.props.handleStateNews(this.state.newNews)
      return <Redirect to="/list" />
    }
  }
}

Form.contextType = userContext // Le damos contexto a la class para poder recoger la información del usuario sin llamar a userContext.Consumer

export default Form;