// Dependencias
import React, { Component } from "react";
import axios from "axios";
import cogoToast from 'cogo-toast';

// Libreria imagenes
import Masonry from 'react-masonry-css'

// Componentes
import Card from '../Card'

class ListNews extends Component {

  state = {
    news: [...this.props.news]
  }

  removeFunction = (index) => {
    const updatedNews = this.state.news.filter((el, i) => i !== index)
    this.setState({ news: updatedNews })
    cogoToast.info("Noticia eliminada", { position: 'top-right', heading: 'Aviso!' });
  };

  async componentDidMount() {
    const res = await fetch(`${process.env.REACT_APP_URL}`)
    const data = await res.json()
    console.log(data)
    this.setState({ news: [...this.state.news, ...data.articles] })
  }

  render() {
    const breakpointColumnsObj = {
      default: 3,
      1024: 2,
      630: 1
    };
    console.log(this.state.news);
    return (
      <div className="list-news">
        <div className="list-news--container">
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
          >
            {this.state.news.map((el, index) => <Card removeFunction={() => this.removeFunction(index)} value={el} key={index} />)}
          </Masonry>
        </div>
      </div>
    );
  }
}

export default ListNews;
