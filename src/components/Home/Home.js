import React, { Component } from "react";
import { collection, addDoc } from "firebase/firestore";

import {db} from '../../firebase/configFirebase'

class Home extends Component {


  pruebaFirebase = async (noticia) => {
    try {
      const docRef = await addDoc(collection(db, "noticias"), noticia);
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

  render() {
    // this.pruebaFirebase()
    return (
      <h1>Esto es la home</h1>
    )
  }
}

export default Home;
