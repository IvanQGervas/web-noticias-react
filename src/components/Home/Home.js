import React, { Component } from "react";
import { collection, addDoc } from "firebase/firestore";

import userContext from '../../context/userContext'
import { db } from '../../firebase/configFirebase'

class Home extends Component {

  constructor(props) {
    super(props)
    this.inputName = React.createRef()
  }



  pruebaFirebase = async (noticia) => {
    try {
      const docRef = await addDoc(collection(db, "noticias"), noticia);
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

  handleSubmit = (event) => {
    event.preventDefault()
  }

  render() {
    return (
      <userContext.Consumer>
        {({ user, setUser }) => user.name
          ?
          <div>
            <h1>{user.name}, Puedes crear noticias Aqui . O ver las noticias ya disponibles Aqui .</h1>
          </div>
          :
          <div>
            <h1>Bienvenido/a! Dinos tu nombre para asociarte a las noticias creadas por ti</h1>
            {console.log(user)}
            <form onSubmit={this.handleSubmit}>
              <label htmlFor="Nombre"></label>
              <input type="text" ref={this.inputName} />
              <input type="submit" onClick={() => setUser(this.inputName.current.value)} />
            </form>
          </div>
        }
      </userContext.Consumer>


    )
  }
}

export default Home;
