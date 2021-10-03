// Dependencias
import React, { Component } from "react";

// Material UI
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

class Card extends Component {

  render() {
    const { title, urlToImage, content, author } = this.props.value;

    return (
      <div className="card">
        {urlToImage ? <img src={urlToImage} alt={title} /> : null}
        <div className="container-content">
          <h3>{title}</h3>
          {author ? <span>{author}</span> : null}
          <p>{content}</p>
        </div>
          <IconButton className="delete-button" size="large" onClick={this.props.removeFunction} aria-label="delete">
            <DeleteIcon />
          </IconButton>
      </div>
    );
  }
}

export default Card;
