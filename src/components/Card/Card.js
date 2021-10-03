import React, { Component } from "react";

import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

class Card extends Component {

  render() {
    const { title, urlToImage, content, publishedAt, author } = this.props.value
    // console.log(this.props);
    // console.log(removeFunction);
    // const options = { year: 'numeric', month: 'long', day: 'numeric' }
    // const dateNew = publishedAt.toLocaleDateString("es-ES", options)
    return (
      <div className="card">
        {urlToImage ? <img src={urlToImage} alt={title} /> : null}
        <div className="container-content">
          <h3>{title}</h3>
          {author ? <span>{author}</span> : null}
          <p>{content}</p>
          {/* {dateNew} */}
        </div>
          <IconButton className="delete-button" size="large" onClick={this.props.removeFunction} aria-label="delete">
            <DeleteIcon />
          </IconButton>
      </div>
    );
  }
}

export default Card;
