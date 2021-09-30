import React, { Component } from "react";

class Card extends Component {

  render() {
    const {title, urlToImage, content, publishedAt, author} = this.props.value
    // console.log(this.props);
    // console.log(removeFunction);
    // const options = { year: 'numeric', month: 'long', day: 'numeric' }
    // const dateNew = publishedAt.toLocaleDateString("es-ES", options)
    return (
      <div>
        <img src={urlToImage} alt={title} />
        <h3>{title}</h3>
        {author ? <span>{author}</span> : null}
        <p>{content}</p>
        {/* {dateNew} */}
        <button onClick={this.props.removeFunction}>Eliminar</button>
      </div>
    );
  }
}

export default Card;
