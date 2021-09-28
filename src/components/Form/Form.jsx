import React, { Component } from "react";
// import { collection, addDoc } from "firebase/firestore";

// import { db } from '../../firebase/configFirebase'

class Form extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       
    }
  }
  

  // handleSubmit = (event) => {
  //   event.preventDefault()

  //   const noticia = {}
  //   try {
  //     const docRef = await addDoc(collection(db, "news"), noticia);
  //     console.log("Document written with ID: ", docRef.id);
  //   } catch (e) {
  //     console.error("Error adding document: ", e);
  //   }
  // }
// }

  handleSubmit = (event) => {
    event.preventDefault()
    const title = event.target.elements.titulo.value
    const urlToImage = event.target.elements.img.value
    const publishedAt = event.target.elements.contenido.value

    const obj = {
      title,
      urlToImage,
      publishedAt,
    }
    this.props.handleStateNews(obj)
  }

render() {
  return (
    <div>
      <h2>Añade una nueva noticia</h2>

      <form onSubmit={this.handleSubmit}>
        <label>Titutlo</label>
        <input type="text" name="titulo" />

        <label>Url imagen</label>
        <input type="text" name="img" />

        <label>Contenido</label>
        <input type="text" name="contenido" />

        <input type="submit" />
      </form>
    </div>
  )
}
}

export default Form;


// author
// title
// urlToImage
// publishedAt
// content
