import React, { Component } from "react";
import { Redirect } from 'react-router-dom';

import userContext from "../../context/userContext";
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
      publishedAt: new Date(),
      author: this.context.user ? this.context.user.name : 'Anonimo'
    }
    this.setState({ redirect: true, newNews })
  }

  render() {
    console.log(this.context.user.name);
    console.log(userContext.Consumer.currentValue);
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










// import React, { Component } from "react";
// import { Redirect } from 'react-router-dom';
// // import { collection, addDoc } from "firebase/firestore";

// // import { db } from '../../firebase/configFirebase'

// class Form extends Component {

//   constructor(props) {
//     super(props)

//     this.state = {
//       redirect: 'ey'
//     }
//   }

//   // handleSubmit = (event) => {
//   //   event.preventDefault()

//   //   const noticia = {}
//   //   try {
//   //     const docRef = await addDoc(collection(db, "news"), noticia);
//   //     console.log("Document written with ID: ", docRef.id);
//   //   } catch (e) {
//   //     console.error("Error adding document: ", e);
//   //   }
//   // }
//   // }

//   handleSubmit = (event) => {
//     event.preventDefault()
//     this.setState({ redirect: 'true' })

//     console.log(this.state.redirect);
//      //

//     // author
//     // title
//     // urlToImage
//     // publishedAt
//     // content
//   }

//   componentDidUpdate(prevProps, prevState){
//     console.log('entramos en didupdate')
//     /* console.log('prev', prevProps);
//     console.log('state', prevState); */

//     //this.setState({redirect: true})


//     /// HACER REFERENCIA DE CADA INPUT Y PONERLOS AQUI!!!!!!!
//     // REVISAR EL IF DEL RENDER

//     const title = event.target.elements.titulo.value
//     const urlToImage = event.target.elements.img.value
//     const content = event.target.elements.contenido.value
//     const obj = {
//       title,
//       urlToImage,
//       content,
//       publishedAt: new Date(),
//       author: 'Anonimo'
//     }
//     this.props.handleStateNews(obj)

//   }

//   render() {
//     console.log(this.state.redirect);
//     const {redirect} = this.state.redirect
//     if (!redirect) {
//       return (
//         <div>
//           <h2>Añade una nueva noticia</h2>

//           <form onSubmit={this.handleSubmit}>
//             <label>Titutlo</label>
//             <input type="text" name="titulo" />

//             <label>Url imagen</label>
//             <input type="text" name="img" />

//             <label>Contenido</label>
//             <input type="text" name="contenido" />

//             <input type="submit" />
//           </form>
//         </div>
//       )
//     } else {
//       return (
//         <div>
//           <Redirect to="/list" />
//         </div>
//       )
//     }

//   }
// }


// export default Form;


// // author
// // title
// // urlToImage
// // publishedAt
// // content
